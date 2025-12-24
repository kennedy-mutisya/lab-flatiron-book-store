// Bookstore object
const bookStore = {
  name: "Flatbooks Technical Books",
  books: [
    {
      id: 1,
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marjin Haverbeke",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 2,
      title: "JavaScript & JQuery: Interactive Front-End Web Development",
      author: "Jon Duckett",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg",
    },
    {
      id: 3,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 4,
      title: "JavaScript: The Definitive Guide",
      author: "David Flanagan",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg",
    },
    {
      id: 5,
      title: "You Don’t Know JS",
      author: "Kyle Simpson",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg",
    },
    {
      id: 6,
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg",
    },
  ],
};

// Step 1: Update header with bookstore name
const bookStoreTitle = document.getElementById("header");
bookStoreTitle.textContent = bookStore.name;

// Step 2: Select book list container
const bookList = document.getElementById("book-list");

// Step 3: Remove example book if exists
const exampleBook = document.getElementById("delete-this");
if (exampleBook) {
  exampleBook.remove();
}

// Step 4: Loop through books and create DOM elements
bookStore.books.forEach((book) => {
  // Create elements
  const bookContainer = document.createElement("li");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("p");
  const bookImage = document.createElement("img");

  // Set content
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.imageUrl;
  bookImage.alt = book.title;

  // Append elements to container
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  // Append container to book list
  bookList.appendChild(bookContainer);
});
console.log(bookStore.books);
console.log(bookTitle.textContent);
