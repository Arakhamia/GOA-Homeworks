// შექმენით მასივი, სახელწოდებით 'allValue' და გადაეცით შემდეგი მონაცემთა ტიპები: 1. integer   2. string   3. float   4. boolean   5. object, გადაცემულ ობიექტში უნდა იყვეს შეტანილი ინფორმაცია, 1. სახელი   2. გვარი   3. ასაკი   4. ქვეყანა    5. ქალაქი.
// შემდეგ უნდა ააწყოთ წინადადება თქვენს თავზე, 'ჩემი სახელია ... ჩემი გვარია ... ' და ა..შ  ----   (მასივში ჩაშენებული ობიექტიდან უნდა ააწყოთ წინადადება)
// დრო: 15წთ

let allValue = [1, 'string', 1.5, true, {
    name: "Andria",
    surname: "Arakhamia",
    age: 12,
    country: "Georgia",
    city: "Tbilisi"
}];

console.log(`My name is ${allValue[4].name} my surname is ${allValue[4].surname}, I am ${allValue[4].age} years old, I am from ${allValue[4].country}, I live in ${allValue[4].city}`);




