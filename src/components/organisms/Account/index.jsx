import { TextField } from '@mui/material'
import React from 'react'
import HeaderProfile from './Header'
import "./index.scss"
import Picture from './Picture'

const Account = () => {
  return (
    <div className='slim-container'>
      <HeaderProfile title="My Account" />
      <Picture />
      <div className="detail">
        <div className="detail-item">
          <TextField fullWidth id="outlined-basic" label="Fullname" variant="outlined" />
        </div>
        <div className="detail-item">
          <TextField fullWidth id="outlined-basic" label="Username" variant="outlined" />
        </div>
        <div className="detail-item">
          <TextField fullWidth id="outlined-basic" label="Phone" variant="outlined" />
        </div>
        <div className="detail-item">
          <TextField
            id="outlined-multiline-static"
            label="Bio"
            fullWidth
            multiline
            rows={3}
          />
        </div>
        <div className="detail-item">
          <TextField
            id="outlined-multiline-static"
            label="Address"
            fullWidth
            multiline
            rows={3}
          />
        </div>
        <button className='btn-update'>Update</button>
      </div>
    </div>
  )
}

export default Account