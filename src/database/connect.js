const mongoose = require('mongoose');

const connectToDatabase = async () =>{
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.gbmtnno.mongodb.net/?retryWrites=true&w=majority`, (error) =>{
        if (error){
            return console.error('Ocorreu um erro ao se conectar com o banco de dados: ', error)
        }
        return console.log('Conexao realizada com sucesso no MongoDB')
    })
}

module.exports = connectToDatabase;