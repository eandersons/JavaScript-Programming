class BookInputs {
  static name = () => document.getElementById("bookName");
  static author = () => document.getElementById("authorName");
  static description = () => document.getElementById("bookDescription");
  static pages = () => document.getElementById("pages");
}

let books = [];

function addBook() {
  const bookName = BookInputs.name().value;
  const authorName = BookInputs.author().value;
  const description = BookInputs.description().value;
  const pages = parseInt(BookInputs.pages().value);

  if (bookName && authorName && description && !isNaN(pages)) {
    books.push({
      name: bookName,
      author: authorName,
      description: description,
      pages: pages,
    });
    showBooks();
    clearInputs();
  } else {
    alert("Please fill in all the fields correctly!");
  }
}

function clearInputs() {
  BookInputs.name().value = "";
  BookInputs.author().value = "";
  BookInputs.description().value = "";
  BookInputs.pages().value = "";
}

function editBook(index) {
  const book = books[index];
  BookInputs.name().value = book.name;
  BookInputs.author().value = book.author;
  BookInputs.description().value = book.description;
  BookInputs.pages().value = book.pages;
  removeBook(index);
  showBooks();
}

function removeBook(index) {
  books.splice(index, 1);
}

function showBooks() {
  document.getElementById("books").innerHTML = books
    .map(
      (book, index) => `
        <h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name:</strong> ${book.name}</p>
        <p><strong>Author Name:</strong> ${book.author}</p>
        <p><strong>Description:</strong> ${book.description}</p>
        <p><strong>No. of Pages:</strong> ${book.pages}</p>
        <button onclick="editBook(${index})">Edit</button>
      `,
    )
    .join("\n");
}
