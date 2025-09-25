using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace Auth.Models;


[Table("notepad_blocks")]
public class NotepadBlocks : BaseModel
{
    [PrimaryKey("id")]
    public int Block_ID { get; set; }
    
    [Column("uuid_id")]
    public string UUID { get; set; }
    
    [Column("title")]
    public string Title { get; set; }
    
    [Column("note_text")]
    public string NoteText { get; set; }
    
    [Column("image_url")]
    public string ImageUrl { get; set; }
    
    [Column("image_data")]
    public byte[] ImageData { get; set; }
    
    [Column("inserted_at")]
    public DateTime Created_At { get; set; }
    
    [Column("updated_at")]
    public DateTime Updated_At { get; set; }

    
}