import { KeyboardVoiceRounded, SendOutlined } from '@mui/icons-material'
import { TextareaAutosize } from '@mui/material'
import React from 'react'
import './index.scss'

const ChatForm = () => {
  return (
    <div className='form-chat'>
      <div className="input-container">
        <TextareaAutosize
          className='input-form'
          aria-label="maximum height"
          placeholder="Type something..."
          maxRows={5}
        />
        <div className="send-container">
          <button>
            <SendOutlined />
          </button>
        </div>
      </div>
      <div className="next-action">
        <button>
          <KeyboardVoiceRounded />
        </button>
      </div>
    </div>
  )
}

export default ChatForm