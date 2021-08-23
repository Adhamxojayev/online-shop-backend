import model from './model.js'
import { read, write } from '../../lib/fs.js'
import JWT from '../../lib/jwt.js'

const subCategoryQuery = (req, res) => {
	try {
		res.status(200).json(model.subCategory(req,res,req.query))
	} catch (error) {
		console.log(error)
	}
}

const subCategoryParams = (req,res) => {
    try{
        res.status(200).json(model.subCateg(req,res,req.params))
    }catch(err){
        console.log(err);
    }
}


const subcategoriesAdd = (req,res,next) => {
    try {
        let data = ''
        let {token} = req.headers
        if(!token) throw 'The token required';
        let { userId } = JWT.verify(token)
        data = req.body
        if(userId){
            let subCategory = read('subCategories')
            let newSubCategories = {
                subCategoryId : subCategory.length ? subCategory[subCategory.length-1].subCategoryId +1 : 1,
                categoriesId: data.categoryId,
                subCategoriesName: data.subCategoryName
            }
        subCategory.push(newSubCategories)
        if(write('subCategories',subCategory)) res.status(201).json({ status: 201, message: 'sub_categories successfully' })
        }
    }catch(err){
        res.status(401).json({ status: 401, message: err })	
    }
}

export {
    subcategoriesAdd,
    subCategoryQuery,
    subCategoryParams
}