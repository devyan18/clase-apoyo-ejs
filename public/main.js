const SERVER_URL = 'http://localhost:4000/api'
const elForm = document.getElementById('mi-formulario')

elForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  const username = formData.get('username')
  const password = formData.get('password')

  fetch(`${SERVER_URL}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then((request) => {
      if (request.status !== 200) {
        return window.alert('Error')
      }

      window.alert('registro exitoso')

      window.location.href = '/'
    })
})
