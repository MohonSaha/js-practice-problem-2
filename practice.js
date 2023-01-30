
// Problem-1: Convert inch to feet 

// function inchToFeet(inches){
//     const feet = inches / 12;
//     return feet;
// }

// const result = inchToFeet(48).toFixed(2);
// console.log(parseFloat(result));


// Problem-2: Check a number odd or even

// function oddEven(num){
//     const remainder = num % 2;
//     if(remainder === 0){
//         console.log("a Even Number");
//     }
//     else{
//         console.log("O odd");
//     }
// }

// oddEven(404);


// Problem-3: Check a number leap-year or not



// Problem-4: Return the sum of odd number from an array

// function getSum(numbers){
//     let sum = 0;
// for(num in numbers){
//     const arrayNum = numbers[num];
//     const odd = arrayNum % 2;   
//     if(odd !== 0){      
//         sum += arrayNum;
//     }
// }
// console.log(sum);
// return sum;

// }
// const myNumber = [12, 1, 3, 78, 32, 5, 7];
// getSum(myNumber);


// Problem-4 (Method-2): 

// function getSum(numbers){
//     const oddNumbers = [];
// for(num in numbers){
//     let arrayNum = numbers[num];
//     const odd = arrayNum % 2;   
//     if(odd !== 0){      
//         oddNumbers.push(arrayNum);
//     }
// }
// return oddNumbers;
// }


// function oddNumberSum(OddNumbers){
//     let sum = 0;
//  for(let i =0; i<oddNumbers.length; i++){
//     let arrayNum = OddNumbers[i];
//     sum += arrayNum;
//  }
//  return sum;
// }


// const myNumber = [12, 1, 3, 78, 32, 5, 7];
// const oddNumbers = getSum(myNumber);
// const sumOddNumbers = oddNumberSum(oddNumbers);
// console.log(sumOddNumbers);



// Problem-5: Find the factorial of a number

// function factorial(num){
//     let fact = 1;
//     for(let i = 1; i <= num; i++){
//         fact *= i;
//     }
//     return fact;
// }

// const result = factorial(4);
// console.log(result);



// Problem-5: Find the factorial of a number in reverse way

// function factorial(num){
//     let fact = 1;
//     for(let i = num; i >= 1; i--){
//         fact *= i;
//         console.log(i);
//     }
//     return fact;
// }

// const result = factorial(4);
// console.log(result);








