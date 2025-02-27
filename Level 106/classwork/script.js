// სიყვარულის კალკულატორი
// შექმენით ფუნქცია, რომელიც შემოიტანს ორი ადამიანის სახელს და შემდეგ alert ის სახით გამოიტანს მათ სიყვარულის პროცენტს - ტექსტი უნდა გამოვიდეს შემდეგნაირად - '{პირველი სახელი} და {მეორე სახელი}, თქვენი სიყვარულის პროცენტია {პროცენტული მაჩვენებელი}'

function loveCalculator() {
    x = prompt('Enter the first name');
    y = prompt('Enter the second name');
    let love = Math.floor(Math.random() * 100);
    alert(`${x} & ${y}, your love percentage is ${love}%`);
}

loveCalculator();