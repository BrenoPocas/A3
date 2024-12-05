const express = require('express')
const controllerAction = require('../controllers/action')

const router = express.Router()

router.get('/', controllerAction.FindAll)
router.get('/:id', controllerAction.FindById)
router.get('/ongs/:ongId', controllerAction.FindAllByOngId)
router.post('/create', controllerAction.Create)
router.put('/update/:id', controllerAction.Update)
router.delete('/delete/:id', controllerAction.Delete)


module.exports = router