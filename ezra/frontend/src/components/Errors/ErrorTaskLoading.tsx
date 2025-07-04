import type { FC } from "react";

interface ErrorDBProps {
  error: string | null
  setError: (error: string | null) => void
}

export const ErrorTaskLoading: FC<ErrorDBProps> = ({ error, setError }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
        {error}
        <button onClick={() => setError(null)} className="float-right text-red-400 hover:text-red-600">
          ×
        </button>
      </div>
    </div>
  )
}
