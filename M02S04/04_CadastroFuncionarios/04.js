
class Funcionario {
    constructor(name, age, salary) {
      this.name = name;
      this.age = age;
      this.salary = salary;
    }

    get name() {
      return this.name;
    }

    get age() {
      return this.age;
    }  

    get salary() {
      return this.salary;
    }

    set name(newName) {
        this.name = newName; 
    }

    set age(newAge) {
        this.age = newAge
    }

    set salary(newSalary) {
        this.salary = newSalary;
    }
  }

  class Gerente extends Funcionario {
    constructor(name, age, salary, department) {
      super(name, age, salary);
      this.department = department;
    }

    get department() {
      return this.department;
    }

    set department(newDepartment) {
        this.department = newDepartment;
    }
  }

  class Programador extends Funcionario {
    constructor(name, age, salary, language) {
      super(name, age, salary);
      this.language = language;
    }

    get language() {
      return this.language;
    }

    set language(newLanguage) {
        this.language = newLanguage;
    }
  }


const gerente = new Gerente("João", 40, 10000, "Vendas"); 

console.log("Detalhes do Gerente:"); 
console.log(`Nome: ${gerente.name()}`); 
console.log(`Idade: ${gerente.age()}`); 
console.log(`Salário: ${gerente.salary()}`); 
console.log(`Departamento: ${gerente.department()}`); 

const programador = new Programador("Maria", 30, 5000, "JavaScript"); 

console.log("Detalhes do Programador:"); 
console.log(`Nome: ${programador.name()}`); 
console.log(`Idade: ${programador.age()}`); 
console.log(`Salário: ${programador.salary()}`); 
console.log(`Linguagem: ${programador.language()}`); 