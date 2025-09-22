/*****************************************************
 * objetivo: arquivo responsavel pelas funçoes para criar a api de estados e cidades
 * data: 15/09/2025
 * Autor: Breno Dias Machado
 * versão: 1.0
 *//////////////////////////////////////////////////////////////////////////////////////

 //import do arquivo estados e cidades
const dados = require('./estados_cidades.js')
const MESSAGE_ERROR = {status: false,statuscode: 500,devlopment:'Breno Dias Machado'}
 //retorna a lista de Estados 
 const getAllEstados = function() {


    //o forEach pega o array e repete ele chamando a sigla
    //padrao do JSON que sera o retorno 
    let message = {status: true, statuscode: 200, devlopment: 'Breno Dias Machado',uf: []}

    dados.listaDeEstados.estados.forEach(function(item){
        message.uf.push(item.sigla)
    })

    //adiciona um novo elemento JSON 
    message.quantidade = message.uf.length

    //apaga um elemento existente no JSON
    //delete message.status

    if(message.uf.length > 0 )
        return message;//resultado da API 200
    else
        return MESSAGE_ERROR //resultado falso da API 500
    
    
 }

  const getFiltroEstado = function() {


   
    
        
  }


 //retorna dados do estado filtrando pela sigla
 const getEstadoBySigla = function(sigla) {

    sigla = console.log('feito')
    
 }
 //retorna a capital do estado filtrando pela sigla
 const getCapitalBysigla = function(sigla) {

 }

 //retorna a lista de estados filtrando pela região
 const getEstadosByregiao = function (regiao) {

 }
//retorna a lista de estados que forma a capital de um pais filtrando pelo pais
const getEstadoIsCapitalByCountry = function (pais) {

}
//retorna a cidades existentes em um estado filtrando pela sigla
const getCidadesBySigla = function (sigla) {

}


module.exports = {
    getAllEstados,
    getFiltroEstado
}