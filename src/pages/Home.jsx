import React from 'react'
import { useSelector } from 'react-redux'
import { BGNoChat } from '../assets'
import { ChatForm, Content, Navbar, Sidebar } from '../components/organisms'
import ScrollToBottom from 'react-scroll-to-bottom';

const Home = () => {
  const chatSeleced = useSelector(state => state.chat.message)
  return (
    <div className='home'>
      <div className={`sidebar-container ${chatSeleced && 'inSelectedChat'}`}>
        <Sidebar />
      </div>
      {
        chatSeleced ? (
          <div className='content-container inSelectedChat'>
            <div className='navbar'>
              <Navbar data={chatSeleced} />
            </div>
            {/* <ScrollToBottom */}
            <ScrollToBottom
            initialScrollBehavior="auto"
            checkInterval={17}
            debounce={0} className='content'>
              <Content data={chatSeleced.body} />
              <div className='form-container'>
                <ChatForm />
              </div>
            </ScrollToBottom>
          </div>
        ) : (
          <div className='content-container nochat'>
            <div className='content'>
              <div className="ill-nochat">
                <div className="img-container">
                  <img src={BGNoChat} alt="" />
                </div>
                <h1 className="text-nochat">
                  Connect your self to any land
                </h1>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Home