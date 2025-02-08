// შექმენით ფუნქცია, რომელიც შეამოწმებს რიცხვს არის თუ არა დადებითი, უარყოფითი ან ნულის ტოლი.

function num(num1){
    if(num1 == 0){
        alert(`${num1} is equl to zero.`)
    } else if(num1 > 0){
        alert(`${num1} is positive.`)
    } else{
        alert(`${num1} is negative.`)
    }
}

num(10)