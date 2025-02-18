// [ ] ქმნის ახალ მასივს
// new Array() ქმნის ახალ მასივს
// at() აბრუნებს მასივის ინდექსირებულ ელემენტს
// concat() აერთიანებს მასივებს და აბრუნებს მასივს გაერთიანებული მასივებით
// კონსტრუქტორი აბრუნებს ფუნქციას, რომელმაც შექმნა Array პროტოტიპი
// copyWithin() აკოპირებს მასივის ელემენტებს მასივის შიგნით, მითითებულ პოზიციებზე
// entries() აბრუნებს გასაღების/მნიშვნელობის წყვილს Array Iteration Object
// every() ამოწმებს მასივის ყველა ელემენტი გადის ტესტს
// fill() შეავსეთ ელემენტები მასივში სტატიკური მნიშვნელობით
// filter() ქმნის ახალ მასივს მასივის ყველა ელემენტთან, რომელიც გაივლის ტესტს
// find() აბრუნებს მასივის პირველი ელემენტის მნიშვნელობას, რომელიც გაივლის ტესტს
// findIndex() აბრუნებს მასივის პირველი ელემენტის ინდექსს, რომელიც გაივლის ტესტს
// findLast() აბრუნებს მასივის ბოლო ელემენტის მნიშვნელობას, რომელიც გაივლის ტესტს
// findLastIndex() აბრუნებს მასივის ბოლო ელემენტის ინდექსს, რომელიც გაივლის ტესტს
// flat() აერთიანებს ქვემასივის ელემენტებს
// flatMap() ასახავს მასივის ყველა ელემენტს და ქმნის ახალ ბრტყელ მასივს
// forEach() იძახებს ფუნქციას მასივის თითოეული ელემენტისთვის 
// from() ქმნის მასივს ობიექტიდან მოიცავს() შეამოწმეთ, შეიცავს თუ არა მასივი მითითებულ ელემენტს 
// indexOf() მოძებნეთ მასივი ელემენტისთვის და აბრუნებს მის პოზიციას 
// isArray() ამოწმებს არის თუ არა ობიექტი მასივი. 
// join() აერთიანებს მასივის ყველა ელემენტს სიმებიანი კლავიშებში 
// lastIndexOf() მოძებნეთ მასივი ელემენტისთვის, დაწყებული ბოლოდან და აბრუნებს მის პოზიციის სიგრძეს ადგენს ან აბრუნებს ელემენტების რაოდენობას მასივის 
// map() ქმნის ახალ მასივს მასივის თითოეული ელემენტისთვის ფუნქციის გამოძახების შედეგით 
// of() ქმნის მასივს რამდენიმე არგუმენტიდან 
// pop() შლის მასივის ბოლო ელემენტს და დაამატებს მასივის თვისებებს პროტოტიპისთვის. ახალი ელემენტები მასივის ბოლოს და აბრუნებს ახალს
// lengthreduse() მასივის მნიშვნელობების შემცირება ერთ მნიშვნელობამდე (მარცხნიდან მარჯვნივ) 
// reduceRight() მასივის მნიშვნელობების შემცირება ერთ მნიშვნელობამდე (მარჯვნიდან მარცხნივ) 
// reverse() აბრუნებს მასივის ელემენტების თანმიმდევრობას 
// shift() შლის მასივის პირველ ელემენტს, აბრუნებს მასივის ნაწილს და აბრუნებს მასივის ახალ ნაწილს. 
// array some() ამოწმებს მასივის რომელიმე ელემენტი გადის ტესტს 
// sort() ახარისხებს მასივის ელემენტებს 
// splice() ამატებს ან შლის მასივის ელემენტებს 
// Reversed() აბრუნებს მასივის ელემენტების მიმდევრობას (ახალ მასივზე) 
// toSorted() ახარისხებს მასივის ელემენტებს (ახალ მასივში) 
// toSpliced() მასივის () მასივის () ახალი მასივის () კონვერტაციის ელემენტების დამატება მასივი სტრიქონში და აბრუნებს შედეგს 
// unshift() ამატებს ახალ ელემენტებს მასივის დასაწყისში და აბრუნებს ახალ სიგრძეს 
// valueOf() აბრუნებს მასივის პრიმიტიულ მნიშვნელობას 
// with() აბრუნებს ახალ მასივს განახლებული ელემენტებით

// JavaScript Array Methods Task
// Objective: To practice using the array methods: concat, copyWithin, fill, pop, shift, and unshift.
// Instructions:
// Create two arrays, array1 and array2, with the following elements:
// Concatenate array1 and array2 into a new array called concatArray.
// Use the copyWithin method to copy the first two elements of concatArray to the end of the array.
// Use the fill method to replace the last three elements of concatArray with the number 0.
// Remove the last element from concatArray using the pop method and store it in a variable lastElement.
// Remove the first element from concatArray using the shift method and store it in a variable firstElement.
// Add the elements 10 and 20 to the beginning of concatArray using the unshift method.
// Challenge:
// Write a function called modifyArray that takes an array as input and performs all the above steps on it.

array1 = [1, 2, 3, 4, 5];
array2 = [6, 7, 8, 9, 10];

// let concatArray = array1.concat(array2);
// concatArray.copyWithin(5, 0, 2);
// concatArray.fill(0, 7, 10);
// let lastElement = concatArray.pop();
// let firstElement = concatArray.shift();
// concatArray.unshift(10, 20);

function modifyArray(array1, array2) {
    let concatArray = array1.concat(array2);

    concatArray.copyWithin(5, 0, 2);

    concatArray.fill(0, 7, 10);

    let lastElement = concatArray.pop();

    let firstElement = concatArray.shift();

    concatArray.unshift(10, 20);

    return concatArray;
}

