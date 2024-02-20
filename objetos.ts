function createCourse(curso: CourseType):{id: number, name:string, price: number}{
    let _id = Math.random()*1000
    return {id: _id, name: curso.nome, price: curso.preco}
}

type CourseType = {nome: string, preco: number}

let curso = {nome:'react-native', preco: 1000.0}

console.log(createCourse(curso))

function toStringUser({nome, email, telefone}):void {
   console.log(`Nome: ${nome} Email:${email} Telefone: ${telefone}`)
}

let user = {nome:"marcos", email: "marcos@gmail.com", telefone: "(11)997715686"}
toStringUser(user)


type User = {
    readonly _id:string
    nome:string
    email:string
    isActive:boolean
    creditCard?:CredidCardDate
}

let userNovo: User = {
    _id: "12345678",
    nome: 'marcos',
    email: 'marcos@gmail.com',
    isActive: true
}

let creditcard:CreditCardDetail = {numero: '232353245345', data: '10/34', cvv: '432'}

const createUser = (user: User):User => {
   return {_id: "2", nome:"joao", email:"joao@uol.com", isActive:true, creditCard: creditcard}
}

type CreditCard = {
    numero: string
}

type CredidCardDate = {
    data: string
}

type CreditCardDetail = CreditCard & CredidCardDate & { cvv: string} 

console.log(createUser(userNovo))
export {}