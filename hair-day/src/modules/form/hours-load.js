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
    hours.appendChild(li)
  })
}
