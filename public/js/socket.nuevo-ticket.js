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
    console.log('respuesta:', respuesta)
    label.text(respuesta.actual)
})

$('button').on('click', function () {
    console.log('click')

    socket.emit('siguienteTicket', null, function (siguienteTicket) {
        console.log('ticket: ', siguienteTicket)
        label.text(siguienteTicket)
    })
})


