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

const searchInput = document.querySelector(".search-input");
const bookCards = document.querySelectorAll(".book-card");

searchInput.addEventListener("input", function () {
  const search = searchInput.value.toLowerCase();

  for (let i = 0; i < bookCards.length; i++) {
    const bookTitle = bookCards[i]
      .querySelector(".book-title")
      .textContent.toLowerCase();

    if (bookTitle.includes(search) || search === "") {
      bookCards[i].style.display = "block";
    } else {
      bookCards[i].style.display = "none";
    }
  }
});
