function createPerson(name, lastName, age){
    return{
        name,
        lastName,
        age,

        getFullName ()  {
            return `${this.name} ${this.lastName}`;
        },
        start(){
            console.log('deu start na pessoa')
        }
    }
}

let person1 = createPerson('Diego', 'Miranda', 90);
console.log(person1.getFullName());
person1.start();
