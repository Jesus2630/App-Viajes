import {request,response} from 'express';
import {Testimonial} from '../models/Testimoniales.js';

const testimoniosPagina = async(req = request,res = response)=>{

    try {
        const testimoniales = await Testimonial.findAll();


        res.render('testimoniales', {
            titulo: 'Testimonios',
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }
}

const guardarTestimonial = async(req = request,res = response) =>{
    //Validaciones
    const {nombre,correo,mensaje} = req.body;
    const errores = [];

    
    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre está vacío'})
    }
    if(correo.trim() === ''){
        errores.push({mensaje: 'El correo está vacío'})
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje está vacío'})
    }

    if(errores.length > 0){
        
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            titulo: 'Testimonios',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        //Guardo en base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }
}




export {
    testimoniosPagina,
    guardarTestimonial
}