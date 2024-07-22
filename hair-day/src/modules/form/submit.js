import dayjs from 'dayjs'

const form = document.querySelector('form')
const selectedDate = document.getElementById('date')
const clientName = document.getElementById('client')

const today = dayjs(new Date()).format('YYYY-MM-DD')
selectedDate.value = today
selectedDate.min = today

form.onsubmit = event => {
  event.preventDefault()

  try {
    const name = clientName.value.replace(/\s+/g, ' ')
    if (!name) {
      return alert('Informe o nome do client!')
    }

    const selectedHour = document.querySelector('.hour-selected')

    if (!selectedHour) {
      return alert('Selecione a hora!')
    }

    const [hour] = selectedHour.innerHTML.split(':')

    const when = dayjs(selectedDate.value).add(hour, 'hour')
    const id = new Date().getTime()
    console.log({
      id,
      name,
      when
    })
  } catch (error) {
    alert('Não foi possível realizar o agendamento!')
    console.log(error)
  }
}
