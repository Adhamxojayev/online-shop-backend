import express from 'express'

const router = express.Router()
import { categoriesAdd, categoryParams } from './controller.js'
import { categoryQuery } from './controller.js'



router.route('/categories/:catId')
    .get( categoryParams )    

router.route('/categories')
    .post(categoriesAdd)
        
router.route('/categories')
    .get( categoryQuery )


export default router    