// exercise 1
printNumbersTill = 20;
for (let i = 0; i <= printNumbersTill; i++) {
console.log (i);
}

printNumbersTill2 = 15;
for (let x = 0; x <= printNumbersTill2; x++) {
console.log (x);
}

// exercise 2
let getGreetingTo = name => {
    console.log(`Hello ${name}`); 
};
getGreetingTo("Mark");
getGreetingTo("Cristine");

// or
let greet = ["Marc", "Cristine"];
for (let x = 0; x < greet.length; x++) {
console.log(`Hello `+ greet[x]);
}



// exercise 1 (2)
let array = [0,3,6,7,9];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// exercise 2 (2)
let array = [10,20,30,50,12];
array.forEach((number)=>{
    console.log(number);
});