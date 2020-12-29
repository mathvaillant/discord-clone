import React from 'react';
import './Sidebar.scss';

import SidebarChannel from './SidebarChannel';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import { Call, InfoOutlined, Mic, Headset, Settings } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    // db.collection
  }, []);


  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <h3>React Programming</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>

            <AddIcon className='sidebar__addChannelBtn' />
          </div>
        </div>

        <div className="sidebar__channels__list">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className='sidebar__voiceIcon'
          fontsize='large'
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlined />
          <Call />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar
          src={user.photo}
          onClick={() => auth.signOut()}
        />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>{`#${user.uid.substring(0, 5)}`}</p>
        </div>

        <div className="sidebar__profileIcons">
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
