import { Router } from "express";
import { ping,inicio,add,borrar,actualizar } from "../controllers/index.controller.js";


const router = Router()

router.get('/',inicio)

router.post('/proceso-add',add)

router.get('/ping', ping )

router.post('/proceso-delete',borrar)

router.post('/proceso-update',actualizar)


export default router;