const express = require('express');
const router = express.Router();

//Every route should have a corresponding
//controller method
const controller = require('../controllers/owners');

//equivalent to app.get('/owners')
router.get('/', controller.findAll) // req, res, next

router.get('/:id', controller.findOne)

router.post('/', controller.create)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

router.get('/:id/pets', controller.findAllPets)

router.get('/:id/pets/:petId', controller.findOnePet)
 
router.post('/:id/pets', controller.createPet)

router.put('/:id/pets/:petId', controller.updatePet)

router.delete('/:id/pets/:petId', controller.deletePet)

module.exports = router;