const { error } = require('console');
const fs = require('fs');
const path = require('path');

//Criar pasta
/*fs.mkdir(path.join(__dirname, '/test'), (error) =>{
    if(error){
        return console.log(error);
    }
    console.log('Pasta Criada com sucesso')
})
fs.writeFile(
    path.join(__dirname, "/test", "test.txt"), 
    "Hello world!", 
    (error) =>{
        if(error){
            return console.log('erro', error);
        }
        console.log('arquivio criado com sucesso')
    }
); 
//Adicionar a um arquivo   
fs.appendFile(
    path.join(__dirname, "/test", "test.txt"), 
    "Hello world!", 
    (error) =>{
        if(error){
            return console.log('erro', error);
        }
        console.log('arquivio modificado com sucesso')
    }
);  
// Ler arquivo
fs.readFile(path.join(__dirname, "/test", "test.txt"), 
"utf8", (error, data) =>{
    if(error){
        return console.log('erro', error);
    }
    console.log(data)
})
*/