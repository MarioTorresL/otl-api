const mongoose = require('mongoose');

const connection = async ()=>{
	try{
		await mongoose.connect(process.env.DB_CNN)
		console.log('Database ONline')
	}catch(err){
		console.log(err)
		throw new Error('Database Connection Error')

	}
}

module.exports = {connection}
