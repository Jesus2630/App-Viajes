import {request,response} from 'express';
import {Viaje} from '../models/Viaje.js';
import {Testimonial} from '../models/Testimoniales.js'


const inicioPagina = async(req = request,res = response)=>{

    //Consultar 3 viajes
    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit:3}))
    promiseDB.push(Testimonial.findAll())

    try {
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            titulo: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        })   
    } catch (error) {
        console.log(error)
    }
}





export {
    inicioPagina
}