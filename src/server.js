import express from 'express'
import {host, PORT} from './config.js'
import authModule from './modules/auth/index.js'
import categories from './modules/categories/index.js'
import subcategories from './modules/subCategories/index.js'
import product from './modules/products/index.js'


const app = express()

app.use( express.json() )
app.use( authModule )
app.use( categories )
app.use( subcategories )
app.use( product )


app.listen(PORT, () => console.log(`server runnig http://${host}:${PORT}`))