// hasOddNumber accepts an array and retunrs true if the array contains at least one odd number, otherwise returns false.
function hasOddNumber(arr) {
    return arr.some(function(val){
        return val % 2 !== 0; // if the value is a coefficient of 2, it returns false
    })
}
console.log(hasOddNumber([1,2,2,2,2,2,4])); // true - has an odd number
console.log(hasOddNumber([2,2,2,2,2,4])); // false - does not have an odd number


// hasAZero accepts a number and returns true if that number contains at least one zero.

function hasAZero(num){
    return num.toString().split('').some(function(val){ // Have to convert number to string. Split puts all numbers together. Some will look for all possible inputs and return true if at least one of them fits parameters.
        return val === '0'; // Looking forward if the number contains absolutely a 0
    })
}
console.log(hasAZero(33321232131012)); // true - has a zero
console.log(hasAZero(1212121)); // false - does not have a zero


// hasOnlyOddNumber accepts an array and returns true if every single number in the array is odd. If any are not odd, the function returns false.
function hasOnlyOddNumbers(arr){
        return arr.every(function(val){ // .every is used to check if every single number in the array contains parameters. If they all contain parameters, returns true, else false.
            return val % 2 !==0; // similar to hasOddNumber, we are checking not to include number if it is divisible by zero
        })
}
console.log(hasOnlyOddNumbers([1,3,5,7])); // true - every number is odd
console.log(hasOnlyOddNumbers([1,2,3,5,7])); // false - evern though it is mostly odd numbers, 2 is even so it returns false.



// hasNoDuplicates accepts an array and returns true if there are no duplicate values. If duplicate, returns false.
function hasNoDuplicates(arr){
    return arr.every(function(val){ //use every to only return true if all values hit parameters
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}
console.log(hasNoDuplicates([1,2,3,1])); // false - duplicate 1
console.log(hasNoDuplicates([1,2,3])); // true - no duplicates



// hasCertainKey accepts an array of objects and a key, and returns true if every single object in the array contains that key, else false.
const manyWords = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

function hasCertainKey(manyWords, key){
    return manyWords.every(function(val){
        return key in val
    })
}
  console.log(hasCertainKey(manyWords,'first')); // true - each entry contains first
  console.log(hasCertainKey(manyWords,'isCatOwner')); // false - not each entry contains isCatOwner



// hasCertainValue - accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key, else false
const moreWords = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

function hasCertainValue(moreWords, key, searchValue){
    return moreWords.every(function(val){
        return val[key] === searchValue;
    })
}
console.log(hasCertainValue(moreWords,'title','Instructor')); // true - all have instructor
console.log(hasCertainValue(moreWords,'first','Elie')); // false - not all have elie