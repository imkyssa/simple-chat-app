const socket = io.connect("http://localhost:3000")

const sender = document.getElementById("sender")
const message = document.getElementById("message")
const submitBtn = document.getElementById("submitBtn")
const output = document.getElementById("output")

submitBtn.addEventListener("click", () => {
    socket.emit('chat', {
        message: message.value,
        sender: sender.value
    })

    message.value = ''

})

socket.on('chat', data => {
    output.innerHTML += '<p><strong>' + data.sender + ': </strong> '+ data.message + '<p>'
})
