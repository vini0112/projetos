
import Router from "express";
import usersControllers from '../app/controllers/usersControllers.js'

const router = Router()


// GET
router.get('/', usersControllers.show)


// GET BY IDS
router.get('/oleos/:id', usersControllers.showByIdOleos)
router.get('/baterias/:id', usersControllers.showByIdBaterias)
router.get('/fluidos/:id', usersControllers.showByIdFluidos)
router.get('/filtrosOleoSimples/:id', usersControllers.showByIdFiltroOleoSimple)


// POST
router.post('/oleos', usersControllers.postOleo)
router.post('/baterias', usersControllers.postBateria)
router.post('/fluidos', usersControllers.postFluido)
router.post('/filtrosOleoSimples', usersControllers.postFiltroOleoSimples)


// UPDATE
router.put('/oleos/:id', usersControllers.updateOleo)
router.put('/baterias/:id', usersControllers.updateBateria)
router.put('/fluidos/:id', usersControllers.updateFluido)
router.put('/filtrosoleosimples/:id', usersControllers.updateFiltroOleo)


// DELETE
router.delete('/oleos/:id', usersControllers.deleteOleo)
router.delete('/baterias/:id', usersControllers.deleteBateria)
router.delete('/fluidos/:id', usersControllers.deleteFluido)
router.delete('/filtrosoleosimples/:id', usersControllers.deleteFiltroOleo)



export default router;
