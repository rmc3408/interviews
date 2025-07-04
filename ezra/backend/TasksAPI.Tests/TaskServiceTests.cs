using Microsoft.EntityFrameworkCore;
using TasksAPI.Data;
using TasksAPI.DTOs;
using TasksAPI.Models;
using TasksAPI.Services;

namespace TasksAPI.Tests
{
    public class TaskServiceTests : IDisposable
    {
        private readonly TasksDbContext _context;
        private readonly TaskService _taskService;

        public TaskServiceTests()
        {
            var options = new DbContextOptionsBuilder<TasksDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;

            _context = new TasksDbContext(options);
            _taskService = new TaskService(_context);
        }

        [Fact]
        public async Task CreateTaskAsync_ShouldCreateTask_WhenValidDataProvided()
        {
            // Arrange
            var createTaskDto = new CreateTaskDto
            {
                Title = "Test Task",
                Description = "Test Description",
                Priority = TaskPriority.High
            };

            // Act
            var result = await _taskService.CreateTaskAsync(createTaskDto);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Test Task", result.Title);
            Assert.Equal("Test Description", result.Description);
            Assert.Equal(TaskPriority.High, result.Priority);
            Assert.False(result.IsCompleted);
            Assert.True(result.Id > 0);
        }

        [Fact]
        public async Task GetTaskByIdAsync_ShouldReturnTask_WhenTaskExists()
        {
            // Arrange
            var task = new TaskItem
            {
                Title = "Test Task",
                Description = "Test Description",
                Priority = TaskPriority.Medium
            };
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            // Act
            var result = await _taskService.GetTaskByIdAsync(task.Id);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Test Task", result.Title);
            Assert.Equal(task.Id, result.Id);
        }

        [Fact]
        public async Task GetTaskByIdAsync_ShouldReturnNull_WhenTaskDoesNotExist()
        {
            // Act
            var result = await _taskService.GetTaskByIdAsync(999);

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public async Task UpdateTaskAsync_ShouldUpdateTask_WhenValidDataProvided()
        {
            // Arrange
            var task = new TaskItem
            {
                Title = "Original Title",
                Description = "Original Description",
                Priority = TaskPriority.Low
            };
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            var updateDto = new UpdateTaskDto
            {
                Title = "Updated Title",
                IsCompleted = true,
                Priority = TaskPriority.High
            };

            // Act
            var result = await _taskService.UpdateTaskAsync(task.Id, updateDto);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Updated Title", result.Title);
            Assert.True(result.IsCompleted);
            Assert.Equal(TaskPriority.High, result.Priority);
            Assert.NotNull(result.CompletedAt);
            Assert.NotNull(result.UpdatedAt);
        }

        [Fact]
        public async Task DeleteTaskAsync_ShouldReturnTrue_WhenTaskExists()
        {
            // Arrange
            var task = new TaskItem
            {
                Title = "Task to Delete",
                Priority = TaskPriority.Medium
            };
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            // Act
            var result = await _taskService.DeleteTaskAsync(task.Id);

            // Assert
            Assert.True(result);
            var deletedTask = await _context.Tasks.FindAsync(task.Id);
            Assert.Null(deletedTask);
        }

        [Fact]
        public async Task DeleteTaskAsync_ShouldReturnFalse_WhenTaskDoesNotExist()
        {
            // Act
            var result = await _taskService.DeleteTaskAsync(999);

            // Assert
            Assert.False(result);
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
