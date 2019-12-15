const ServiceStation = require('../model/ServiceStation');
const TCPServer = require('../sockets/socketTCP');
const UDPServer = require('../sockets/socketUDP')

class PruebaControllers{
    async addServiceStation(req, res){
        const {nombre,lat,lng} = req.body;
        const newStation = new ServiceStation({nombre,lat,lng});
        await newStation.save();
        TCPServer.sendMessage(newStation);
        res.send('ok');
    }

    
}

async function getCoordinates(){
    const notes = await ServiceStation.find();
    TCPServer.sendMessage(notes);
}

module.exports = new PruebaControllers();