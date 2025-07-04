import { useCallback, useEffect, useState, type FC } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { taskService } from '../../services/taskService';
import type { CreateTaskDto, Task, UpdateTaskDto } from '../../types';
import { TaskStatus } from '../../types';
import { Header } from '../Header';
import { TaskCard } from './TaskCard';
import { TaskColumn } from './TaskColumn';
import { TaskModal } from './TaskModal';
import { LoadingSection } from '../Loading';
import { ErrorTaskLoading } from '../Errors/ErrorTaskLoading';

const COLUMNS = [
  { id: TaskStatus.Todo, title: 'To Do', status: TaskStatus.Todo },
  { id: TaskStatus.InProgress, title: 'In Progress', status: TaskStatus.InProgress },
  { id: TaskStatus.Done, title: 'Done', status: TaskStatus.Done },
] as const;

export const TaskBoard: FC = () => {
  const { user, signOut } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTask, _] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [defaultStatus, setDefaultStatus] = useState<TaskStatus>(TaskStatus.Todo);

  const loadTasks = useCallback(async (): Promise<void> => {
    if (!user) return;
    
    try {
      setLoading(true);
      setError(null);
      const fetchedTasks = await taskService.getAllTasks(user.uid);
      setTasks(fetchedTasks);
    } catch (err) {
      setError('Failed to load tasks');
      console.error('Error loading tasks:', err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const handleAddTask = (status: TaskStatus): void => {
    setDefaultStatus(status);
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task: Task): void => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleDeleteTask = async (taskId: string): Promise<void> => {
    if (!confirm('Are you sure you want to delete this task?')) return;

    try {
      await taskService.deleteTask(taskId);
      setTasks(tasks => tasks.filter(t => t.id !== taskId));
    } catch (err) {
      console.error('Error deleting task:', err);
      setError('Failed to delete task');
    }
  };

  const handleSaveTask = async (taskData: CreateTaskDto | UpdateTaskDto) => {
    if (!user) return;

    try {
      if (editingTask) {
        // Update existing task
        const updatedTask = await taskService.updateTask(editingTask.id, taskData as UpdateTaskDto, user.uid);
        setTasks(tasks => tasks.map(t => t.id === editingTask.id ? updatedTask : t));
      } else {
        // Create new task
        const newTask = await taskService.createTask(taskData as CreateTaskDto, user.uid);
        setTasks(tasks => [...tasks, newTask]);
      }
    } catch (err) {
      console.error('Error saving task:', err);
      throw err;
    }
  };

  const getTasksByStatus = (status: TaskStatus): Task[] => {
    return tasks.filter(task => task.status === status);
  };

  if (loading) {
    return <LoadingSection />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userEmail={user?.email || null} onRefresh={loadTasks} onAddTask={handleAddTask} onSignOut={signOut} />

      {/* Error message */}
      {error && <ErrorTaskLoading error={error} setError={setError} />}

      {/* Task Board */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLUMNS.map((column) => (
            <TaskColumn
              key={column.id}
              title={column.title}
              status={column.status}
              tasks={getTasksByStatus(column.status)}
              onAddTask={handleAddTask}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </div>

        {activeTask ? <TaskCard task={activeTask} onEdit={() => {}} onDelete={() => {}} /> : null}
      </main>

      {/* Task Modal */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
        task={editingTask}
        defaultStatus={defaultStatus}
      />
    </div>
  )
};
