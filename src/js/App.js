import React from 'react'
import ReactDOM from 'react-dom'

export default function App() {
  const title = 'Hello Electron Chat in App,'
  const enhancedTitle = title + ' - React App!'

  const sendNotification = () => {
    console.log('sending notification2')
    electron.notificationApi.sendNotification('My custom message 3')
  }

  return (
    <>
      <h1>{enhancedTitle}</h1>
      <button onClick={sendNotification}>Send Notification</button>
    </>
  )
}
