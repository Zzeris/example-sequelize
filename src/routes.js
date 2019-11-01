const router = require('express').Router()
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const TechController = require('./controllers/TechController')
const ReportController = require('./controllers/ReportController')

router.get('/users', UserController.index)
router.post('/users', UserController.store)

router.get('/users/:user_id/addresses', AddressController.index)
router.post('/users/:user_id/addresses', AddressController.store)

router.get('/users/:user_id/techs', TechController.index)
router.post('/users/:user_id/techs', TechController.store)
router.delete('/users/:user_id/techs', TechController.delete)

router.get('/report', ReportController.show)

module.exports = router
