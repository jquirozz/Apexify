export const formatDate = date => {
  const newDate = new Date(date)
  const formattedDate = newDate.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit'
  })
  return formattedDate
}
