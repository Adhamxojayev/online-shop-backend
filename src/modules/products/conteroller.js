import model from './model.js'
import { read, write } from '../../lib/fs.js'
import JWT from '../../lib/jwt.js'

const productQuery = (req, res) => {
	try {
        let data = read('products')
		res.status(200).json(model.product(data,req.query))
	} catch (error) {
		console.log(error)
	}
}

const productsAdd = (req,res,next) => {
    try {
        let data = ''
        let {token} = req.headers
        if(!token) throw 'The token required';
        let { userId } = JWT.verify(token)
        data = req.body
        if(userId){
            let product = read('products')
            let newProducts = {
                productsId : product.length ? product[product.length-1].productsId +1 : 1,
                subCategoriesId: data.subCategoryId,
                productsName: data.productsName,
                model: data.model,
                color: data.color,
                price: data.price
            }
        product.push(newProducts)
        if(write('products',product)) res.status(201).json({ status: 201, message: 'products successfully' })
        }
    }catch(err){
        res.status(401).json({ status: 401, message: err })	
    }
}

export {
    productsAdd,
    productQuery
}