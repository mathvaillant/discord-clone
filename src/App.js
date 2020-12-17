import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';

import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './pages/login';

import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      { user ? 
        ( 
          <>
            <Sidebar />
            <Chat />
          </>
        ) 
        :
        (
          <Login />
        )
      }
    </div>
  );
}

export default App;
