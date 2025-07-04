import type { CreateTaskDto, Task, TaskPriority, TaskStatus, UpdateTaskDto } from '../types';

const API_BASE_URL = 'http://localhost:5000/api'; //TODO: SHOULD GO TO ENV FILE

interface ApiTask {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt?: string;
  completedAt?: string;
  priority: number;
}

class TaskService {
  /**
   * Fetches data from the API and returns it as JSON.
   * @param endpoint The API endpoint to fetch data from.
   * @param options Optional request options.
   * @returns A promise that resolves to the JSON response.
   */
  private async fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  private convertApiTaskToTask(apiTask: ApiTask, userId: string): Task {
    const status: TaskStatus = apiTask.isCompleted ? 'done' : 'todo';
    
    return {
      id: apiTask.id.toString(),
      title: apiTask.title,
      description: apiTask.description,
      isCompleted: apiTask.isCompleted,
      createdAt: new Date(apiTask.createdAt),
      updatedAt: apiTask.updatedAt ? new Date(apiTask.updatedAt) : undefined,
      completedAt: apiTask.completedAt ? new Date(apiTask.completedAt) : undefined,
      priority: apiTask.priority as TaskPriority,
      status,
      userId,
    };
  }

  async getAllTasks(userId: string): Promise<Task[]> {
    const apiTasks = await this.fetchApi<ApiTask[]>('/tasks');
    return apiTasks.map(task => this.convertApiTaskToTask(task, userId));
  }

  async createTask(task: CreateTaskDto, userId: string): Promise<Task> {
    const apiTask = await this.fetchApi<ApiTask>('/tasks', {
      method: 'POST',
      body: JSON.stringify({
        title: task.title,
        description: task.description,
        priority: task.priority,
      }),
    });
    return this.convertApiTaskToTask(apiTask, userId);
  }

  async updateTask(id: string, updates: UpdateTaskDto, userId: string): Promise<Task> {
    const updateData = {
      title: updates.title,
      description: updates.description,
      isCompleted: updates.status === 'done',
      priority: updates.priority,
    };

    const apiTask = await this.fetchApi<ApiTask>(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updateData),
    });
    return this.convertApiTaskToTask(apiTask, userId);
  }

  async deleteTask(id: string): Promise<void> {
    await this.fetchApi(`/tasks/${id}`, {
      method: 'DELETE',
    });
  }

  async moveTask(id: string, newStatus: TaskStatus, userId: string): Promise<Task> {
    const isCompleted = newStatus === 'done';
    const apiTask = await this.fetchApi<ApiTask>(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ isCompleted }),
    });
    return this.convertApiTaskToTask(apiTask, userId);
  }
}

export const taskService = new TaskService();
