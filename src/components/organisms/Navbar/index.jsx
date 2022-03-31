import { CallOutlined, VideocamOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import './index.scss';

const Navbar = ({data}) => {
  console.log("data ke navbar :",data)
  return (
    <div className='navbar-container'>
      <div className="group-picture">
        <Avatar>{data.name.substring(1,0)}</Avatar>
        {/* <Avatar>GR</Avatar> */}
      </div>
      <div className="info">
        <span className='name-info'>{data.name}</span>
        <span className='detail-info'>{data.username}</span>
        {/* <span className='detail-info'>1200 Members | 100 Online</span> */}
      </div>
      <div className="action">
        <button>
          <CallOutlined />
        </button>
        <button>
          <VideocamOutlined />
        </button>
        <button>CR</button>
      </div>
    </div>
  )
}

export default Navbar