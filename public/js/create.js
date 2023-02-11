const createOrder = document.getElementById('createOrder')

createOrder.addEventListener('submit', (event) => {
  console.log(event.target)
  event.preventDefault()

  const {
    nameFirst: nameFirstInput,
    
    optionPick: optionPickInput,
  } = event.target.elements

  const orderData = {
    name: nameFirstInput.value,
    orderoptions_id: optionPickInput.value
  }
console.log(orderData)
  fetch('/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderData)
  })
  .then(response => {
    if (response.ok) {
      window.location.href = '/vieworders'
    }
  })
  .catch(err => console.log(err))
})
