import express from 'express'
import { registerController,loginController } from './controller.js'
import loginValidation from '../../middlewares/loginValidation.js' 
import registerValidation from '../../middlewares/registerValidation.js'

const router = express.Router()

router.route('/register')
    .post(registerValidation, registerController)

router.route('/login')
    .post(loginValidation, loginController)    

export default router