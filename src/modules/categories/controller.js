import model from './model.js'
import { read, write } from '../../lib/fs.js'
import JWT from '../../lib/jwt.js'


const categoryQuery = (req, res) => {
	try {
		res.status(200).json( model.category(req,res,req.query) )
	} catch (error) {
		console.log(error)
	}
}

const categoryParams = (req, res) => {
	try {
		res.status(200).json( model.categ(req,res,req.params) )
	} catch (error) {
		console.log(error)
	}
}


const categoriesAdd = (req,res,next) => {
    try {
        let data = ''
        let {token} = req.headers
        if(!token) throw 'The token required';
        let { userId } = JWT.verify(token)
        data = req.body
        if(userId){
            let category = read('categories')
            let newCategories = {
                categoriesId : category.length ? category[category.length-1].categoryId +1 : 1,
                categoriesName: data.categoryName
            }
        category.push(newCategories)
        if(write('categories',category)) res.status(201).json({ status: 201, message: 'categories successfully' })
        }
    }catch(err){
        res.status(401).json({ status: 401, message: err })	
    }
}

export {
    categoriesAdd,
    categoryQuery,
    categoryParams
}