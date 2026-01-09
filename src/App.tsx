import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import SignInScreen from './components/SignInScreen';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 3 seconds loading timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container">
      {isLoading ? (
        <LoadingScreen />
      ) : isLoggedIn ? (
        <Dashboard />
      ) : (
        <SignInScreen onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
