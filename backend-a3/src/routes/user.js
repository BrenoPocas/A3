const express = require('express')
const controllerUser = require('../controllers/user')

const router = express.Router()

router.get('/', controllerUser.FindAll)
router.get('/:id', controllerUser.FindById)
// router.post('/create', controllerUser.Create)
router.put('/update/:id', controllerUser.Update)
router.delete('/delete/:id', controllerUser.Delete)


module.exports = router