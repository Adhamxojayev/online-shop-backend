import express from 'express'

const router = express.Router()

import { productsAdd } from './conteroller.js'
import { productQuery } from './conteroller.js'


router.route('/products')
    .post(productsAdd)
    .get(productQuery)

export default router    