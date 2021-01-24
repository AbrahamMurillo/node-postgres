const {Router} = require('express')
const router = Router()
const {getUsers,createUser,getUser,deleteUser} = require('../controller/index.controller')

router.get('/users',getUsers)

router.post('/users',createUser)

router.get('/users/:id',getUser)

router.delete('/users/:id',deleteUser)

module.exports = router;