// Don't pass the value as function parameter u can us default value as like that 

// You can use if condition if(num == undefine) num = 0;

// You can use num = num || 0;

// You can also use default value in function parameter num1 , num 2 = 0


function add(num1 , num2 = 20){
   // num2 = num2 || 0;
    return num1+num2;
}

const total = add(15);

console.log(total);