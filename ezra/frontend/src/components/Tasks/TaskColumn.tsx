import { Plus } from 'lucide-react';
import type { FC } from 'react';
import type { Task, TaskStatus } from '../../types';
import { TaskCard } from './TaskCard';

interface TaskColumnProps {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  onAddTask: (status: TaskStatus) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
}

const statusColors = {
  todo: 'border-yellow-300 bg-yellow-50',
  'in-progress': 'border-blue-300 bg-blue-50',
  done: 'border-green-300 bg-green-50',
} as const

const statusHeaderColors = {
  todo: 'text-yellow-700 bg-yellow-100',
  'in-progress': 'text-blue-700 bg-blue-100',
  done: 'text-green-700 bg-green-100',
} as const

export const TaskColumn: FC<TaskColumnProps> = ({
  title,
  status,
  tasks,
  onAddTask,
  onEditTask,
  onDeleteTask,
}) => {

  return (
    <div className="flex flex-col h-full">
      <div className={`flex items-center justify-between p-4 rounded-t-lg border-b ${statusHeaderColors[status]}`}>
        <div className="flex items-center space-x-2">
          <h3 className="font-semibold">{title}</h3>
          <span className="text-sm bg-white rounded-full px-2 py-1 min-w-[24px] text-center">
            {tasks.length}
          </span>
        </div>
        <button
          onClick={() => onAddTask(status)}
          className="p-1 hover:bg-white/50 rounded transition-colors"
          title={`Add task to ${title}`}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      
      <div
        className={`flex-1 p-4 border-l border-r border-b rounded-b-lg min-h-[500px] transition-colors ${
          statusColors[status]
        }`}
      >
      
          <div className="space-y-3">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={onEditTask}
                onDelete={onDeleteTask}
              />
            ))}
            {tasks.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl mb-2">📝</div>
                <p>No tasks yet</p>
                <button
                  onClick={() => onAddTask(status)}
                  className="mt-2 text-sm text-primary-600 hover:text-primary-700"
                >
                  Add your first task
                </button>
              </div>
            )}
          </div>
      </div>
    </div>
  );
};
