
//Chamando Mongodb
const dotenv = require('dotenv')

const connectToDatabase = require('./src/database/connect')

dotenv.config()

connectToDatabase()

require('./modules/express')


//const {Person} = require('./person')
//const person = new Person('Jordan')

