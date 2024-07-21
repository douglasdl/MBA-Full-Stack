import dayjs from 'dayjs'
import { openingHours } from '../../utils/opening-hours.js'

const hours = document.getElementById('hours')

export function hoursLoad({ date }) {
  const opening = openingHours.map(hour => {
    const [scheduleHour] = hour.split(':')
    const isFutureHour = dayjs(date).add(scheduleHour, 'hour').isAfter(dayjs())

    return {
      hour,
      available: isFutureHour
    }
  })

  opening.forEach(({ hour, available }) => {
    const li = document.createElement('li')
    li.classList.add('hour')
    li.classList.add(available ? 'hour-available' : 'hour-unavailable')
    li.textContent = hour

    if (hour === '9:00') {
      addHourHeader('Manhã')
    } else if (hour === '13:00') {
      addHourHeader('Tarde')
    } else if (hour === '18:00') {
      addHourHeader('Noite')
    }

    hours.appendChild(li)
  })
}

function addHourHeader(title) {
  const header = document.createElement('li')
  header.classList.add('hour-period')
  header.textContent = title
  hours.append(header)
}
