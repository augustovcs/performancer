using Auth.DTO;
using Auth.Interfaces;
using Auth.Models;
using Microsoft.AspNetCore.Mvc;
using Configs.JwtRules;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.IdentityModel.Tokens.Jwt;

namespace Auth.Controllers;

[ApiController]
[Route("api/auth")]
public class LoginUserController : ControllerBase
{
    private readonly IAuthService _authTesting;
    private readonly JwtTokenGenerator _jwtTokenGenerator;

    public LoginUserController(IAuthService authTesting, JwtTokenGenerator jwtTokenGenerator)
    {
        _authTesting = authTesting;
        _jwtTokenGenerator = jwtTokenGenerator;

    }

    [HttpPost("login")]
    public async Task<IActionResult> Authentication([FromBody] LoginUserFullDTO user)
    {
        AuthCredentials loginSuccess = await _authTesting.LoginUser(user);

        if (loginSuccess == null)
        {
            return BadRequest("Email or password incorrect. ");
        }

        Console.WriteLine($"User logged: {user.Email}");

        if (string.IsNullOrEmpty(_jwtTokenGenerator.GenerateToken(user.Id, user.Email)))
        {
            return Unauthorized();

        }
        
        var token = _jwtTokenGenerator.GenerateToken(loginSuccess.User_ID, user.Email);

        return Ok(new
        {
            message = "User logged successfully",
            token,
            user = new { loginSuccess.User_ID, loginSuccess.Email_Id },

        });
    }
}