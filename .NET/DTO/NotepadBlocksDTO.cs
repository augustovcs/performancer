namespace performancer.DTO;

public class NotepadBlocksDTO
{
    public int block_id { get; set; }
    public string uuid_id { get; set; }
    
    public string title { get; set; }
    public string note_text { get; set; }
    
    public string image_url { get; set; }
    public byte[] image_data { get; set; }
    
    public DateTime created_at { get; set; }
    public DateTime updated_at { get; set; }

}