// Task 1 : JavaScript Array Methods Task: Comprehensive Array Manipulation

// Objective: To practice using a variety of array methods: concat, copyWithin, fill, pop, shift, unshift, join, slice, splice, flat, includes, indexOf, and lastIndexOf.
// Instructions:
// Create three arrays: arr1, arr2, and nestedArray with the following elements:
// Concatenate arr1 and arr2 into a new array called combinedArray.
// Use the copyWithin method to copy the first three elements of combinedArray to the positions starting from index 5.
// 4.Use the fill method to replace elements from index 6 to the end with the number 0.
// Remove the last element from combinedArray using the pop method.
// Remove the first element from combinedArray using the shift method.
// Add the elements 100 and 200 to the beginning of combinedArray using the unshift method.
// Use the splice method to remove the elements at indices 2 and 3, and replace them with the elements [x, y, z].
// Use the slice method to create a new array slicedArray that contains the last five elements of combinedArray.
// Use the join method to create a string from slicedArray, with elements separated by a comma ,.
// Use the flat method to flatten nestedArray into a single-level array and store it in flatArray.
// Check if the element 8 is included in flatArray using the includes method.
// Find the index of the element 9 in flatArray using the indexOf method.
// Find the last index of the element 7 in flatArray using the lastIndexOf method.

let arr1 = [1, 2, 3];

let arr2 = [4, 5, 6];

let nestedArray = [[7, 8, 9], [10, 11, 12]];

let combinedArray = arr1.concat(arr2);

combinedArray.copyWithin(5, 0, 3);

combinedArray.fill(0, 6);

combinedArray.pop();

combinedArray.shift();

combinedArray.unshift(100, 200);

combinedArray.splice(2, 2, 'x', 'y', 'z');

let slicedArray = combinedArray.slice(-5);

let joinedArray = slicedArray.join(',');

let flatArray = nestedArray.flat();

let checkElement = flatArray.includes(8);

let findIndexOfElement = flatArray.indexOf(9);

let findLastIndexOfElement = flatArray.lastIndexOf(7);

console.log(combinedArray);
console.log(joinedArray);
console.log(checkElement);
console.log(findIndexOfElement);
console.log(findLastIndexOfElement);
console.log(flatArray);
console.log(slicedArray);
console.log(joinedArray);
console.log(flatArray);