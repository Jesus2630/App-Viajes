import express from 'express';

const router = express.Router();

//Controllers
import { nosotrosPagina} from '../controllers/nosotrosControllers.js'
import {inicioPagina} from '../controllers/inicioControllers.js'
import {testimoniosPagina, guardarTestimonial} from '../controllers/testimoniosControllers.js'
import { viajesPagina,detallesViajes} from '../controllers/viajesControllers.js';

//Inicio
router.get('/', inicioPagina);


//Nosotros
router.get('/nosotros', nosotrosPagina);


//Viajes
router.get('/viajes', viajesPagina);
router.get('/viajes/:viaje', detallesViajes);


//Testimoniales
router.get('/testimoniales', testimoniosPagina);
router.post('/testimoniales', guardarTestimonial);

export default router;