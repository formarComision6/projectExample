const express = require('express');
const app = express();
const port = 3030;
const path = require('path')

app.use(express.static(path.join(__dirname,'..','public')));

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

app.use('/',indexRouter);
app.use('/products',productsRouter);
app.use('/users',usersRouter);



app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port))