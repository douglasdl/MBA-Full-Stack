import { showClient } from '../clients/showClient.js'

const form = document.querySelector('form')
const cardId = document.getElementById('card-id')

form.onsubmit = async event => {
  event.preventDefault()

  try {
    const id = cardId.value.replace(/\s+/g, ' ')
    if (!id) {
      return alert('Informe o ID do cartão!')
    }

    const client = await showClient({ id })

    cardId.value = ''
  } catch (error) {
    alert('Não foi possível realizar a busca!')
    console.log(error)
  }
}