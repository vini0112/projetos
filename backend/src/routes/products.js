
import Router from "express";
import usersControllers from '../app/controllers/usersControllers.js'

const router = Router()


// GET
router.get('/', usersControllers.show)



// POST
router.post('/oleos', usersControllers.postOleo)
router.post('/baterias', usersControllers.postBateria)
router.post('/fluido', usersControllers.postFluido)



// UPDATE
router.put('/oleos/:id', usersControllers.updateOleo)
router.put('/baterias/:id', usersControllers.updateBateria)
router.put('/fluido/:id', usersControllers.updateFluido)



// DELETE
router.delete('/oleos/:id', usersControllers.deleteOleo)
router.delete('/baterias/:id', usersControllers.deleteBateria)
router.delete('/fluido/:id', usersControllers.deleteFluido)




export default router;
