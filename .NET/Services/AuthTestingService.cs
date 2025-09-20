/*

Defined the packages and libraries for project usage below,
Keep just the "using" as already injected for better memory economy and usage.
For first time looking the project, keep maintain this arc model for Services.

*/


using System.Runtime.CompilerServices;
using Auth.DTO;
using Auth.Interfaces;
using Auth.Models;

namespace Auth.Services;

public class AuthTestingService : ITestingServices
{
    private readonly Supabase.Client _supabaseClient;

    public AuthTestingService(Supabase.Client supabaseClient)
    {
        _supabaseClient = supabaseClient;
    }

    public async Task<List<AuthLoginDTO>> GetAllUserCredentials()
    {
        var credentialsResponse = await _supabaseClient
        .From<AuthCredentials>() // Adjust the limit as you need, this is for testing purposes
        .Get();

        Console.WriteLine($"Total found: {credentialsResponse.Models.Count}");


        return credentialsResponse.Models.Select(c => new AuthLoginDTO
        {
            Id = c.User_ID,
            Email = c.Email_Id,
            Password = c.Password_Id
        })
        .OrderByDescending(c => c.Id)
        .ToList();

    }

    public async Task<bool> RegisterUserTesting(RegisterUserDTO credentials)
    {

        var credentialPost = await _supabaseClient
        .From<AuthCredentials>()
        .Where(x => x.Email_Id == credentials.Email && x.Password_Id == credentials.Password)
        .Get();

        if (credentialPost.Model != null)
        {
            return false;
        }

        var newUser = new AuthCredentials
        {
            Email_Id = credentials.Email,
            Password_Id = credentials.Password,
            Is_Admin = false

        };

        var response = await _supabaseClient
        .From<AuthCredentials>()
        .Insert(newUser);

        return response.Models != null && response.Models.Any();

    }


    public async Task<bool> LoginUserTesting(RegisterUserDTO credentials)
        {

            var credentialPost = await _supabaseClient
            .From<AuthCredentials>()
            .Where(c => c.Email_Id == credentials.Email)
            .Get();

            if (credentialPost == null || !credentialPost.Models.Any())
            {
                return false;
            }

            var user = credentialPost.Models.First();
            

            bool verifyHashed = BCrypt.Net.BCrypt.EnhancedVerify(credentials.Password, user.Password_Id);

            /* 
            LOG TESTING
             this is just for testing, not for production use for evicting leaks

            Console.WriteLine($"Password (hash): {user.Password_Id}");
            Console.WriteLine($"Password (crude): {credentials.Password}");


            */
            return verifyHashed;
            


        }

}