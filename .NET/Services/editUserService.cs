/*

Defined the packages and libraries for project usage below,
Keep just the "using" as already injected for better memory economy and usage.
For first time looking the project, keep maintain this arc model for Services.

*/



using BCrypt.Net;
using Auth.DTO;
using Auth.Interfaces;
using Auth.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using System.Security.Cryptography.X509Certificates;


namespace Auth.Services;


public class EditService : IEditService
{

    private readonly Supabase.Client _supabaseClient;

    public EditService(Supabase.Client supabaseClient)
    {
        _supabaseClient = supabaseClient;
    }

   public async Task<bool> EditUser(AuthLoginDTO credentials)
{
    
    //test this
    //validates if credentials are 0 or negative
    if (credentials.Id <= 0)
            throw new ValidationException("User ID cannot be 0 or negative.");

    var credentialPost = await _supabaseClient
        .From<AuthCredentials>()
        .Where(x => x.User_ID == credentials.Id)
        .Single();

    
    //validates if this id exists in the database
    
    if (credentialPost == null)
            throw new ValidationException("User not found.");

    
    /*
    Here we check if the email and password are valid.
    To be valid, they must follow these rules:
    - Email must not be null, empty, or equal to "string".
    - Password must not be null, empty, equal to "string" or equal the already using (we are doing a hash verify for this one, 
    if the hash = crude password, then don't need change the hash again).

    If both are invalid, we throw a ValidationException.

    If either is valid, we update the corresponding field in the credentialPost object.

    The update for password doesn't generate another hash if the password is not changed.

    Finally if the password is equals the existing one hashed in database, we don't update it to maintain the original hash.
    */

    bool isEmailValid = !string.IsNullOrWhiteSpace(credentials.Email) && credentials.Email != "string" && credentials.Email != credentialPost.Email_Id; 
    bool isPasswordValid = !string.IsNullOrWhiteSpace(credentials.Password) && credentials.Password != "string" && !BCrypt.Net.BCrypt.Verify(credentials.Password, credentialPost.Password_Id);

    if (!isEmailValid && !isPasswordValid)
        throw new ValidationException("Neither email nor password will be changed. Nothing was updated.");

        if (isEmailValid)
            credentialPost.Email_Id = credentials.Email;

    if (isPasswordValid)
        credentialPost.Password_Id = BCrypt.Net.BCrypt.HashPassword(credentials.Password);

    // Update the Last_Update field to the current UTC time
    // This is important to keep track of when the user was last edited.
    //Probably this will be used for auditing purposes in the future.

    credentialPost.Last_Update = DateTime.UtcNow;
    


    var response = await _supabaseClient
        .From<AuthCredentials>()
        .Update(credentialPost);


    // This never occured in my entire life, but just in case
    // we check if the response is null or empty.
    // If it is, we throw a ValidationException with a message indicating that the user update failed.
    // This is important to avoid null reference exceptions in the future.
    

    if (response.Models == null || !response.Models.Any())
            throw new ValidationException("User update failed.");

    return response.Models != null && response.Models.Any();
}
    
}