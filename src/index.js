let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  fetchToys()
});

function fetchToys() {
  return fetch("http://localhost:3000/toys" )
  .then(resp => resp.json())
  .then(json => renderToys(json)); 
}

function renderToys(toys) {
  const div = document.querySelector("#dog-image-container");
  toys.forEach(toy => {
      console.log(toy)
  });
}
