const SERVER_URL = 'http://localhost:4000/api'
const userId = window.location.pathname.split('/').pop()

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const request = await fetch(`${SERVER_URL}/users/${userId}`)

    // validando que el usuario exista
    if (request.status !== 200) {
      window.location.href = '/'
    }

    // obteniendo el usuario desde el servidor
    const response = await request.json()

    const elUsername = document.getElementById('username')

    // asignando el valor del usuario al input
    elUsername.value = response.username

    const elForm = document.getElementById('mi-formulario')

    elForm.addEventListener('submit', async (e) => {
      e.preventDefault()

      const formData = new FormData(e.target)

      const username = formData.get('username')

      const request = await fetch(`${SERVER_URL}/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username })
      })

      if (request.status !== 200) {
        return window.alert('Error')
      }

      window.alert('Usuario actualizado')
      window.location.href = '/'
    })
  } catch (error) {
    console.error(error)
    window.location.href = '/'
  }
})
