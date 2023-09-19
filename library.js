// Creating a constructor function

function Book(author, title, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
}

// Intiatilizing an empty book array
let library = [];

// Write a function that loops through the array and displays each book on the page
function displayBooks() {
    let bookContainer = document.getElementById("book-container");
    // Clear the container before dispalaying the books.
    bookContainer.innerHTML = "";

    // Loop through thr library array and create HTML elements for each book
    library.forEach(function (book, index) {
        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.style.display = "block";

        // Create HTML elements for book details

        let titleElement = document.createElement("h2");
        titleElement.textContent = book.title;

        let authorElement = document.createElement("p");
        authorElement.textContent = book.author;

        let pagesElement = document.createElement("p");
        pagesElement.textContent = book.pages;

        let readElement = document.createElement("p");
        readElement.textContent = "Read: " + " " + (book.read ? "Yes" : "No");

        // Create a button to remove the book and another to toggle the read status

        let inDiv = document.createElement("div");
        inDiv.classList.add("div-buttons");

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

        inDiv.appendChild(toggleButton);
        inDiv.appendChild(removeButton);

        // Append all the elements to the book
        bookDiv.appendChild(titleElement);
        bookDiv.appendChild(authorElement);
        bookDiv.appendChild(pagesElement);
        bookDiv.appendChild(readElement);
        bookDiv.appendChild(inDiv);

        // Append the book div to the book container
        bookContainer.appendChild(bookDiv);
    });
}

let newbook = document.getElementById("new-book");
let formconatiner = document.getElementById("form-container");

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

    let newBook = new Book(author, title, pages, read);
    library.push(newBook);

    authorInput.value = "";
    titleInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;

    displayBooks();

    let formContainer = document.getElementById("form-container");
    formContainer.style.display = "none";
}

let added = document.getElementById("add");
added.addEventListener("click", () => {
    addBook(event);
});

function removeBook(index) {
    library.splice(index, 1);
    displayBooks();
}

function tooggleReadStatus(index) {
    library[index].read = !library[index].read;
    displayBooks();
}
