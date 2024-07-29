import { fetchClientById } from "../../services/fetch-client-by-id";

function updateSlots(appointmentHistory) {
  // Get all slot elements
  const slots = Array.from(document.querySelectorAll('[id^="slot"]'));

  // Loop through each slot and update its child image element
  slots.forEach((slot, index) => {
    // Find the image element within the slot
    const img = slot.querySelector('img');

    // Check if the index is within the bounds of appointmentHistory
    const isChecked = appointmentHistory[index] && appointmentHistory[index].date;

    // Toggle classes on the image element
    if (img) {
      if (isChecked) {
        img.classList.add('checked');
        img.classList.remove('unchecked');
      } else {
        img.classList.add('unchecked');
        img.classList.remove('checked');
      }
    }
  });
}

function updateProgress(client) {
  const totalCuts = client.loyaltyCard.totalCuts; 
  const cutsNeeded = client.loyaltyCard.cutsNeeded; 
  const cutsRemaining = client.loyaltyCard.cutsRemaining;

  if(cutsRemaining === 0) {
    alert("Parabéns! O seu próximo corte será gratuito!")
  } 

  const cutsRemainingElement = document.getElementById('cuts-remaining');
  cutsRemainingElement.textContent = cutsRemaining;

  // Update the progress indicator length
  const progressIndicator = document.querySelector('.progress-indicator');
  const progressPercentage = (client.appointmentHistory.length / totalCuts) * 100;
  progressIndicator.style.width = `${progressPercentage}%`;

  // Update the total progress text
  const totalProgressElement = document.getElementById('total-of-needed');
  totalProgressElement.textContent = `${totalCuts} de ${cutsNeeded}`;
}

function updateHistory(client) {
  const historyList = document.getElementById('list');
  const totalCuts = document.getElementById('total-cuts')

  totalCuts.innerHTML = `${client.loyaltyCard.totalCuts} cortes`
  
  // Clear existing history entries
  historyList.innerHTML = '';

  client.appointmentHistory.forEach((appointment) => {
    const row = document.createElement('div');
    row.classList.add('row');

    const rowTitle = document.createElement('div');
    rowTitle.classList.add('row-title');
    rowTitle.innerHTML = `
      <strong>${appointment.date}</strong>
      <span>${appointment.time}</span>
    `;

    const icon = document.createElement('div');
    icon.classList.add('icon');
    const iconElement = document.createElement('i');
    iconElement.classList.add('ph', 'ph-seal-check');
    iconElement.style.color = 'rgb(69, 180, 66)';
    iconElement.style.fontSize = '24px';
    icon.appendChild(iconElement);

    row.appendChild(rowTitle);
    row.appendChild(icon);

    historyList.appendChild(row);
  });
}

export async function showClient({ id }) {
  const client = await fetchClientById({ id })

  const avatarImage = document.getElementById("avatar-image")
  const clientName = document.getElementById("name")
  const clientSince = document.getElementById("client-since-date")
  const cardIdInfo = document.getElementById("card-id-info")

  avatarImage.src = `${client.avatar}.png`
  clientName.innerHTML = client.name
  clientSince.innerHTML = client.clientSince
  cardIdInfo.innerHTML = client.id
  
  const appointmentHistory = client.appointmentHistory;
  updateSlots(appointmentHistory)

  updateProgress(client);

  updateHistory(client)

  return client
}
