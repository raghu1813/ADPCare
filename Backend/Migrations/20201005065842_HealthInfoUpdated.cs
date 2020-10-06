using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class HealthInfoUpdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "FamilyStatus",
                table: "HealthInfos",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<float>(
                name: "OxygenLevel",
                table: "HealthInfos",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "Temperature",
                table: "HealthInfos",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "RiskScore",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0f);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FamilyStatus",
                table: "HealthInfos");

            migrationBuilder.DropColumn(
                name: "OxygenLevel",
                table: "HealthInfos");

            migrationBuilder.DropColumn(
                name: "Temperature",
                table: "HealthInfos");

            migrationBuilder.DropColumn(
                name: "RiskScore",
                table: "AspNetUsers");
        }
    }
}
