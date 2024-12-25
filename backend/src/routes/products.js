
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
router.get('/filtroCombustSimples/:id', usersControllers.showById)
router.get('/filtroCombustPesado/:id', usersControllers.showById)


// POST
router.post('/oleos', usersControllers.postOleo)
router.post('/baterias', usersControllers.postBateriaYfluido)
router.post('/fluidos', usersControllers.postBateriaYfluido)
router.post('/filtroOleoSimples', usersControllers.postEstruturaAplicacoes)
router.post('/filtroOleoPesado', usersControllers.postEstruturaAplicacoes)
router.post('/filtroCombustSimples', usersControllers.postEstruturaAplicacoes)
router.post('/filtroCombustPesado', usersControllers.postEstruturaAplicacoes)


// UPDATE
router.put('/oleos/:id', usersControllers.updateOleo)
router.put('/baterias/:id', usersControllers.updateBateriaYfluido)
router.put('/fluidos/:id', usersControllers.updateBateriaYfluido)
router.put('/filtroOleoSimples/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/filtroOleoPesado/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/filtroCombustSimples/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/filtroCombustPesado/:id', usersControllers.updateEstruturaAplicacoes)



// DELETE
router.delete('/oleos/:id', usersControllers.deleting)
router.delete('/baterias/:id', usersControllers.deleting)
router.delete('/fluidos/:id', usersControllers.deleting)
router.delete('/filtroOleoSimples/:id', usersControllers.deleting)
router.delete('/filtroOleoPesado/:id', usersControllers.deleting)
router.delete('/filtroCombustSimples/:id', usersControllers.deleting)
router.delete('/filtroCombustPesado/:id', usersControllers.deleting)



export default router;
