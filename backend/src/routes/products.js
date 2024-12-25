
import Router from "express";
import usersControllers from '../app/controllers/usersControllers.js'

const router = Router()


// GET
router.get('/', usersControllers.show)


// GET BY IDS
router.get('/oleos/:id', usersControllers.showById)
router.get('/baterias/:id', usersControllers.showById)
router.get('/fluidos/:id', usersControllers.showById)
router.get('/filtroOleoSimples/:id', usersControllers.showById)
router.get('/filtroOleoPesado/:id', usersControllers.showById)


// POST
router.post('/oleos', usersControllers.postOleo)
router.post('/baterias', usersControllers.postBateriaYfluido)
router.post('/fluidos', usersControllers.postBateriaYfluido)
router.post('/filtroOleoSimples', usersControllers.postEstruturaAplicacoes)
router.post('/filtroOleoPesado', usersControllers.postEstruturaAplicacoes)


// UPDATE
router.put('/oleos/:id', usersControllers.updateOleo)
router.put('/baterias/:id', usersControllers.updateBateria)
router.put('/fluidos/:id', usersControllers.updateFluido)
router.put('/filtroOleoSimples/:id', usersControllers.updateFiltroOleo)
router.put('/filtroOleoPesado/:id', usersControllers.updateFiltroOleoPesado)


// DELETE
router.delete('/oleos/:id', usersControllers.deleteOleo)
router.delete('/baterias/:id', usersControllers.deleteBateria)
router.delete('/fluidos/:id', usersControllers.deleteFluido)
router.delete('/filtroOleoSimples/:id', usersControllers.deleteFiltroOleo)
router.delete('/filtroOleoPesado/:id', usersControllers.deleteFiltroOleoPesado)



export default router;
