let book = prompt("Tên sách");
let number = prompt("Số sách");

let nameBook = book.trim().toUpperCase();

let idBook = `Lib - ${nameBook} - ${number}`;

console.log("Tên sách gốc:"+ " "+ nameBook);
console.log("Mã sách" + " "+ idBook);