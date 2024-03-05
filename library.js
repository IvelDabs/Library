// Creating a constructor function
function Book(title, author, pages,readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus
}

Book.prototype.displayDetails = function() {
    return `The ${this.title}, by ${this.author}, with ${this.pages}pages, read status: ${this.readStatus}`
}


//  To Manually Log and display Book details on the page

// function addBookToLibrary() {
//     let title = prompt('What is the book title? ')
//     let author = prompt('Who is the author? ')
//     let pages = prompt('How many pages are there? ')
//     let read = prompt('Yes/No, have you read the book? ')
//     let newBook = new Book(title, author, pages, read)
//     myLibrary.push(newBook)
//     return myLibrary
// }
// let newBook = new Book('Hobbit', 'Daberechi', 295, 'Yes')
// myLibrary.push(newBook)

// Write a function that loops through the array and displays each book on the page

// Intiatilizing an empty book array
const myLibrary = []


function removeBook(index) {
    myLibrary.splice(index, 1);
    displayDetails();
}

function tooggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayDetails();
}


function displayBook(arr) {
    let bookContainer = document.getElementById('book-container')

    arr.forEach((book, index) => {
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.style.display = 'block';

        let bookIndex = document.createElement('h3');
        bookIndex.textContent = 'Book: ' + (index + 1);

        let titleElement = document.createElement('h1');
        titleElement.textContent = 'Title: ' + book.title;
        
        let authorElement = document.createElement('p');
        authorElement.textContent = 'Author: ' + book.author;

        let pagesElement = document.createElement('p');
        pagesElement.textContent = 'Pages: ' + book.pages;

        let readStatusElement = document.createElement('p');
        readStatusElement.textContent = 'Read: ' + (book.readStatus ? 'Yes' : 'No'); 

        let underScore = document.createElement('p');
        underScore.textContent = "------------------------------";


        // Create a button to remove the book and another to toggle the read status
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove");
        removeButton.addEventListener("click", () => {
            removeBook(index);
        });

        let toggleButton = document.createElement("button");
        toggleButton.textContent = "Toggle Read";
        toggleButton.classList.add("toggle");
        toggleButton.addEventListener("click", () => {
            tooggleReadStatus(index);
        });

        let inDiv = document.createElement("div");
        inDiv.classList.add("div-buttons");

        inDiv.appendChild(toggleButton);
        inDiv.appendChild(removeButton);

        // Append all the elements to the book div
        bookDiv.appendChild(bookIndex);
        bookDiv.appendChild(titleElement);
        bookDiv.appendChild(authorElement);
        bookDiv.appendChild(pagesElement);
        bookDiv.appendChild(readStatusElement);
        bookDiv.appendChild(underScore);

        // Append the book div to the book container
        bookContainer.appendChild(bookDiv);
    });
}

let formconatiner = document.getElementById("form-container");
let newbook = document.getElementById("new-book");
newbook.addEventListener("click", () => {
    formconatiner.style.display = "block";
});

function addBook(event) {
    event.preventDefault();

    let authorInput = document.getElementById("author");
    let titleInput = document.getElementById("title");
    let readInput = document.getElementById("read");
    let pagesInput = document.getElementById("pages");

    let author = authorInput.value;
    let title = titleInput.value;
    let read = readInput.checked;
    let pages = pagesInput.value;

    // let author = document.getElementById("author");
    // let title = document.getElementById("title");
    // let read = document.getElementById("read");
    // let pages = document.getElementById("pages");

    authorInput.value = "";
    titleInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;

    let newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);


    let formContainer = document.getElementById("form-container");
    formContainer.style.display = "none";


    displayDetails();
}

let add = document.getElementById("add");
add.addEventListener("click", () => {
    addBook(event);
});

