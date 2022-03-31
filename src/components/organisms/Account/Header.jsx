import { ArrowBackOutlined, LogoutOutlined } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderProfile = ({title}) => {
  const navigate = useNavigate()
  const handleBack=()=>{
    navigate(-1)
  }
  return (
    <div className="header">
      <div className="left">
        <button onClick={handleBack}><ArrowBackOutlined /></button>
        <span>{title}</span>
      </div>
      <button title='Signout'>
        <LogoutOutlined />
      </button>
    </div>
  )
}

export default HeaderProfile