function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  // Returning the result of the fetch operation ensures that fetchBooks returns a promise
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then(function (data) {
      renderBooks(data);
    });
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
