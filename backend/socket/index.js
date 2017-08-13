const socketSetup = (io) => {
  io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
    // socket.on('join room', function(roomname){
    //   socket.roomname = roomname;
    //   socket.join(roomname);
    // });
    socket.on('message', function(msg){
      console.log(msg);
    });
  });
};

module.exports = socketSetup;
