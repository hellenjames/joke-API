const container = document.querySelector(".categories");
const empty = document.querySelector(".empty ul");
const categoryJoke=document.querySelector(".empty h4")
const button = document.querySelector("#btn");
const content = document.querySelector("#jok");
console.log(button);
function fetchRandomjoke() {
  const url = "https://api.chucknorris.io/jokes/random";
  fetch(url)
    .then((res) => res.json())
    .then((joke) => {
      content.textContent = joke.value;
      console.log(joke);
    });
}

fetchRandomjoke();
button.addEventListener("click", function (e) {
  fetchRandomjoke();
});

function fetchCategoriesedJoke() {
  const url = "https://api.chucknorris.io/jokes/categories";
  fetch(url)
    .then((res) => res.json())
    .then((categories) => {
      categories.forEach((category) => {
        console.log(category);
        const items = document.createElement("li");
        items.classList.add("category");
        items.textContent = category;

        empty.append(items);
      });
    });
}
fetchCategoriesedJoke();

function fetchCategoryJoke(category) {
  const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  fetch(url)
    .then((res) => res.json())
    .then((category) => {
      categoryJoke.textContent =category.value
    });
}

empty.addEventListener("click", function (e) {
  if (e.target.classList.contains("category")) {
    fetchCategoryJoke(e.target.textContent)
  }
});
