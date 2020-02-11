namespace SmartFleetManagement.Services.View_Models
{
    public class AuthenticatedUserViewModel
    {
        public string Token { get; set; }
        public string Role { get; set; }

        private AuthenticatedUserViewModel() { }

        public AuthenticatedUserViewModel(string token, string role)
        {
            Token = token;
            Role = role;
        }
    }
}
