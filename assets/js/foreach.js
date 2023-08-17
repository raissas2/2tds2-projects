
// const companies = ["Apple","Google","Facebook"];

// companies.forEach(company => {
//     console.log(`Hey, ${company}!`);
// });

// const names = ["Whinds", "Freeway", "Teste", "Maria"];

// names.forEach((name)=> {
//     console.log(`Hi, ${name}!`);
// // });

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// console.log(numbers);

// numbers.forEach((number,index) => {
//     if (number % 2 == 0){
//         console.log(`o índice ${number} esta na posição ${index}`);

//     }
// });

 const cars = [
     {
         marca: "Ford",
        modelo: "Focus",
     },
    {
        marca:"BMW",
         modelo:"BMW Z4",
    },
     {
         marca:"Fiat",
        modelo:"Palio",
     },
     {
        marca:"Audi",
         modelo:"A3",
     },
 ];
 cars.forEach((car) => {
    console.log(`Marca: ${car.marca} 
   Modelo: ${car.modelo}`);
 });

class Car {
    constructor(brand,model){
        this.brand = brand;
        this.model = model;
    }
}


