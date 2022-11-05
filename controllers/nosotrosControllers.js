import {request,response} from 'express'


const nosotrosPagina = (req = request,res = response)=>{
    res.render('nosotros', {
        titulo: 'Nosotros'
    })
}





export {
    nosotrosPagina
}