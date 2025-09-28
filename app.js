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

    response.status(estados.statuscode);

    if (estados.status == true) {
        let resultado = {
            uf: estados.uf,
            quantidade: estados.quantidade
        };

        response.json(resultado);
    } else {
        response.json({ messageError: estados.erro });
    }
});

//request recebe os dados da API
//respose envia os dados na API

app.get('/v1/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let resultado = dados.getFiltroEstado(sigla)
    
    response.status(resultado.statuscode);

    console.log(resultado);
    
    if (resultado.statuscode == 200) {
        response.json(resultado.estado);
    } else {
        response.json(resultado);
    }
});

app.get('/v1/estado/filtro/:uf', function(req, res){

    let sigla = req.params.uf
    let resultado = dados.getEstadoBySigla(sigla)
    
    res.status(resultado.statuscode);

    if(resultado.statuscode == 200) {
        res.json(resultado.estado)
    }else{
        res.json(resultado)
    }
    

})
app.get('/v1/estado/capital/:uf', function(request, response){
    let capital = request.params.uf
    let res = dados.getCapitalBysigla(capital)

    response.json(res);
})

app.get('/v1/regiao/estado/:regiao', function(request, response){
    let regiaoEstados = request.params.regiao;

    let resultado = dados.getEstadosByregiao(regiaoEstados);
    
    response.json(resultado);
    console.log(resultado);
})
app.get('/v1/estado/estados/:uf', function(request, response){
    let estado = request.params.uf

    let resultado = dados.getCidadesBySigla(estado)
    response.json(resultado)

})
app.get('/v1/pais/estados/capital/', function(request, respose){


    let resultado = dados.getEstadoIsCapitalByCountry()
    respose.json(resultado)
})

//start da API
app.listen(PORT, function(){
    console.log("certo")
})

