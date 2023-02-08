const createNewOrder = document.getElementById('createNewOrder')

// createNewOrder.addEventListener('submit', (event) => {
const handleSubmit = (event) => {
  console.log(event.target)
  event.preventDefault()

  const {
    nameFirst: nameFirstInput,
    
    optionPick: optionPickInput,
  } = event.target.elements

  const newOrder = {
    name: nameFirstInput.value,
    orderOptions_id: optionPickInput.value
  }
console.log(newOrder)
  fetch('/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newOrder)
  })
  .then(response => {
    if (response.ok) {
      window.location.href = '/vieworders'
    }
  })
  .catch(err => console.log(err))

}

createNewOrder.addEventListener('submit', handleSubmit)