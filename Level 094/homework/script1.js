// : დაწერეთ პროგრამა, რომელიც ანიჭებს მომხმარებლის პირად მონაცემებს და ამოწმებს, თუ რამდენად შეესაბამებიან ისინი გარკვეულ კრიტერიუმებს.
// საფეხურები:
// პროგრამამ უნდა მიიღოს შემდეგი მონაცემები მომხმარებლისგან:

 
// სახელი
// ასაკი
// ყოველდღიური სირბილის რაოდენობა (თუ რამდენი კილომეტრი ირბინა(კილომეტრებში))
// სავარჯიშო დღეების რაოდენობა კვირაში (0-დან 7-მდე)

// მონაცემების მიღების შემდეგ, პროგრამა უნდა შეასრულოს შემდეგი შემოწმებები:
// თუ მომხმარებლის ასაკი ნაკლებია 16-ზე ან მეტი 60-ზე, პროგრამამ უნდა დაბეჭდოს: "გთხოვთ, გაიაროთ ექიმის კონსულტაცია".
// პროგრამამ უნდა გამოიანგარიშოს ყოველკვირეული გაშვების საერთო მანძილი (კმ-ში).
// თუ ყოველკვირეული გაშვების საერთო მანძილი ნაკლებია 20 კმ-ზე, პროგრამამ უნდა დაბეჭდოს: "შესაძლებელია მეტი ვარჯიში".

function weeklyDistance(name, age, dailyDistance, days) {
    if (age < 16 || age >= 60) {
        console.log("გთხოვთ, გაიაროთ ექიმის კონსულტაცია");
    }
    let totalDistance = dailyDistance * days;
    if (totalDistance < 20) {
        console.log("შესაძლებელია მეტი ვარჯიში");
    }
}