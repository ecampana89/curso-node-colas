//comando para establecer la conexion
var socket = io()

var lvlTicket1 = $('#lblTicket1')
var lvlTicket2 = $('#lblTicket2')
var lvlTicket3 = $('#lblTicket3')
var lvlTicket4 = $('#lblTicket4')

var lvlEscritorio1 = $('#lblEscritorio1')
var lvlEscritorio2 = $('#lblEscritorio2')
var lvlEscritorio3 = $('#lblEscritorio3')
var lvlEscritorio4 = $('#lblEscritorio4')

var lblTickets = [ lvlTicket1, lvlTicket2, lvlTicket3, lvlTicket4 ]
var lvlEscritorios = [ lvlEscritorio1, lvlEscritorio2, lvlEscritorio3, lvlEscritorio4 ]

socket.on('connect', (client) => {
    console.log('Conectado al servidor')
})

socket.on('disconnect', () => {
    console.log('Desconectado del serivdor')
})

socket.on('estadoActual',
    function (data) {
        actualizaHTML(data.ultimosCuatro)
    })

socket.on('ultimosCuatro', function (data) {
    var audio = new Audio('audio/new-ticket.mp3')
    audio.play()
        .then(console.log('audio play'))
        .catch('error')
    actualizaHTML(data.ultimosCuatro)
})

function actualizaHTML(ultimosCuatro) {
    for (var i = 0; i <= ultimosCuatro.length - 1; i++) {
        lblTickets[i].text('Ticket ' + ultimosCuatro[i].numero)
        lvlEscritorios[i].text('Escritorio ' + ultimosCuatro[i].escritorio)
    }
}

