// ტემპერატურის სტანდარტის შემოწმება
// მომხმარებელი შეჰყავს ტემპერატურა ცელსიუსში და უნდა განსაზღვროს, თუ როგორი ტემპერატურაა, ცივი, ზომიერი თუ ცხელი.

let temperature = Number(prompt("Enter the temperature: "))

if(temperature < 15){
    alert("Cold")
} else if(temperature < 25){
    alert("Normal")
} else{
    alert("Hot")
}