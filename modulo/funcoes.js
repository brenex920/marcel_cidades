/*****************************************************
 * objetivo: arquivo responsavel pelas funçoes para criar a api de estados e cidades
 * data: 15/09/2025
 * Autor: Breno Dias Machado
 * versão: 1.0
 *//////////////////////////////////////////////////////////////////////////////////////

//import do arquivo estados e cidades
const dados = require('./estados_cidades.js')
const MESSAGE_ERROR = { status: false, statuscode: 500, devlopment: 'Breno Dias Machado', erro: "Erro" }

//retorna a lista de Estados 
const getAllEstados = function () {
  //o forEach pega o array e repete ele chamando a sigla
  //padrao do JSON que sera o retorno 
  let message = { status: true, statuscode: 200, devlopment: 'Breno Dias Machado', uf: [] }

  dados.listaDeEstados.estados.forEach(function (sigla) {
    message.uf.push(sigla.sigla)
  })

  //adiciona um novo elemento JSON 
  message.quantidade = message.uf.length

  //apaga um elemento existente no JSON
  //delete message.status

  if (message.uf.length > 0)
    return message;//resultado da API 200
  else
    return MESSAGE_ERROR //resultado falso da API 500
}

const getFiltroEstado = function (sigla) {
  let resultado = null;

  dados.listaDeEstados.estados.forEach(estado => {
    if (sigla == estado.sigla) {
      let message = {
        sigla: estado.sigla,
        descricao: estado.nome,
        capital: estado.capital,
        regiao: estado.regiao
      };

      resultado = { estado: message, statuscode: 200 };
    }
  });

  if (resultado == null)
    return MESSAGE_ERROR;

  return resultado;
}
//retorna a capital do estado filtrando pela sigla
const getCapitalBysigla = function (sigla) {

  dados.listaDeEstados.estados.forEach(estado => {
    if (sigla == estado.sigla) {
      let message = {
        uf: estado.sigla,
        descricao: estado.nome,
        capital: estado.capital
      };
      resp = message
    }
  })
  return resp;
}

//retorna a lista de estados filtrando pela região
const getEstadosByregiao = function (regiao) {
  let estadosRegiao = [];

  let resultado = {
    regiao: regiao,
    estados: [],
  };

  dados.listaDeEstados.estados.forEach((estado) => {
    if (estado.regiao == regiao) {
      let temp = {

        uf: estado.nome,
        descricao: estado.nome

      }

      estadosRegiao.push(temp);
    }
  });

  resultado.estados = estadosRegiao;

  return resultado;
}
//retorna a lista de estados que forma a capital de um pais filtrando pelo pais
const getEstadoIsCapitalByCountry = function () {

  

  let message = []

  dados.listaDeEstados.estados.forEach((estado) => {
    if (estado.capital_pais) {
      message.push({
        capitais: estado.capital_pais.capital,
        uf: estado.uf,
        capital: estado.capital,
        descricao: estado.nome,
        regiao: estado.regiao,
        capital_pais_ano_inicio: estado.capital_pais.ano_inicio,
        capital_pais_ano_termino: estado.capital_pais.ano_fim
      })
    }

  })
  return message;


}
//retorna a cidades existentes em um estado filtrando pela sigla
const getCidadesBySigla = function (sigla) {

  let message = null;


  dados.listaDeEstados.estados.forEach((estado) => {
    if (sigla == estado.sigla) {
      message = {
        uf: estado.sigla,
        descricao: estado.nome,
        quantidade: estado.cidades.length,
        cidades: estado.cidades
      }
    }
  })
  return message;
}


module.exports = {
  getAllEstados,
  getFiltroEstado,
  getCapitalBysigla,
  getEstadosByregiao,
  getCidadesBySigla,
  getEstadoIsCapitalByCountry
}