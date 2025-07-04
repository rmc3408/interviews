import { useAuth } from '../hooks/useAuth';
import { useState, type FC } from 'react';
import { Login } from '../components/Login';
import { TaskBoard } from '../components/Tasks/TaskBoard';
import { LoadingSection } from '../components/Loading';


export const WelcomePage: FC = () => {
  const { user, loading } = useAuth()
  const [isSignUp, setIsSignUp] = useState(false)

  if (loading) {
    return <LoadingSection />;
  }

  if (!user) {
    return <Login onToggleMode={() => setIsSignUp(!isSignUp)} isSignUp={isSignUp} />
  }

  return <TaskBoard />
}
