let pessoa = { nome: "marcos", email: "marcos@gmail.com", cel:"11997715686"}
console.log(pessoa)

let numero = 5
let numero2 = 2
let sum = numero + numero2
console.log(sum)

function soma( n1:number, n2:number):number{
    return n1 + n2
}

console.log(soma(numero, numero2))

const multiply = (numero1:number, numero2:number):number => {
    return numero1 * numero2;
}

let multiplicacao = multiply(numero, numero2)
console.log(multiplicacao)


const heroes = ['thor','iron man','hulk']

let teste = heroes.map(hero => { 
    return `super hero is ${hero}`
})

console.log(teste)

export {}