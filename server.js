const app = require('express')();
const http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket){
   console.log('connection');

  socket.on('CH01', function (from, msg) {
    console.log(`${from} : ${msg}`);
  });

});

http.listen(9898, function () {
  console.log('listening on :9898');
});