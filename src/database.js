const mongoose = require('mongoose');

mongoose.set('userFindAndModify', false);
mongoose.connect('mongodb+srv://Carlos:BelloH@cluster0-pkf7z.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('Base de datos conectada'))
.catch(err => console.log(err))