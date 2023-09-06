// // class Person {
// //   constructor(name) {
// //     this.name = name;
// //     this.introduceSelf = function () {
// //       return `Hi and welcome!, my name is ${this.name}`;
// //     };
// //   }
// // }

// // function Person(name, age, address, email) {
// //   this.name = name;
// //   this.age = age;
// //   this.address = address;
// //   this.email = email;
// //   this.introduceSelf = function () {
// //     return `Hi and welcome!, my name is ${this.name} and I am ${this.age}, I live @ ${this.address}, I can be reached at "${this.email}"`;
// //   };
// // }

// // const dabs = new Person(
// //   "Dabs",
// //   27,
// //   "8 Itelorun close Ikeja",
// //   "daberelevi@gmail.com"
// // );

const myLibrary = [];

function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function addBookToLibrary() {
  const userInput = prompt("What book would you love to add to your library? ");
  myLibrary.push(userInput);
}

// function displayLibrary() {
//   const bookContainer = document.getElementById("bookContainer");
//   bookContainer.innerHTML = ""; // Clear the container before displaying books

//   myLibrary.forEach(function (book) {
//     const bookCard = document.createElement("div");
//     bookCard.classList.add("book-card");

//     const title = document.createElement("h2");
//     title.textContent = book.title;

//     const author = document.createElement("p");
//     author.textContent = "Author: " + book.author;

//     const pages = document.createElement("p");
//     pages.textContent = "Pages: " + book.pages;

//     const read = document.createElement("p");
//     read.textContent = "Read: " + book.read;

//     bookCard.appendChild(title);
//     bookCard.appendChild(author);
//     bookCard.appendChild(pages);
//     bookCard.appendChild(read);

//     bookContainer.appendChild(bookCard);
//   });
// }

function displayLibrary() {
  const bookContainer = document.getElementById("bookContainer");
  bookContainer.innerHTML = ""; // Clears the container before displaying the books

  myLibrary.forEach(function (book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card"); // You can define a CSS class for styling the book cards

    const bookInfo = document.createElement("p");
    bookInfo.textContent = book.info();

    bookCard.appendChild(bookInfo);
    bookContainer.appendChild(bookCard);
  });
}

const openFormButton = document.getElementById("openFormButton");
const formPopup = document.getElementById("formPopup");

openFormButton.addEventListener("click", function () {
  formPopup.style.display = "block";
});

formPopup.addEventListener("submit", function (event) {
  event.preventDefault();
  // Process the form data here
  // You can access form fields using document.getElementById() or other methods
  // For example:
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  console.log("Name:", name);
  console.log("Email:", email);
  // Close the form popup
  formPopup.style.display = "none";
});
