import validation from '../lib/validation.js'
import { read } from '../lib/fs.js'

export default function (req, res, next) {
	try {
		let { username, password, age, email, gender } = req.body
		if(!username || !validation.username(username)) throw 'The username is required!'
		if(!password || !validation.password(password)) throw 'The password is required!'
		if(!age      || !validation.age(age))           throw 'The age is required!'
		if(!email  || !validation.email(email))   throw 'The email is required!'
		if(!gender   || !validation.gender(gender))     throw 'The gender is required!'


		let users = read('users')
		let user = users.find( user => user.username == username )
		if(user) throw 'The user already exists!'
			
		next()
	} catch(error) {
		res.status(401).json({ status: 401, message: error })
	}
}