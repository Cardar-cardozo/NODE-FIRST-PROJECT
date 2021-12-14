// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error')
const mongoConnect = require('./util/database').mongoConnect

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const adminRoute = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// const routes = require('./routes');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(adminRoute);

app.use(shopRoutes);

app.use(errorController.get404)


mongoConnect(() =>{
    console.log(client)
    app.listen(3000);
})






// const server = http.createServer(app);

// app.listen(3000);