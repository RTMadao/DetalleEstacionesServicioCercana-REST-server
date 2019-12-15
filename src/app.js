const express = require('express');
const socketServer = require('./sockets/socketTCP');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');

//Initializations
const app = express();

require('./database'); 

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layaouts/',
    partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', '.hbs');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//routes
app.use(require('./routes/index')); 
//app.use(require('./routes/gasoline'));
//app.use(require('./routes/serviceStation'));

//start server
app.listen(app.get('port'), () => console.log("server on port ",app.get('port')));
socketServer.upTCPserver(); 