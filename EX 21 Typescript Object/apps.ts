// EXERCISE 21 (TYPESCRIPT OBJECT).

interface item {
      name:string
      price:number
}

// create two objects
const cellphone: item ={
       name: 'IPHONE X',
       price: 65000
}
const vegetable: item ={
      name:'LADYFINGER',
      price: 250
}
console.log(`cellphone name: ${cellphone.name}, price: $${cellphone.price}`)
console.log(`vegetable name: ${vegetable.name}, price: $${vegetable.price}`)