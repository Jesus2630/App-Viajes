import {Viaje} from '../models/Viaje.js'

const variablesLocals =  async(req,res,next) =>{
    res.locals.fecha = new Date().getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';

    next()
}

export {
    variablesLocals
} 