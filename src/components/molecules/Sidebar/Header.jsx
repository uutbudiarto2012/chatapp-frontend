import { InstallDesktopOutlined } from '@mui/icons-material';
import { Avatar } from "@mui/material";
import React from 'react';
import { usePwa } from "react-pwa-app";
const Header = () => {
  const pwa = usePwa()
  const localInstalled = localStorage.getItem("isInstalledStayonland")
  return (
    <>
      <div className="avatar">
        <Avatar>U</Avatar>
      </div>
      <div className="info">
        <span className="fullname">Uut Budiarto</span>
        <span className="username">fileku.uut@uut.com</span>
      </div>
      {
        !localInstalled && pwa.supports && pwa.isInstalled === "none" && <button title='Install App' onClick={pwa.install} className="btnInstall">
          <InstallDesktopOutlined />
        </button>
      }
    </>
  )
}

export default Header