import React from 'react';
import './SidebarChannel.scss';

function SidebarChannel({ id, channel }) {
  return (
    <div className='sidebarChannel'>
      <h4>
        <span className='sidebarChannel__hash'>#</span>
        Youtube
      </h4>
    </div>
  )
}

export default SidebarChannel;