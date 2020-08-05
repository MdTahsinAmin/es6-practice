// Inheritance 

class Parent{
    constructor(){
        this.fatherName = "Md.Bani Amin";
    }
    greeting(){
        console.log("Hello my child and also me !");
    }
}

class Child extends Parent{
    constructor(name){
        super();
         this.childName = name;
       
    }
    getFullName(){
      super.greeting();
        return this.childName+" "+ this.fatherName;
    }
}

const baby = new Child('Md.Tahsin Amin');

console.log(baby);

console.log(baby.getFullName());