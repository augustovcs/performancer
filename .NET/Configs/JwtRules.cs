using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Logging;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

namespace Configs.JwtRules;

/*
This is a method that we generate a JWT Token for multi-layer comsumption as front-end and database
Here we are going to doc each part of this class.

*/


public class JwtTokenGenerator
{
    
    public string email;
    public string id;
    
    private readonly IConfiguration _config;

    public JwtTokenGenerator(IConfiguration config)
    {
        _config = config;
    }
    
    

    /*

    This method generates a token from id and email, based on the Base64 
    string key on appsettings.Development

    */
    
    
    //SPACE FOR METHOD REFRESH TOKEN
    
    
    public string GenerateToken(int id, string email)
    {
        
        var jwtKey = _config["Jwt:Key"];
        if (string.IsNullOrEmpty(jwtKey))
        {
            throw new Exception("JWT IS MISSING ");
        }

        // Defines the appsettings key as a symmetric key

        var securityKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(jwtKey)
        );
        

        // Pull the symmetric key and transform into a sha256 encrypted algorithm

      
        
        var credentials = new SigningCredentials(securityKey,
        SecurityAlgorithms.HmacSha512);

        // creates the payload based on email, id and JTI

        var claims = new[] {
            new Claim(JwtRegisteredClaimNames.Sub, email),
            new Claim("userId", id.ToString()),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())

        };

        //fiiiiinally creates the tokeeeeeeeeeen

        var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Audience"],
            claims: claims,
            expires: DateTime.Now.AddHours(6),
            signingCredentials: credentials


        );


        return new JwtSecurityTokenHandler().WriteToken(token);

    }


}


