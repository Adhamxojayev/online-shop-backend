import { read, write } from '../../lib/fs.js'

const category = (req,res,{ userId }) => {
	try{
	if(!req.headers.token) throw 'not token'
	let category = read('categories')
	let subcategories = read('subCategories')
	let product = read('products')
	if(userId) {
		let catData = category.filter( cgy => cgy.categoriesId == userId ) 
		return catData
	} else {
		for(let cgy of category){
			let subcategory = subcategories.filter(val => val.categoriesId == cgy.categoriesId)
			subcategory = subcategory.filter(val => delete( val.categoriesId ))
			cgy.subCategories = subcategory
		}
		return category
	}
	}catch(err){
		res.status(401).json({ status: 401, message: err })
	}
}

const categ = ({catId}) => {
	try{
	if(!req.headers.token) throw 'not token'
	let subcategories = read('subCategories')
	let category = read('categories')
	category =  category.find(val => val.categoriesId == catId)
	let subcategory = subcategories.filter(val => val.categoriesId == category.categoriesId)
	subcategories = subcategories.filter(val => delete( val.categoriesId ))
	category.subCategories = subcategory
	return category
	}catch(err){
		res.status(401).json({ status: 401, message: err })
	} 
}

export default {
    category,
	categ

}