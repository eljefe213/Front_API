const foodDiv = document.querySelector(".food");
const url = "http://localhost:1337";
let allFood = [];
init();

function init() {
  getFood();
}

function getFood() {
  fetch(`${url}/api/foood-items`)
    .then((data) => data.json())
    .then((result) => {
      allFood = result;
      console.log("allFood", allFood);
    })
    .catch((err) => {
      console.error(err);
    });
}
