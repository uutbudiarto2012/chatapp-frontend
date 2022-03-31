import { AccountCircleOutlined, Group, MoreVert, Public } from "@mui/icons-material";
import { Box, Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getChats } from "../../../redux/chatSlice";
import { ChatItem, Header, LoadingUserItem } from "../../molecules";
import "./index.scss";


const Sidebar = () => {
  const dispatch = useDispatch()
  const chats = useSelector(state => state.chat.chats)
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const anchorRef = useRef(null);
  const actions = [
    { icon: <AccountCircleOutlined />, name: 'New Private Chat' },
    { icon: <Group />, name: 'New Group Chat' },
    { icon: <Public />, name: 'New Land' }
  ];
  const [openSpeedDial, setOpenSpeedDial] = useState(false);
  const handleOpenSpeedDial = () => setOpenSpeedDial(true);
  const handleCloseSpeedDial = () => setOpenSpeedDial(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);


  const getChatList = async () => {
    setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      dispatch(getChats({
        chats: response.data
      }))
      setLoading(false)
    }).catch(err => {
      console.log(err);
      setLoading(false)
    })
  }

  useEffect(() => {
    getChatList()
  }, [])

  const navigate = useNavigate()
  const handleNavigate = (target) => {
    navigate(target)
  }


  return (
    <div className='sidebar'>
      <div className="header">
        <Header />
        <div className="action">
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <MoreVert style={{ color: "#888" }} />
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-end"
            transition
            disablePortal
            className="popperHeader"
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={() => handleNavigate("/user/profile")}>Profile</MenuItem>
                      <MenuItem onClick={() => handleNavigate("/user/account")}>My account</MenuItem>
                      <MenuItem onClick={() => handleNavigate("/auth")}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
      <div className="body">
        <>
          {
            loading && <LoadingUserItem />
          }
          {
            !loading && chats?.map((chat, index) => (
              <ChatItem
                key={index}
                isOnline
                data={chat}
              />
            ))
          }
          {/* <ChatItem countUnread={5} />
          <ChatItem countUnread={6} />
          <ChatItem />
          <ChatItem />
          <ChatItem isOnline />
          <ChatItem /> */}
        </>
        <Box className="buttonSpeedDial">
          <SpeedDial
            ariaLabel="SpeedDial controlled open example"
            icon={<SpeedDialIcon />}
            onClose={handleCloseSpeedDial}
            onOpen={handleOpenSpeedDial}
            open={openSpeedDial}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={handleClose}
              />
            ))}
          </SpeedDial>
        </Box>
      </div>
    </div>
  )
}

export default Sidebar