const net = require('net');
var yip2=java.net.InetAddress.getLocalHost();	
var yip=yip2.getHostAddress();

class socketServerTCP{
    constructor(){
        this.connections = [];
    }
    
    upTCPserver(){
        const server = net.createServer((socket) => {
            this.connections.push(socket);
            console.log('Client connect. Client local address : ' + socket.localAddress + ':' + socket.localPort + '. client remote address : ' + socket.remoteAddress + ':' + socket.remotePort);
        

            socket.on('end', () => {
                let socketEliminado = this.connections.splice(this.connections.indexOf(socket),1);
                console.log("se cerro la conexion con: "+socketEliminado[0]._peername.address);
            })
        });
         
        server.listen(1337, yip); 
    } 

    sendMessage(message){
        this.connections.forEach(socket => {
            socket.write(JSON.stringify( message ));
        }); 
    }
}

module.exports = new socketServerTCP(); 

