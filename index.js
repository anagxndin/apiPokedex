
//Importando pacotes do NPM

let express = require('express');
let cors = require('cors');

let porta = 3000;
//Iniciar o servidor
let app = express();

//Configurar o servidor
app.use(cors(0));
app.use(express.json());

//BD

// Rotas
app.get('/', (req, res) =>{
    return res.status(200).json({msg: 'Rota inicial'});
})

app.listen(porta, ()=> {
    console.log(`Rodando em http://localhost:${porta}`)
})

