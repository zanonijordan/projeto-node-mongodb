const path = require('path');

//Apenas o nome do arquivo
console.log(path.basename(__filename));

//nome do diretorio atual
console.log(path.dirname(__filename));

// Extensao do arquvio
console.log(path.extname(__filename));

//Criar objeto Path
console.log(path.parse(__filename));

// Juntar caminho de arquivos
console.log(path.join(__dirname, "teste",'teste.html'))