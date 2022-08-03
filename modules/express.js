// Requisitando o express
const { application } = require('express');
const express = require('express');
const UserModel = require('../src/models/user.model');

//Criando uma variavel para chamar o express
const app = express();
// Informar o express que estamos usando JSON nas requisicoes (req.body)
app.use(express.json())

// Instalar o ejs
app.set('view engine', 'ejs');
// Diga onde o express vai ler as views ejs
app.set('views', 'src/views');

//Middleware serve como estagio antes de qualquer requisicao ser executada. Usa-se o NEXT
app.use((req, res, next) =>{
    //para saber o metodo chamado (getm post, delete ...)
    console.log(`Resquest Type: ${req.method} `);
    console.log(`Content-Type: ${req.headers["Content-type"]}`);
    console.log(`Date: ${new Date()}`)
    next();
});

//Tela inicial
app.get('/home', (req, res) => {
    //res.contentType("application/html");
    res.status(200).send(`<h1> Hello Express! </h1>`);
});

//Carregando na tela Usuarios (ejs)
app.get('/views/users', async (req, res) => {
    //chamando todos os users do banco de dados
    const users = await UserModel.find({});

    //Passado users nos parametros para o index
    res.render('index', {users});
})

//Para pegar usario por Id, no endpoint coloque /:id
app.get('/users/:id', async (req, res) =>{
    try {
        // Guarde o id em uma variavel. O nome no endpoint Deve ser o mesmo depois do params.''
        const id = req.params.id;
        
        // requisitando no Data Base NAO ESQUECER DO AWAIT
        const user = await UserModel.findById(id);
        return res.status(200).json(user);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

app.get('/users', async (req, res) => {
    try {
        //posso passar um fitro tipo {name: 'jordan'} ou  {email: ''}
        const users = await UserModel.find({}) 
        
        //Enviar resposta convertida em Json
        res.status(200).json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

app.post('/users',async (req, res)=>{
    
    try{
        const user = await UserModel.create(req.body)
        res.status(201).json(user);
    } catch(error){
        res.status(500).json(error.message);
    }
    
})

app.patch('/users/:id', async (req, res) =>{
    try {
        const id = req.params.id;
        
        // Buscando pelo id e nao esquecer no terceiro parametro o {new: true} para passa o usuario atuliazado na const user
        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
        
        res.status(201).json(user);
        
    } catch (error) {
        return res.status(500).json(error.message);
    }
})
app.delete('/users/:id', async (req, res) =>{
    try {
        const id = req.params.id;
        
        const user = await UserModel.findByIdAndDelete(id);
        
        res.status(201).json(user);
        
    } catch (error) {
        return res.status(500).json(error.message);
    }
})

const port = 9090;
app.listen(port, () =>{console.log(`Rodando na porta ${port}`)});