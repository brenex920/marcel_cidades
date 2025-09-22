/******************************************************************
 * objetivo API responsavel em criar endPoints, referente estatdps e cidades
 * data: 15/09/2025
 * Autor: Breno Dias Machado
 * versão: 1.0
 * 
 * 
 * Observaçoes: Istalar dependecias para criar a API
 *          Express     => npm install express --save  [istala as dependecias para criar uma API  ]
 *          cors        => npm install cors --save     [istala as dependencias para configurar as permisões de uma API ] 
 *          body-parser => npm install body-parser --save   [istala as dependecias para receber os tipos de dados via POST ou PUT ]
 *//////////////////////////////////////////////////////////////////////////

//import do arquivo de funçoes 



//import das dependecias 
const express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')
const {request, get} = require('http')

const dados = require('./modulo/funcoes.js')

//define a porta padrao da API, se for um servidor em nuvem nao tem acesso a porta
        //en execuçao local podemos definir uma porta livre
const PORT =  process.PORT || 8090;

//istancia na classe do express
const app = express()


//configuraçoes do CORS
app.use((request, response, next)=>{

    response.header('Access-Control-Allow-origin', '*')//IP de ORIGEM
    response.header('Access-Control-Allow-Methods', 'GET')// metodos (verbos) do protocolo http

    app.use(cors())
    next() //Proximo
})


//EndPoints
app.get('/v1/estado/', function(request, response){

    let estados = dados.getAllEstados();
    response.status(estados.statuscode)
    response.json(estados)

})

//request recebe os dados da API
//respose envia os dados na API

app.get('/v1/estado/:uf', function(request, response){
    let sigla = request.params.uf
    console.log(sigla)
})

app.get('/api/filtros/estados', (req, res) => {
    const resultado = getEstadoBySigla ();

    res = console.log('deu ceto')
    
});


//start da API
app.listen(PORT, function(){
    console.log('recebido')
})
app.get('/v1/estado/filtro/:uf', function(request, response){

   
    
    

})

app.get('/v1/regiao/estado/:id', function(request, response){


    let regiaoEstados = request.query.regiao
    let sigla = request.query.uf
    let id = request.params.id

    console.log(regiaoEstados)
    console.log(sigla)
    console.log(id)
})
