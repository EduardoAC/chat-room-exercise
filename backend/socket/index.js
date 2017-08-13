const socketSetup = (io) => {
  io.on('connection', function(socket){
    console.log('a user connected');
    // socket.on('join room', function(roomname){
    //   socket.roomname = roomname;
    //   socket.join(roomname);
    // });
    // socket.on('message', function(msg){
    //   io.to(socket.roomname).emit('message', msg);
    // });
  });
};

module.exports = socketSetup;
