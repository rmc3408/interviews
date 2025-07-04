using Microsoft.AspNetCore.Mvc;
using TasksAPI.DTOs;
using TasksAPI.Models;
using TasksAPI.Services;

namespace TasksAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly ITaskService _taskService;

        public TasksController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        /// <summary>
        /// Get all tasks
        /// </summary>
        /// <returns>List of all tasks</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskResponseDto>>> GetAllTasks()
        {
            var tasks = await _taskService.GetAllTasksAsync();
            return Ok(tasks);
        }

        /// <summary>
        /// Get a specific task by ID
        /// </summary>
        /// <param name="id">Task ID</param>
        /// <returns>The requested task</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskResponseDto>> GetTask(int id)
        {
            var task = await _taskService.GetTaskByIdAsync(id);
            if (task == null)
                return NotFound($"Task with ID {id} not found.");

            return Ok(task);
        }

        /// <summary>
        /// Create a new task
        /// </summary>
        /// <param name="createTaskDto">Task creation data</param>
        /// <returns>The created task</returns>
        [HttpPost]
        public async Task<ActionResult<TaskResponseDto>> CreateTask([FromBody] CreateTaskDto createTaskDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var task = await _taskService.CreateTaskAsync(createTaskDto);
            return CreatedAtAction(nameof(GetTask), new { id = task.Id }, task);
        }

        /// <summary>
        /// Update an existing task
        /// </summary>
        /// <param name="id">Task ID</param>
        /// <param name="updateTaskDto">Task update data</param>
        /// <returns>The updated task</returns>
        [HttpPut("{id}")]
        public async Task<ActionResult<TaskResponseDto>> UpdateTask(int id, [FromBody] UpdateTaskDto updateTaskDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var task = await _taskService.UpdateTaskAsync(id, updateTaskDto);
            if (task == null)
                return NotFound($"Task with ID {id} not found.");

            return Ok(task);
        }

        /// <summary>
        /// Delete a task
        /// </summary>
        /// <param name="id">Task ID</param>
        /// <returns>No content if successful</returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTask(int id)
        {
            var result = await _taskService.DeleteTaskAsync(id);
            if (!result)
                return NotFound($"Task with ID {id} not found.");

            return NoContent();
        }
    }
}
