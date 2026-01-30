let nameBook = prompt("Mời nhập tên sách");

let originalName = nameBook ; 
let norName = nameBook.toLowerCase();
let upperName = nameBook.toUpperCase();

console.log("Tên nhập từ bàn phím" + ":" + nameBook);
console.log("Tên gốc của sách" + ": " + originalName);
console.log("Tên viết thường của sách" + ": " + norName);
console.log("Tên viết hoa của sách" + ": " + upperName);