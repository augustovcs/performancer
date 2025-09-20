/*

Defined the packages and libraries for project usage below,
Keep just the "using" as already injected for better memory economy and usage.
For first time looking the project, keep maintain this arc model for Services.

*/


using System.ComponentModel.DataAnnotations;
using Auth.DTO;
using Auth.Interfaces;
using Auth.Models;
using Microsoft.AspNetCore.Http.HttpResults;

namespace Auth.Services;


public class LoginUserService : IAuthService
{
    private readonly Supabase.Client _supabaseClient;

    public LoginUserService(Supabase.Client supabaseClient)
    {
        _supabaseClient = supabaseClient;
    }

    public async Task<AuthCredentials> LoginUser(LoginUserFullDTO credentials)
    {
        /*
        essa verificação está bugada!
        ele nunca verifica apenas email ou senha, ele verifica se o email ta certo
        se nao tiver, ele ja da null
        se tiver, ele verifica a senha.

        */

        var credentialPost = await _supabaseClient
            .From<AuthCredentials>()
            .Filter("email", Supabase.Postgrest.Constants.Operator.Equals, credentials.Email)
            .Single();

            if (credentialPost == null)
            {
            ///Console.WriteLine("Wrong email");
            throw new ValidationException("Wrong email");
            }

            bool verifyHashed = BCrypt.Net.BCrypt.EnhancedVerify(credentials.Password, credentialPost.Password_Id);
            
            if (!verifyHashed)
            {
            ///Console.WriteLine("Wrong password");
            throw new ValidationException("Wrong hashed password");
            }

            var user = new AuthCredentials
            {
                User_ID = credentialPost.User_ID,
                Email_Id = credentialPost.Email_Id,
                Password_Id = credentialPost.Password_Id
                
            };

            credentialPost.Last_Login = DateTime.Now;
            var responseLastLogin = await _supabaseClient
                .From<AuthCredentials>()
                .Update(credentialPost);
            

        

        /*
        LOG TESTING
        this is just for testing, not for production use for evicting leaks
        */

        //Console.WriteLine($"Password (hash): {user.Password_Id}");
        //Console.WriteLine($"Password (crude): {credentials.Password}");
        Console.WriteLine($"the id: {user.User_ID}");

        
        return user;

        
    }

}