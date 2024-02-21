export function formatMemberSince(inputDateString){
  const options = {month:"short",day:"2-digit",year:"numeric"}
  const formattedDate = new Date(inputDateString).toLocaleDateString("en-US",options)
  return formattedDate
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}