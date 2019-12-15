const mongoose = require('mongoose');
const {Schema} = mongoose;

const ServiceEstationSchema = new Schema({
    nombre: {type: String, required: true},
    lat: {type: Number, required: true},
    lng: {type: Number, required: true},
})

module.exports = mongoose.model('ServiceEstation', ServiceEstationSchema);