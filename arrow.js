//First 

function double(num){
    return num*2;
}

// Second 
const doubleValue = function(num){
   return num*2;
}

// Third

const doubleIt = num => num*2


const value = (x,y) => x+y;

console.log(value(10,20));

// No parameter
const give = ()=>5

console.log(give());


//When i use multiple line 

const doMath = (x , y) =>{
    const sum = x + y;
    const diff = Math.abs(x - y);
    const result = sum * diff;

    return result ; 
}

console.log(doMath(10,15));


