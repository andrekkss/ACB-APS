 
module.exports = {
    start: function(io){
        var clients = {}; 
        io.on("connection", function (socket) {  
            socket.on("join", function(name){
            console.log("Joined: " + name);
            clients[socket.id] = name;
            socket.emit("update", "You have connected to the server.");
            socket.broadcast.emit("update", name + " has joined the server.")
        });
        socket.on("send", function(msg){
            console.log("Message: " + msg);
            socket.broadcast.emit("chat", clients[socket.id], msg);
        });
        socket.on("disconnect", function(){
            console.log("Disconnect");
            io.emit("update", clients[socket.id] + " has left the server.");
            delete clients[client.id];
          });
        });
    },
};
