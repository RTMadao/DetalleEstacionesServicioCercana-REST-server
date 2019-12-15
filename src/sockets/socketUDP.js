var udp = require('dgram');
var server = udp.createSocket('udp4');

class socketServerUDP{

    constructor(){
        this.clients = [];
        this.server;
    }

    upServer(){
        server.on('error',function(error){
            console.log('Error: ' + error);
            server.close();
        });
        server.on('listening',function(){
            var address = server.address();
            var port = address.port;
            var family = address.family;
            var ipaddr = address.address;
            console.log('Server is listening at port ' + port);
            console.log('Server ip : ' + ipaddr);
            console.log('Server is IP4/IP6 : ' + family);
        });

        server.on('message', (message, remote) => {
            console.log(remote.address + ':' + remote.port +' - ' + message);
            this.clients.push(remote);
        });
        
        server.on('close',function(){
            console.log('Socket is closed !');
        });
        
        server.bind(1337, '192.168.1.61');
    }

    sendMessage(message){
        this.clients.forEach(socket => {
            server.send(JSON.stringify( message ),socket.port,socket.address,function(error){
            if(error){
                client.close();
            }else{
                console.log('Data sent !!!');
            }
            });
        });
    }
    
}

module.exports = new socketServerUDP();






