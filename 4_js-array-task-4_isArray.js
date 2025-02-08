let array1 = [1, 2, 3, 4, 5];
let array2 = '[]';
//1.created different variables, each containing either an array or non array value.

console.log(Array.isArray(array1));

if (!Array.isArray(array1)) {
  console.log('I will be an array soon!')
} else {
  console.log('Hi, I am an array!')
}

console.log(Array.isArray(array2));

if (Array.isArray(array2)) {
  console.log('Hi, I am an array!');
} else {
  console.log('I will be an array soon!')
}

// 2 and 3. used isArray to check if each variable is an array an printed a message to the console indicating whether each variable is an array or not.