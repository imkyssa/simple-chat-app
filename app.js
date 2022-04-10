const express = require("express")
const socket = require("socket.io")
// const bparser = require("body-parser")

const app = express()
const server = app.listen(3000);

app.use(express.static("public"))

const io = socket(server)

// app.use(bparser.urlencoded({ extended: false }))
// app.use(bparser.json())

// app.set('view engine', 'ejs');
// app.set('views', "public")


io.on("connection", socket => {
    console.log(socket.id)

    socket.on('chat', data => {
        io.sockets.emit('chat', data)
    })
})