import React from 'react'

const Picture = () => {
  return (
    <div className="profile">
      <div className="picture-container">
        <img src="/logo512.png" alt="profile" />
      </div>
      <div className="info">
        <span className='fullname'>Uut Budiarto</span>
        <span className="username">uut888999</span>
      </div>
    </div>
  )
}

export default Picture