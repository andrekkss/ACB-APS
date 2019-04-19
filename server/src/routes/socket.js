 
module.exports = {
    start: function(io){
        var clients = {}; 
        io.on("connection", function(socket) {  
            socket.on("join", function(name){
            console.log(`Entrou: ${name}`);
            clients[socket.id] = name;
            socket.emit("update", "Você foi desconectado do servidor.");
            socket.broadcast.emit("update", name + " Conectado.")
        });
        socket.on("send", function(msg){
            console.log("Messagem: " + msg);
            socket.broadcast.emit("chat", clients[socket.id], msg);
        });
        socket.on("disconnect", function(){
            console.log("Disconnectado ");
            io.emit("update", clients[socket.id] + " Saiu.");
            delete clients[client.id];
          });
        });
    }
};
