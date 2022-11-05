import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import router from './routes/index.js'
import { engine } from 'express-handlebars';
import {  variablesLocals } from './middlewares/variablesLocals.js';
import db from './database/db.js'

const app = express();

db.authenticate()
    .then(()=>console.log('Base de datos conectada correctamente'))
    .catch((err)=>{console.log(err)})

//Public | JSON
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

//Engine
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}));
app.set('view engine', '.hbs');

//Midlewares
app.use(variablesLocals);


//Rutas
app.use('/', router);



//Defino puerto 
const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})