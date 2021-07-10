import React from 'react';
import './App.scss';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Jumbo from './components/Jumbo/Jumbo';
import Profile from './components/Profile/Profile';
import useFetchUser from './hooks/useFetchUser';

const App = () => {
  const { userData, error, isLoading, fetchUser } = useFetchUser({ loadOnMount: true });
  
  if (error) {
    return <ErrorMessage message={error.message} onRetry={fetchUser} />;
  }

  return (
    <div className="main">
      <Jumbo onBtnClick={fetchUser} />
      <Profile userData={userData} isLoading={isLoading} />
    </div>
  );
};

export default App;
