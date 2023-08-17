
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

//  const cars = [
//      {
//           marca: "Ford",
//        modelo: "Focus",
//      },
//     {
//          marca:"BMW",
//          modelo:"BMW Z4",
//      },
//      {
//           marca:"Fiat",
//          modelo:"Palio",
//      },
//       {
//          marca:"Audi",
//           modelo:"A3",
//       },
//   ];
//  cars.forEach((car) => {
//      console.log(`Marca: ${car.marca} 
//     Modelo: ${car.modelo}`);
//   });

class Car {
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}
class CarsList{
    constructor(){
       this.cars=[];
    }
    addCar(param){
        this.cars.push(param);
    }
}
const carsList = new CarsList();

function createCar(){
    const marca = document.getElementById("brand").value;
    const modelo = document.getElementById("model").value;

    const car = new Car (marca,modelo);

    carsList.addCar(car);
    
    document.getElementById("marca").value="";
    document.getElementById("modelo").value="";

    carsList.cars.forEach((car) => {
        console.log(`Marca: `);
    })

}
