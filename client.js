const io = require('socket.io-client');
const socket = io.connect('http://localhost:9898', {reconnect: true});
const prompt = require('prompt-sync')({sigint: true});
socket.on('connect', function () {
    console.log('Connected!');
});
let numberOfClient = prompt('Number of client you want to create ');
const seconds = prompt('How many X seconds we have to send data');
const time = new Date().getTime() + (1000*seconds);

while (time >= new Date().getTime() ) {
    let message = prompt('Please enter your message');
    socket.emit('CH01',`Client-${time-numberOfClient}` , message);
}
