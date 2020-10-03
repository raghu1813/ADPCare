using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Data
{
    public class Seed
    {
        public static void SeedUsers(UserManager<User> userManager, RoleManager<Role> roleManager)
        {
            if (!userManager.Users.Any())
            {
                var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);
                var roles = new List<Role>
                {
                    new Role{Name = "Employee"},
                    new Role{Name = "Admin"},

                };

                foreach (var role in roles)
                {
                    roleManager.CreateAsync(role).Wait();
                }
                foreach (var user in users)
                {

                    userManager.CreateAsync(user, "password").Wait();
                    userManager.AddToRoleAsync(user, "Employee").Wait();

                }
                var managerUser = new User
                {
                    UserName = "Admin"
                };

                var result = userManager.CreateAsync(managerUser, "password").Result;

                if (result.Succeeded)
                {
                    var admin = userManager.FindByNameAsync("Admin").Result;
                    userManager.AddToRolesAsync(admin, new[] { "Admin" }).Wait();
                }

            }
        }
    }
}
