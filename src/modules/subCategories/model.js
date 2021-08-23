import { read, write } from '../../lib/fs.js'

const subCategory = (req,res,{ userId }) => {
	try{
	if(!req.headers.token) throw 'not token'
	let category = read('categories')
	let subcategories = read('subCategories')
	let product = read('products')
	if(userId) {
		let catData = category.filter( cgy => cgy.subCategoriesId == userId ) 
		return catData
	} else {
		for(let cgy of subcategories){
			let products = product.filter(val => val.subCategoryId == cgy.subCategoryId)
			products = products.filter(val => delete( val.subCategoryId ))
			cgy.products = products
		}
		return subcategories
	}
	}catch(err){
		res.status(401).json({ status: 401, message: err })
	}
}


const subCateg = (req,res,{subCat}) => {
	try{
		if(!req.headers.token) throw 'not token'
        let dataSub = read('subCategories')
		let dataPro = read('products')
		dataSub = dataSub.filter(val => val.subCategoryId == subCat)
		let data = dataPro.filter(val => val.subCategoryId == dataSub[0].subCategoryId)
		dataSub[0].product = data
		return dataSub
	}catch(err){
		res.status(401).json({ status: 401, message: err })
	} 
}

export default {
    subCategory,
    subCateg
}