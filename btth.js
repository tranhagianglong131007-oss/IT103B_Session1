let bookName = prompt("Nhập tên sách:");
let authorName = prompt("Nhập tên tác giả:");
let publishYear = prompt("Nhập năm xuất bản:");
let price = prompt("Nhập giá tiền một cuốn:");
let quantity = prompt("Nhập số lượng nhập kho:");

bookName = bookName.trim().toUpperCase();
authorName = authorName.toUpperCase();

let authorCode = authorName.substring(0, 3);
let randomNumber = Math.floor(Math.random() * 1000) + 1;
let bookId = authorCode + publishYear + "-" + randomNumber;

let currentYear = 2026;
let bookAge = currentYear - publishYear;

let totalValue = price * quantity;

let shelfNumber = Math.floor(Math.random() * 10) + 1;

console.log(`--- PHIẾU NHẬP KHO ---

Mã sách: ${bookId}

Tên sách: ${bookName}

Tác giả: ${authorName}

Năm xuất bản: ${publishYear}

Tuổi sách: ${bookAge} năm

Tổng giá trị: ${totalValue} VNĐ

Ngăn kệ gợi ý: Kệ số ${shelfNumber}
`);
