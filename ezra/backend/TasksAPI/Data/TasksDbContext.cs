using Microsoft.EntityFrameworkCore;
using TasksAPI.Models;

namespace TasksAPI.Data
{
    public class TasksDbContext : DbContext
    {
        public TasksDbContext(DbContextOptions<TasksDbContext> options) : base(options)
        {
        }

        public DbSet<TaskItem> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<TaskItem>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Title).IsRequired().HasMaxLength(200);
                entity.Property(e => e.Description).HasMaxLength(1000);
                entity.Property(e => e.IsCompleted).IsRequired();
                entity.Property(e => e.CreatedAt).IsRequired();
                entity.Property(e => e.Priority).IsRequired();
                
                // Add index for common queries
                entity.HasIndex(e => e.IsCompleted);
                entity.HasIndex(e => e.CreatedAt);
                entity.HasIndex(e => e.Priority);
            });

            // Seed data
            modelBuilder.Entity<TaskItem>().HasData(
                new TaskItem
                {
                    Id = 1,
                    Title = "Sample Task 1",
                    Description = "This is a sample task",
                    IsCompleted = false,
                    CreatedAt = DateTime.UtcNow,
                    Priority = TaskPriority.Medium
                },
                new TaskItem
                {
                    Id = 2,
                    Title = "Sample Task 2",
                    Description = "This is another sample task",
                    IsCompleted = true,
                    CreatedAt = DateTime.UtcNow.AddDays(-1),
                    CompletedAt = DateTime.UtcNow.AddHours(-2),
                    Priority = TaskPriority.High
                }
            );
        }
    }
}
