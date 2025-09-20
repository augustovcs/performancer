/*

Defined the packages and libraries for project usage below,
Keep just the "using" as already injected for better memory economy and usage.
For first time looking the project, keep maintain this arc model for Models.

*/


using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace Auth.Models;

[Table("auth_credentials")]
public class AuthCredentials : BaseModel
{

    [PrimaryKey("id", false)]
    public int User_ID { get; set; }

    [Column("email")]
    public string Email_Id { get; set; } = string.Empty;

    [Column("password_hash")]
    public string Password_Id { get; set; } = string.Empty;

    [Column("is_admin")]
    public bool Is_Admin { get; set; }

    [Column("updated_at")]
    public DateTime Last_Update { get; set; }
    [Column("last_login")]
    public DateTime Last_Login { get; set; }

}

