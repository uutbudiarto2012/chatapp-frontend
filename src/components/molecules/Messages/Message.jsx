import { Avatar } from '@mui/material'
import React from 'react'

const Message = ({ isMe,message }) => {
  return (
    <div className={`message-box ${isMe && 'me'}`}>
      <div className="message-item">
        {
          !isMe && (
            <div className="otherAvatar">
              <Avatar>O</Avatar>
            </div>
          )
        }
        <div className="text-container">
          <span className='text-message'>
            {message}
          </span>
          <span className='time-message'>12:00</span>
        </div>

      </div>
    </div>
  )
}

export default Message