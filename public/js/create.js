const createOrder = document.getElementById('createOrder')

const handleSubmit = (event) => {
  console.log(event.target)
  event.preventDefault()

  const {
    nameFirst: nameFirstInput,
    
    orderOption1: orderOption1Input,
    orderOption2: orderOption2Input,
    orderOption3: orderOption3Input,
    orderOption4: orderOption4Input,
    orderOption5: orderOption5Input,
    orderOption6: orderOption6Input,
    orderOption7: orderOption7Input,
  } = event.target.elements

  const orderData = {
    name: nameFirstInput.value,
    orderoptions1_id: orderOption1Input.value,
    orderoptions2_id: orderOption2Input.value,
    orderoptions3_id: orderOption3Input.value,
    orderoptions4_id: orderOption4Input.value,
    orderoptions5_id: orderOption5Input.value,
    orderoptions6_id: orderOption6Input.value,
    orderoptions7_id: orderOption7Input.value,
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
}
createOrder.addEventListener('submit', handleSubmit)