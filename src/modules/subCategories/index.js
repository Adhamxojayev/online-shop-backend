import express from 'express'

const router = express.Router()
import { subcategoriesAdd } from './controller.js'
import { subCategoryQuery } from './controller.js'
import { subCategoryParams } from './controller.js'

router.route('/subcategories/:subCat')  
    .get( subCategoryParams )

router.route('/subcategories')
    .post(subcategoriesAdd)
    .get(subCategoryQuery)

export default router       