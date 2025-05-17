function getBooks() {
  return JSON.parse(localStorage.getItem("libraryBooks") || "[]");
}
function renderBooks() {
  const books = getBooks();
  const container = document.getElementById("studentBooksContainer");
  container.innerHTML = "";
  if (books.length === 0) {
    container.innerHTML =
      '<p style="padding:1rem;font-size:1.1rem;color:#888;">No books found.</p>';
    return;
  }
  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
    const img = document.createElement("img");
    img.src = book.image;
    img.alt = book.title;
    img.className = "book-image";
    const h3 = document.createElement("h3");
    h3.className = "book-title";
    h3.textContent = book.title;
    bookCard.appendChild(img);
    bookCard.appendChild(h3);
    container.appendChild(bookCard);
  });
}
document.addEventListener("DOMContentLoaded", renderBooks);
