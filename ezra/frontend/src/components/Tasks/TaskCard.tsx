import { AlertCircle, CheckCircle, Clock, Edit2, Trash2 } from 'lucide-react';
import type { FC } from 'react';
import type { Task } from '../../types';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

const priorityColors = {
  [1]: 'bg-green-100 text-green-800 border-green-200',
  [2]: 'bg-blue-100 text-blue-800 border-blue-200',
  [3]: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  [4]: 'bg-red-100 text-red-800 border-red-200',
} as const;

const priorityLabels = {
  [1]: 'Low',
  [2]: 'Medium',
  [3]: 'High',
  [4]: 'Critical',
} as const;

const priorityIcons = {
  [1]: Clock,
  [2]: Clock,
  [3]: AlertCircle,
  [4]: AlertCircle,
} as const;

export const TaskCard: FC<TaskCardProps> = ({ task, onEdit, onDelete }) => {
  const PriorityIcon = priorityIcons[task.priority as keyof typeof priorityIcons];
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-medium text-gray-900 line-clamp-2">{task.title}</h3>
        <div className="flex items-center space-x-1 ml-2">
          <button
            onClick={() => onEdit(task)}
            className="p-1 text-gray-400 hover:text-primary-600 transition-colors"
            title="Edit task"
          >
            <Edit2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
            title="Delete task"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {task.description && (
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">{task.description}</p>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
              priorityColors[task.priority as keyof typeof priorityColors]
            }`}
          >
            <PriorityIcon className="h-3 w-3 mr-1" />
            {priorityLabels[task.priority as keyof typeof priorityLabels]}
          </span>
          {task.isCompleted && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
              <CheckCircle className="h-3 w-3 mr-1" />
              Completed
            </span>
          )}
        </div>
        <div className="text-xs text-gray-500">
          {task.completedAt
            ? `Completed ${formatDate(task.completedAt)}`
            : `Created ${formatDate(task.createdAt)}`}
        </div>
      </div>
    </div>
  );
};
