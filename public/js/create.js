const createNewOrder = document.getElementById('createNewOrder')

const handleSubmit = (event) => {
  event.preventDefault()

  const {

    optionSelections: optionSelectionsInput,
  } = event.target.elements

  const newOrder = {

    order_id: optionSelectionsInput.value
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