import dayjs from 'dayjs'

const morningPeriod = document.getElementById('period-morning')
const afternoonPeriod = document.getElementById('period-afternoon')
const nightPeriod = document.getElementById('period-night')

function clearLists() {
  morningPeriod.innerHTML = ''
  afternoonPeriod.innerHTML = ''
  nightPeriod.innerHTML = ''
}

export function showSchedules({ dailySchedules }) {
  clearLists()

  dailySchedules.forEach(schedule => {
    const item = document.createElement('li')
    const time = document.createElement('strong')
    const name = document.createElement('span')

    item.setAttribute('data-id', schedule.id)
    time.textContent = dayjs(schedule.when).format('HH:mm')
    name.textContent = schedule.name

    const cancelIcon = document.createElement('img')
    cancelIcon.classList.add('cancel-icon')
    cancelIcon.setAttribute('src', './src/assets/cancel.svg')
    cancelIcon.setAttribute('alt', 'Cancelar')

    item.append(time, name, cancelIcon)

    const hour = dayjs(schedule.when).hour()

    if (hour <= 12) {
      morningPeriod.appendChild(item)
    } else if (hour > 12 && hour <= 18) {
      afternoonPeriod.appendChild(item)
    } else {
      nightPeriod.appendChild(item)
    }
  })

  try {
  } catch (error) {
    console.log(error)
    alert('Não foi possível mostrar os agendamentos!')
  }
}
