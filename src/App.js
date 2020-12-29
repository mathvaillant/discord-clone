import React, {
  useEffect
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './pages/login';

import { selectUser } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('the user is: ', authUser)
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
