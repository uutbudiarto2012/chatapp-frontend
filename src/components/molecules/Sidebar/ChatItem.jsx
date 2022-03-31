import { Avatar } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setChatSelected } from '../../../redux/chatSlice'

const ChatItem = ({ isOnline, countUnread, data }) => {
  const dispatch = useDispatch()
  const hanldeClickItem = async (name, username) => {
    await axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
      dispatch(setChatSelected(
        {
          loading: true,
          message: {
            name: name,
            username: username,
            body: response.data
          },
        }
      ))
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className='chat-item' onClick={() => hanldeClickItem(data?.name, data?.company.bs)}>
      <div className="avatar">
        {isOnline && <div className="isOnline" />}
        <Avatar>{data?.name.substring(1, 0)}</Avatar>
      </div>
      <div className="info">
        <span className="fullname">{data?.name}</span>
        <span className="lastchat">{data?.company.bs}</span>
      </div>
      <div className="utility">
        <span className='time'>12:00</span>
        {
          countUnread && <span className='badge'>{countUnread}</span>
        }
      </div>
    </div>
    // <div className='chat-item' onClick={hanldeClickItem}>
    //   <div className="avatar">
    //     {isOnline && <div className="isOnline" />}
    //     <Avatar>UU</Avatar>
    //   </div>
    //   <div className="info">
    //     <span className="fullname">Liana Vero</span>
    //     <span className="lastchat">Halo apa kabar pae...</span>
    //   </div>
    //   <div className="utility">
    //     <span className='time'>12:00</span>
    //     {
    //       countUnread && <span className='badge'>{countUnread}</span>
    //     }
    //   </div>
    // </div>
  )
}

export default ChatItem