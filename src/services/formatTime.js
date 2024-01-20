export const formatTime = time => {
  const inputDate = new Date(`2000-01-01T${time}`)
  const formattedTime = inputDate.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit'
  })
  return formattedTime
}
