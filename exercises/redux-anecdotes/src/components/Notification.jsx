import { useSelector } from 'react-redux'

const Notification = () => {
  

  const notification = useSelector(state => state.notification.message)

  console.log(String(notification) + "hola")

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (!notification) return null  // Don't render if there is no message

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification