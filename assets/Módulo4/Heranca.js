class person{
    static hands = 2;

    age = 0;

    constructor(name){
        this.name = name;

    }

    sayHi(){
        console.log(`${this.name} diz oi`)

        // printando o dado static
        console.log(`eu tenho ${person.hands} mãos`)
    }
}
class Student extends person{

    
    constructor(name, id){
        super(name);
        this.id = id;
    }
    sayHello(){
        super.sayHi()
    }
    static sayBye(){
        console.log("Tchal")
    }

}

let p1 = new Student('Diego', 1);
p1.age = 13;

p1.sayHi();
p1.sayHello();
console.log(`${p1.name} tem ${p1.age}. id=${p1.id}`)

// printando o dado static 
console.log(` tenho ${person.hands} mãos`)

Student.sayBye();


//----FACTORY

function createPerson(name, age){
    let p = new person(name);
    p.age = age;
    return p
}
let p1 = createPerson('Bonieky', 90);

console.log(p1.name, p1.age)