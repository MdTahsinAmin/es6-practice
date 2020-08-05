// Destructure

const person = {name : "Md.Amin",address : "Pirojpur",hubby:"programming",gfName : "None",phone : "01787022226"};

const {phone , gfName , name , hubby} = person;

console.log(phone , gfName , name , hubby);


const allFriends = ['Tanzim' , "Tanvir","shifar","maliha","siam"];

const [first , ...restName]  =  allFriends;

console.log(first , ...restName);


const complexObject = {
     name : "Tahsin",

     info : {
         address : "Patuakali"
     }
}

const {address} = complexObject.info;

console.log(address);

