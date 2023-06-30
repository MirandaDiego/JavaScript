class Person{
    _altura = 180;
    steps = 0;

    constructor(name, age){
  

        this.name = name;
        this.age = age;

    }


    takeAStep(){
        this.steps++;
    }

    //Para mudar a propriedade de um obj e fazer uma verificaçao no caso(se é number):
    setAge(newAge){
        if(typeof newAge == 'number'){
            this.age = newAge;
        }else{
            console.log('Idade aceita somenten números')
        }
    }
         //funçao que retorna nome e sobrenome
    

    get altura(){
        return this._age;
    }
    set altura(x){
        this._age = x;
    }
}


let p1 = new Person("Diego", 24);
let p2 = new Person ("Pedro", 30);
let p3 = new Person("João", 25);


p1.altura = 181;
p5.altura = 230;

console.log(`${p1.name} tem ${p1.age} e mede ${p1.altura}cm`)

p1.takeAStep();
p1.setAge(20)
console.log(`Passos de ${p1.name}: ${p1.steps} ${p1.age}`)
console.log(`${p5.fullName}`);
//-----------------------------------------------------------------------
class Person2{
    _altura = 180;
    steps = 0;

    constructor(name, age){
  

        this.name = name;
        this.age = age;

    }
    get fullName(){
        return `${ths.FirstName} ${this.LastName}`
    }



    get altura(){
        return this._age;
    }
    set altura(x){
        this._age = x;
    }

    setAge(newAge){
        if(typeof newAge == 'number'){
            this.age = newAge;
        }else{
            console.log('Idade aceita somenten números')
        }
    }

    takeAStep(){
        this.steps++;
    }



}
    // Person com name e sobrenome
    let p5 = new Person2("Antonio", "Nunes");
    let p6 = new Person2("Carlinhos", "Maia");