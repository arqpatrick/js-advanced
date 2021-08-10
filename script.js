/**
 * ESCOPO
 * 
 * GLOBAL
 * LOCAL
 * 
 * - ESCOPO DETERMINA A VISIBILIDADE DE UMA VARIÁVEL
 * - AS FUNÇÕES NO JS CRIAM SEU PRÓPRIO ESCOPO
 * - AS VARIÁVEIS DE UMA FUNÇÃO NÃO SÃO ACESSIVEIS FORA DELA
 */

let a = 5

function escopo() {
  let b = 10
  let resultado = a + b
  console.log(resultado)
}

console.log(a)

escopo()

/**
 * HOISTING 
 * 
 * Comportamento padrão do JS de mover uma declaração para o topo de um escopo
 */

function testeHoisting() {
  //outraFuncao() - funcionaria, isso é hoisting, mas não é considerado uam boa prática
  function outraFuncao() {
    console.log('sou outra função')
  }
  outraFuncao() // aqui é o melhor local, seguindo boas práticas, para executar a função
}

testeHoisting()

/**
 * ARROW FUNCTIONS
 * 
 * ES6
 * 
 * Permite escrever uma sintaxe de função de forma mais curta
 * 
 */

//função padrão
function funcaoNormal(param1, param2) {
  console.log(param1, param2)
}

funcaoNormal(1, 2)

//arrow function
const funcaoArrow = (param3, param4) => {
  console.log(param3, param4)
}

funcaoArrow(3, 4)

//arrow function apenas com retorn, sem código na função
const retornoSoma = (param5, param6) => {
  return param5 + param6
}

const resultado1 = retornoSoma(7, 3)
console.log(resultado1) 

//return implícito, igual a de cima, menos verbosa
const retornoImplicito = (param5, param6) => param5 + param6

const resultado2 = retornoImplicito(7, 3)
console.log(resultado2)

//quando tem apenas um parâmetro, pode remover o parenteses, ficando menos verbosa
const teste = param1 => param1

console.log(teste('único parâmetro'))

//Arrow function não faz ligação do .this...
const botao1 = document.querySelector('#botao1')
const botao2 = document.querySelector('#botao2')

//função normal, o this é refernte a onde a função está, o button botao1
botao1.onclick = function() {
  console.log(this)
}
//arrow function, o this é refernte ao pai dela, nesse caso o Window
botao2.onclick = () => {
  console.log(this)
}

/**
 * MAP
 * 
 * serve para manipular Arrays
 */

const clientes = [
  { name: 'Patrick',  lastname:'Kottwitz', age: 35 },
  { name: 'Tatiana',  lastname:'Vetter', age: 26 },
  { name: 'Anastasia',  lastname:'Vetter Kottwitz', age: 14 }
]

//objetivo, criar um array com o nome e sobrenome, ex ['Patrick Kottwitz', 'Tatiana Vetter', 'Anastasia Vetter Kottwitz]

//1ª forma de executar
let clientesFinal = []
clientes.forEach(function(cliente) {
  clientesFinal.push(cliente.name + ' ' + cliente.lastname) //o push aqui empurra os clientes para denttro de clientesFinal
})

console.log(clientesFinal)

//2ª forma de executar com MAP - mais utilizado em programação funcional
const clientesFinalMap = clientes.map((cliente) => { //metodo map já retona um array
  return cliente.name + ' ' + cliente.lastname
})

console.log(clientesFinalMap)

//Usualmente, de forma menos verbosa, essa função seria apresentada da seguinte forma
const clientesFinalMapCurta = clientes.map(cliente => cliente.name + ' ' + cliente.lastname)

console.log(clientesFinalMapCurta)

/**
 * FILTER
 * 
 * serve para manipular arrays
 */

const clientesMaiores = clientes.filter(cliente => {
  let retorno = false

  if (cliente.age >= 18) {
    retorno = true
  }

  return retorno
})

console.log(clientesMaiores)

//IF TERNÁRIO
const clientesMaioresTernario = clientes.filter(cliente => {
  return cliente.age >= 18 ? true : false // (condição) ? (valor atribuido se atendidada) : (valor atribuido senão atendida)
})

console.log(clientesMaioresTernario)

//IF TERNÁRIO E MENOS VERBOSO - como o if retorn true ou false, não precisa declarar
const clientesM = clientes.filter(clientes => clientes.age >= 18)

console.log(clientesM)

/**
 *  REDUCE
 * 
 * Percorre Arrays mas permite manipular e retornar o que desejar
 */

const clientes2 = [
  { name: 'Patrick', score: 34 },
  { name: 'Tatiana', score: 38 },
  { name: 'Anastacia', score: 80 },
  { name: 'Bela', score: 50 },
  { name: 'Aurora', score: 98 }
]

// acc = accumulator - acumulador
// curr = current - atual - o elemento que ele vai percorrer
const clientesResultado = clientes2.reduce((acc, curr) => {
  if (curr.score > 50) { //se curr.score for maior que 50
    acc.pass.push(curr) // acumular ele dentro do pass através de push, do próprio curr
  } else { //senão for > 50
    acc.fail.push(curr) // scumular ele dentro de fail
  }

  return acc //assim ele vai inserindo os dados dentro de acc já modificado
}, {
  pass: [],
  fail: []
})

console.log(clientesResultado)

//segundo exemplo de redux
const numeros = [1, 2, 3, 4]

const numerosFinal = numeros.reduce((acc, curr) => {

  acc += `${curr + 1} - `

  return acc

}, '')

console.log(numerosFinal)