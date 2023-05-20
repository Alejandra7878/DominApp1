const {Router} = require ('express')
const router = Router()

const{createUser, getUsu, deleteUser, updateUser, getUser} = require('../controller/user.controller')


router.route('/')
.get(getUsu)
.post(createUser)


router.route('/:id')
.get(getUser)
.delete(deleteUser)
.put(updateUser)

module.exports =router;
