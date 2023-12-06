
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

/*tiposRetorna todos os tipos dos Pokémon.
Retorno: lista chamada tipos.
Exemplo:
https://localhost:3000/v1/tipos

/regioes
Retorna todas as regiões dos Pokémon.
Retorno: lista chamada regioes.
Exemplo:
https://localhost:3000/v1/regioes

/pokemon/nome/{nomeDoPokemon}
Retorna um único Pokémon com o nome informado.
Retorno: objeto chamado pokemon.
Parâmetros:
• nomeDoPokemon: (string) nome do Pokémon a ser retornado.
Exemplo:
https://localhost:3000/v1/nome/pikachu
Retorna as informações do Pikachu.

/pokemon/numero/{numeroDoPokemon}
Retorna um único Pokémon com o número informado.
Retorno: objeto chamado pokemon.
Parâmetros:
• numeroDoPokemon: (int) numero do Pokémon na Pokédex, a ser retornado.
Exemplo:
https://localhost:3000/v1/numero/25
Retorna as informações do Pikachu.

/pokemon/tipo/{nomeDoTipo}/{quantidade}/{pagina}
Retorna uma lista de Pokémon do tipo informado.
Retorno: lista chamada pokemon.
Parâmetros:
• nomeDoTipo: (string) tipo dos Pokémon a serem retornados.
• quantidade: (int) quantidade de Pokémon retornados (máximo de 50 por vez).
• pagina: (int) número da página de resultados.
Exemplo:
https://localhost:3000/v1/tipo/electric/10/1
Retorna os 10 primeiros Pokémon do tipo elétrico (eletric).

/pokemon/geracao/{numeroDaGeracao}/{quantidade}/{pagina}
Retorna uma lista de Pokémon que pertencem à geração informada.
Retorno: lista chamada pokemon.
Parâmetros:
• numeroDaGeracao: (int) número da geração dos Pokémon a serem retornados.
• quantidade: (int) quantidade de Pokémon retornados (máximo de 50 por vez).
• pagina: (int) número da página de resultados.
Exemplo:
https://localhost:3000/v1/geracao/3/10/1
Retorna os 10 primeiros Pokémon da 3ª Geração.

/pokemon/lista/{numeroDaGeracao}
Retorna uma lista com apenas nome e número dos Pokémon da região informada.
Retorno: lista de dicionários chamada pokemon.
Parâmetros:
• numeroDaGeracao: (int) número da geração dos Pokémon a serem retornados.
Exemplo:
https://localhost:3000/v1/pokemon/lista/1
Retorna uma lista com apenas nome e número de todos os Pokémon da 1ª Geração.

/pokemon/lista/
Retorna uma lista com apenas nome e número de todos os Pokémon.
Retorno: lista chamada pokemon.
Exemplo:
https://localhost:3000/v1/pokemon/lista
Retorna uma lista com apenas nome e número de todos os Pokémon
/*