const createNewOrder = document.getElementById('createNewOrder')

// createNewOrder.addEventListener('submit', (event) => {
const handleSubmit = (event) => {
  event.preventDefault()

  const {
    nameFirst: nameFirstInput,
    
    optionSelections: optionSelectionsInput,
  } = event.target.elements

  const newOrder = {
    name: nameFirstInput.value,
    order: optionSelectionsInput.value
  }

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