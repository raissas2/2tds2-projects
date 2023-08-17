/*                           
let personSimple = "john Doe";

const personObject = new Object();
personObject.fistName = "John";
personObject.lastName = "Doe";
personObject.age = "50";
personObject.eyeColor = "blue";

console.log(personSimple);
console.log(personObject);
*/

/*
let personSimple = "john Doe";

const personObject ={
fistName: "John",
lastName: "Doe",
age: 50,
eyeColor: "blue"
}
personObject.age = 10;

console.log(personSimple);
console.log(personObject);
*/

/*
class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`);
            }
        }
    const user1 = new User ('João', 30);
    user1.introduce();
    */

/*
class Pizza {
    constructor(base, sauce, toppings, cheese) {
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }
    getDescription() {
        return `A delicious pizza with ${this.base} base, ${this.sauce}sauce, ${this.toppings} toppings, and lots of cheese.`;
    }
    getTimerBase(){
        if(this.base == 'traditional'){
            return 10;
        }else if(this.base == 'integral'){
            return 15;
        }else{
            return 'This base does not exist!';
        }
    }
    getTimerSauce(){
        if(this.sauce == "tomato"){
            return 20;
        }else if(this.sauce == 'pezzo'){
            return 15;
        }else{
            return 'This base does not exist!';
        }
    }

    getTimerToppings(){
    if (this.toppings == 'calabresa'){
        return 30;
    } else if (this.toppings == 'queijo'){
            return 15;
    }else{
        return 'This base does not exist!';
    }
    
}
 
getTimercheese(){
if (this.cheese == 'catupiry') {
    return 15;
}else if(this.cheese == 'cheedar'){
    return 15;
}else{
    return 'This base does not exist!';
}
}
}

const myPizza = new Pizza('traditional', 'tomato', 'calabresa', 'catupiry');
console.log(myPizza.getDescription());
console.log('time to cook the pizza = ' + myPizza.getTimerBase());
console.log('time to cook the pizza = ' + myPizza.getTimerSauce());
console.log('time to cook the pizza = ' + myPizza.getTimerToppings());
console.log('time to cook the pizza = ' + myPizza.getTimercheese());

const totaTime = myPizza.getTimerBase() + myPizza.getTimerSauce() + myPizza.getTimerToppings() + myPizza.getTimercheese();
console.log('time total:' +  totaTime);
*/

/*
class Calculator{
    add(a,b){
        return a + b;
    }
    multiply(a,b){
        return a * b;
    }
    subtract(a,b){
        return a - b;
    }
} 
const calculator = new Calculator();
const sumResult = calculator.add(5, 3);
console.log("Sum:",sumResult);

const multiplicationResult = calculator.multiply(4, 2);
console.log("Multiplication:", multiplicationResult);

const subtractionResult = calculator.subtract(10, 4);
console.log("Subtraction:", subtractionResult);
*/

/*
class Witch{
    constructor(name,patron,house,colorEyes){
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEyes = colorEyes;
    }
 getName(){
    return`O nome do bruxo (a) é: ${this.name}`;
 }
getHouse(){
    return`Ele (a) está na casa ${this.house}`;
}
getPatron(){
    return`Seu patrono é ${this.patron}`;
}
}

const witch1 = new Witch('Harry Potter', 'Deer', 'Grynffindor', 'green');
console.log(witch1.getName());

class typeWich extends Witch {
    constructor(name,patron,house,colorEyes,typeWich){
        super (name,patron,house,colorEyes);
        this.typeWich = typeWich;
    }
 getTypewich(){
    if(this.typeWich === 'P'){
        return "Este bruxo é sangue puro";
    } else if (this.typeWich === 'M'){
        return "Este bruxo é mestiço";
    } else{
        return "Este é um trouxa"
    }
 }
}
const harry = new typeWich('Harry Potter', 'Cervo', 'Sonserina', 'Verde/Azul?', 'M');
console.log(harry.getTypewich());
*/

/*
class CamaraSecreta {
  constructor(name,pwd){
   this.name = name;
   let _pwd = pwd; // Atributo privado.

   //Metodo privado
   this.verifyPwd = (pwdInput) => {
    return pwdInput == _pwd; // true or false
    };
    this.acessToChamber = () => {
        let pwdInput = prompt ("digite sua senha");
        if(this.verifyPwd(pwdInput)){
        console.log( `Bem vindo a camara secreta ${this.name}`);
        } else{
           console.log("Acesso negado Trouxa")
        }
    };
}
// metodos publicos 
   showName(){
    console.log(`Nome do bruxo: ${this.name}`);
   }
}
   const myAccess1 = new CamaraSecreta('HP','senha123')
    //metodo publico
    myAccess1.showName();
     
    myAccess1.name = 'HP';
    myAccess1.pwd = '123';

    //metodo privado
    myAccess1.acessToChamber();
*/
