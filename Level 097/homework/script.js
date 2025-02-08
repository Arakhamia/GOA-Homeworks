// დავალება: ბიბლიოთეკის წიგნის ობიექტი
// შექმენით book ობიექტი, რომელსაც აქვს შემდეგი თვისებები და მეთოდი:

// title: წიგნის სათაური.

// author: წიგნის ავტორი.

// pages: გვერდების რაოდენობა.

// publishYear: გამოქვეყნების წელი.

// getSummary: მეთოდი, რომელიც დააბრუნებს წიგნის შეჯამებას ტექსტის სახით.


let book = {
    title: "The Lord of the Rings",
    year: 1954,
    pages: 1178,
    getSummary: function(){
        return `${this.title} was written by J.R.R. Tolkien in ${this.year}. It has ${this.pages} pages.`
    }
}