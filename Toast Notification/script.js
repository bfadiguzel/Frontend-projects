const button = document.getElementById('button')
const toasts = document.getElementById('toasts')
const messages = ['Warning', 'Error', 'Success', 'Info']
const types = ['warning', 'error', 'success', 'info']

const getRandomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)]
}
const getRandomType = () => {
    return types[Math.floor(Math.random() * messages.length)]
}


const createNotification = (message = null, type = null) => {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type != null ? type : getRandomType())
    notif.textContent = message != null ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => notif.remove(), 3000)
}


button.addEventListener('click', () => createNotification())