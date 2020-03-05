//comando para establecer la conexion
var socket = io()

var label = $('#lblNuevoTicket')

socket.on('connect', (client) => {
    console.log('Conectado al servidor')
})

socket.on('disconnect', () => {
    console.log('Desconectado del serivdor')
})

socket.on('estadoActual', function(respuesta) {
    label.text(respuesta.actual)
})

$('button').on('click', function () {

    socket.emit('siguienteTicket', null, function (siguienteTicket) {
        label.text(siguienteTicket)
    })
})


