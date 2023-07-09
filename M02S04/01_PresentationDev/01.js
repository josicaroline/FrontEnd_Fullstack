
class Person {
    constructor(name, age, height) {
      this.name = name;
      this.age = age;
      this.height = height;
    }

    apresentar() {
      console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos e ${this.height} de altura.`);
    }
  }

  class PersonProfessional extends Person {
    constructor(name, age, height, profession) {
      super(name, age, height);
      this.profession = profession;
    }

    apresentar() {
      console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos e ${this.height} de altura e meu trabalho é ${this.profession}.`);
    }
  }

  const person1 = new PersonProfessional( "João", 18, 1.8, "Programador");
  person1.apresentar();