export interface Task {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt?: Date;
  completedAt?: Date;
  priority: TaskPriority;
  status: TaskStatus;
  userId: string;
}

export const TaskPriority = {
  Low: 1,
  Medium: 2,
  High: 3,
  Critical: 4
} as const;

export type TaskPriority = typeof TaskPriority[keyof typeof TaskPriority];

export const TaskStatus = {
  Todo: 'todo',
  InProgress: 'in-progress',
  Done: 'done'
} as const;

export type TaskStatus = typeof TaskStatus[keyof typeof TaskStatus];

export interface CreateTaskDto {
  title: string;
  description?: string;
  priority: TaskPriority;
  status: TaskStatus;
}

export interface UpdateTaskDto {
  title?: string;
  description?: string;
  isCompleted?: boolean;
  priority?: TaskPriority;
  status?: TaskStatus;
}

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export interface TaskContextType {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  addTask: (task: CreateTaskDto) => Promise<void>;
  updateTask: (id: string, updates: UpdateTaskDto) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  moveTask: (taskId: string, newStatus: TaskStatus) => Promise<void>;
}
