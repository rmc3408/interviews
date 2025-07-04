import { LogOut, Plus, RefreshCw } from 'lucide-react';
import React from 'react';
import { TaskStatus } from '../types';

interface HeaderProps {
  userEmail: string | null;
  onRefresh: () => void;
  onAddTask: (status: TaskStatus) => void;
  onSignOut: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  userEmail,
  onRefresh,
  onAddTask,
  onSignOut,
}) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-900">Task Board</h1>
            <button
              onClick={onRefresh}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              title="Refresh tasks"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Welcome, {userEmail}
            </span>
            <button
              onClick={() => onAddTask(TaskStatus.Todo)}
              className="flex btn-primary"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Task
            </button>
            <button
              onClick={onSignOut}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              title="Sign out"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
