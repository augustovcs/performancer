/*

Defined the packages and libraries for project usage below,
Keep just the "using" as already injected for better memory economy and usage.
For first time looking the project, keep maintain this arc model for Services.

*/


using System.ComponentModel.DataAnnotations;
using Auth.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Supabase.Gotrue;
using Task.DTO;
using Task.Interfaces;
using Task.Models;
using Classes.Special;



namespace Task.Services;

public class ItemTaskService : ITaskItem
{

    private readonly Supabase.Client _supabaseClient;
    public ItemTaskService(Supabase.Client supabaseClient)
    {
        _supabaseClient = supabaseClient;
    }


    public async Task<List<TaskItemDTO>> GetTaskByStatus(int status)
    {
        var taskPost = await _supabaseClient
            .From<TaskItem>()
            .Where(t => t.Status == status)
            .Get();

        return taskPost.Models.Select(c => new TaskItemDTO()
        {
            Id = c.Task_ID,
            User_ID = c.User_ID,
            Title = c.Title,
            Description = c.Description,
            Priority = c.Priority,
            Created_At = c.Created_At
        }).ToList();

    }
    

    public async Task<List<TaskItemDTO>> GetAllTasks()
    {
        var taskPost = await _supabaseClient
        .From<TaskItem>()
        .Get();

        return taskPost.Models.Select(c => new TaskItemDTO

        {
            Id = c.Task_ID,
            User_ID = c.User_ID,
            Title = c.Title,
            Description = c.Description,
            Status = c.Status,
            Priority = c.Priority,
            Created_At = c.Created_At,
            Updated_At = c.Updated_At,
            Finished_At = c.Finished_At,
        }).ToList();
    }

    public async Task<bool> AddTask(TaskItemDTO task)
    {

        /*
        var credentialPost = await _supabaseClient
        .From<AuthCredentials>()
        .Where(x => x.User_ID == task.User_ID)
        .Single();

        if (credentialPost == null)
        {
            throw new ValidationException("User not found! please try again");
        }

        */

        var userResponse = await _supabaseClient
        .From<AuthCredentials>()
        .Filter("id", Supabase.Postgrest.Constants.Operator.Equals, task.User_ID)
        .Single();

        if (userResponse == null)
        {
            throw new ValidationException("User not found! ");

        }

        var newTask = new TaskItem
        {

            User_ID = task.User_ID,
            User_Email = userResponse.Email_Id,
            Title = task.Title,
            Description = task.Description,
            Status = task.Status,
            Priority = task.Priority,
            Created_At = DateTime.Now,



        };

        var response = await _supabaseClient
        .From<TaskItem>()
        .Insert(newTask);
      

        return response.Models != null && response.Models.Any();

    }

    public async Task<bool> RemoveTask(TaskItemDTO task)
    {

        try
        {
            await _supabaseClient
            .From<TaskItem>()
            .Filter("id", Supabase.Postgrest.Constants.Operator.Equals, task.Id)
            .Delete();

            return true;
        }

        catch
        {
            return false;
        }


    }


    public async Task<bool> EditTask(int id,  TaskItemEditDTO task)
    {


        var existingTask = await _supabaseClient
        .From<TaskItem>()
        .Filter("id", Supabase.Postgrest.Constants.Operator.Equals, id)
        .Single();


        if (existingTask == null)
        {
            throw new ValidationException("Task not found");

        }

        UpdateHelper.UpdateValidProperties(existingTask, task);



        /*

        THIS IS A OLD METHOD THAT WAS USING INSTEAD THE CLASS AND METHOD ABOVE (UPDATEHELPER)!
        PLEASE DON'T USE IT, IT WILL WORK BUT... IT'S PRETTIER USING THE UPDATEHELPER :)

        bool isTitleValid = !string.IsNullOrWhiteSpace(task.Title) && task.Title != "string" && task.Title != existingTask.Title;
        if (isTitleValid)
        {
            existingTask.Title = task.Title;
        }

        bool isDescriptionValid = !string.IsNullOrWhiteSpace(task.Description) && task.Description != "string" && task.Description != existingTask.Description;
        if (isDescriptionValid)
        {
            existingTask.Description = task.Description;
        }

        bool isStatusValid = task.Status != 0 &&  task.Status >= 1  &&task.Status != existingTask.Status;
        if (isStatusValid)
        {
            existingTask.Status = task.Status;
        }

        bool isPriorityValid = task.Priority != 0 &&  task.Priority >= 1  &&task.Priority != existingTask.Priority;
        if (isPriorityValid)
        {
            existingTask.Priority = task.Priority;
        }


        */
        

        var response = await _supabaseClient
        .From<TaskItem>()
        .Filter("id", Supabase.Postgrest.Constants.Operator.Equals, id)
        .Update(existingTask);
        existingTask.Updated_At = DateTime.UtcNow;


        //retorna se nao for nulo
        //retorna tudo que tiver
        return response.Model != null && response.Models.Any();

    }


}