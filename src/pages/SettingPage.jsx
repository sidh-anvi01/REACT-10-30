import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const SettingPage = () => {
  const{user} =useContext(UserContext)
  return (
    <div>
        <h1>setting page</h1>
      <h1>{user.name}</h1>
    </div>
  )
}

export default SettingPage
