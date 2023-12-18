// constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value; 
        this.author = form.author.value; 
        this.pages = form.pages.value + 'pg'; 
        this.read = form.read.checked; 
    }
}

let library = [];
let newBook;

function addBookToLibrary(book) {
  library.push(newBook);
  displayBooks();
}

// function to remove a book from the library array
function removeBookFromLibrary(index) {
  library.splice(index, 1);
  displayBooks();
}

Book.prototype.toggleReadStatus = function() {
  this.read = !this.read;
  displayBooks();
};

// Function to display books on the page
function displayBooks() {
  // Get the element where you want to display the books
  var displayElement = document.getElementById("book-display");

  // Clear the existing content
  displayElement.innerHTML = "";

  // Loop through the library array
  for (var i = 0; i < library.length; i++) {
      // Create a table row for each book
      var row = document.createElement("tr");

      // Create table cells for each property (title, author, pages, read)
      var titleCell = document.createElement("td");
      var authorCell = document.createElement("td");
      var pagesCell = document.createElement("td");
      var readCell = document.createElement("td");
      var removeCell = document.createElement("td");
      var toggleReadCell = document.createElement("td");

      // Set the text content of each cell
      titleCell.textContent = library[i].title;
      authorCell.textContent = library[i].author;
      pagesCell.textContent = library[i].pages;
      readCell.textContent = library[i].read ? "Yes" : "No";

      var removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.dataset.index = i;
      removeButton.addEventListener("click", function() {
        removeBookFromLibrary(parseInt(this.dataset.index));
      });
      
      var toggleReadButton = document.createElement("button");
      toggleReadButton.textContent = "Reading Status";
      toggleReadButton.dataset.index = i;
      toggleReadButton.addEventListener("click", function() {
        library[parseInt(this.dataset.index)].toggleReadStatus();
      });
      
      // Append cells to the row
      row.appendChild(titleCell);
      row.appendChild(authorCell);
      row.appendChild(pagesCell);
      row.appendChild(readCell);
      removeCell.appendChild(removeButton);
      toggleReadCell.appendChild(toggleReadButton);
      row.appendChild(removeCell);
      row.appendChild(toggleReadCell);

      // Append the row to the display element
      displayElement.appendChild(row);
  }
}

// Get the button, dialog, and form elements
var newBookButton = document.getElementById("new-book-button");
var newBookDialog = document.getElementById("new-book-dialog");
var newBookForm = document.getElementById("new-book-form");

// Event listener for the "NEW BOOK" button to open the dialog
newBookButton.addEventListener("click", function() {
    // Reset the form when the button is clicked
    newBookForm.reset();
    newBookDialog.showModal();
});

// Event listener for the form submission
newBookForm.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get user input from the form
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var pages = document.getElementById("pages").value;
  var read = document.getElementById("read").checked;

  // Create a new Book object with the user input
  var newBook = new Book(title, author, pages, read);

  // Add the new book object to the library array
  addBookToLibrary(newBook);

  // Close the dialog after adding the book
  newBookDialog.close();
});

var library = [];

// Display books on the page
displayBooks();


















/*
function Book(title,author,page,readStatus) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.readStatus = readStatus;
}

Book.prototype.toString = function() {
    return this.title + 'by' + this.author + ', is ' + this.page + ' long ' + this.readStatus;
}

Book.prototype.print = function() {
    console.log(this.toString());
}

var theHobbit = new Book ('The Hobbit', 'J.R.R. Tolkien', 295, 'did not read yet.');

theHobbit.print();

*/
