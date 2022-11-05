import {request,response} from 'express'
import {Viaje} from '../models/Viaje.js'


const viajesPagina = async(req = request,res = response)=>{

    //Consulta a BD
    const viajes = await Viaje.findAll();


    res.render('viajes', {
        titulo: 'Futuros Viajes',
        viajes,
    })
}


//Muestra un viaje
const detallesViajes = async(req,res)=>{

    const {viaje} = req.params;

    try {
        const consulta = await Viaje.findOne({where: {slug: viaje}})

        res.render('viaje', {
            pagina: 'Información del viaje',
            viaje: consulta
        })
    } catch (error) {
        console.log(error)
    }
}




export {
    viajesPagina,
    detallesViajes
}