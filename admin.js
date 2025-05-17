function getBooks() {
  return JSON.parse(localStorage.getItem("libraryBooks") || "[]");
}
function saveBooks(books) {
  localStorage.setItem("libraryBooks", JSON.stringify(books));
}
function renderBooks() {
  const books = getBooks();
  const container = document.getElementById("adminBooksContainer");
  container.innerHTML = "";
  if (books.length === 0) {
    container.innerHTML =
      '<p style="padding:1rem;font-size:1.1rem;color:#888;">No books found. Add some!</p>';
    return;
  }
  books.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-book";
    deleteBtn.title = "Remove Book";
    deleteBtn.innerHTML = "&times;";
    deleteBtn.addEventListener("click", () => {
      removeBook(index);
    });
    const img = document.createElement("img");
    img.src = book.image;
    img.alt = book.title;
    img.className = "book-image";
    const h3 = document.createElement("h3");
    h3.className = "book-title";
    h3.textContent = book.title;
    bookCard.appendChild(deleteBtn);
    bookCard.appendChild(img);
    bookCard.appendChild(h3);
    container.appendChild(bookCard);
  });
}
function addBook(title, image) {
  const books = getBooks();
  books.push({ title, image });
  saveBooks(books);
  renderBooks();
}
function removeBook(index) {
  const books = getBooks();
  books.splice(index, 1);
  saveBooks(books);
  renderBooks();
}
document.addEventListener("DOMContentLoaded", function () {
  renderBooks();
  const addBookForm = document.getElementById("addBookForm");
  addBookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("bookTitle").value;
    const image = document.getElementById("bookImage").value;
    addBook(title, image);
    addBookForm.reset();
  });
});
