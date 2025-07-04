using Microsoft.EntityFrameworkCore;
using TasksAPI.Data;
using TasksAPI.DTOs;
using TasksAPI.Models;

namespace TasksAPI.Services
{
    public class TaskService : ITaskService
    {
        private readonly TasksDbContext _context;

        public TaskService(TasksDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TaskResponseDto>> GetAllTasksAsync()
        {
            var tasks = await _context.Tasks
                .OrderByDescending(t => t.CreatedAt)
                .ToListAsync();

            return tasks.Select(MapToResponseDto);
        }

        public async Task<TaskResponseDto?> GetTaskByIdAsync(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            return task != null ? MapToResponseDto(task) : null;
        }

        public async Task<TaskResponseDto> CreateTaskAsync(CreateTaskDto createTaskDto)
        {
            var task = new TaskItem
            {
                Title = createTaskDto.Title,
                Description = createTaskDto.Description,
                Priority = createTaskDto.Priority,
                CreatedAt = DateTime.UtcNow,
                IsCompleted = false
            };

            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            return MapToResponseDto(task);
        }

        public async Task<TaskResponseDto?> UpdateTaskAsync(int id, UpdateTaskDto updateTaskDto)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
                return null;

            var wasCompleted = task.IsCompleted;

            if (!string.IsNullOrEmpty(updateTaskDto.Title))
                task.Title = updateTaskDto.Title;

            if (updateTaskDto.Description != null)
                task.Description = updateTaskDto.Description;

            if (updateTaskDto.IsCompleted.HasValue)
            {
                task.IsCompleted = updateTaskDto.IsCompleted.Value;
                
                // Set CompletedAt when task is marked as completed
                if (updateTaskDto.IsCompleted.Value && !wasCompleted)
                {
                    task.CompletedAt = DateTime.UtcNow;
                }
                // Clear CompletedAt when task is marked as not completed
                else if (!updateTaskDto.IsCompleted.Value && wasCompleted)
                {
                    task.CompletedAt = null;
                }
            }

            if (updateTaskDto.Priority.HasValue)
                task.Priority = updateTaskDto.Priority.Value;

            task.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();
            return MapToResponseDto(task);
        }

        public async Task<bool> DeleteTaskAsync(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
                return false;

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();
            return true;
        }

        private static TaskResponseDto MapToResponseDto(TaskItem task)
        {
            return new TaskResponseDto
            {
                Id = task.Id,
                Title = task.Title,
                Description = task.Description,
                IsCompleted = task.IsCompleted,
                CreatedAt = task.CreatedAt,
                UpdatedAt = task.UpdatedAt,
                CompletedAt = task.CompletedAt,
                Priority = task.Priority
            };
        }
    }
}
