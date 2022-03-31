import React from 'react'
import './index.scss'
import { Message } from '../../molecules'

const Content = ({ data }) => {
  console.log("data : ", data)
  return (
    <div className='message-wrapper'>
      {
        data?.map(dt => (
          <Message
          key={dt.id}
            message={dt.title}
            isMe={dt.completed}
          />
        ))
      }
      {/* <Message
        message=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore ducimus vel possimus aspernatur praesentium repudiandae! Tempora, neque. Consequuntur, placeat nostrum!"
       isMe /> */}
      {/* <Message
        message=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore"
       />
      <Message
        message=" ducimus vel possimus aspernatur praesentium repudiandae! Tempora, neque. Consequuntur, placeat nostrum!"
       />
      <Message
        message="OK"
       />
      <Message
        message=" ducimus vel possimus aspernatur praesentium repudiandae!"
       isMe />
      <Message
        message="Tempora, neque. Consequuntur, placeat nostrum! OK bro"
       />
      <Message
        message="Tempora, neque. Consequuntur, placeat nostrum! OK bro"
       />
      <Message
        message="Tempora, neque. Consequuntur, placeat nostrum! OK bro"
       />
      <Message
        message="Tempora, neque. Consequuntur, placeat nostrum! Tempora, neque. Consequuntur, placeat nostrum!"
       />
      <Message
        message="Tempora, nequ placeat nostrum! Tempora, neque. Consequuntur, placeat nostrum!"
       />
      <Message
        message="Tempora, neque. placeat nostrum! Tempora, neque. Consequuntur, placeat nostrum!lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllliiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
       />
      <Message
        message="Tempora, neque. Consequuntur, placeat nostrum! Tempora, neque. Consequuntur, placeat nostrum!"
       />
      <Message
        message="Tempora, neque. Consequuntur, placeat nostrum! Tempora, neque. Consequuntur, placeat nostrum!"
       /> */}
    </div>
  )
}

export default Content