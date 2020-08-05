class Student{
   constructor(sId , sName){
       this.id = sId;
       this.name =sName;
       this.school = "PSTU";
   }
}
const student1 = new Student(54,'Tahsin');
console.log(student1.id+'\n'+student1.name+'\n'+student1.school);

console.log(student1);