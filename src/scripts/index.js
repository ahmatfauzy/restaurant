import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

import("../public/data/DATA.json").then(({ default: jsonData }) => {
  console.log(jsonData);
  let datas = jsonData["restaurants"];
  let dataList = "";
  datas.forEach(function (data) {
    dataList += `
    <article class="list-item">
        <img class="list-item_thumbnail" src="${
          data.pictureId
        }" alt="Foto restoran ${data.name}">
        <div class="list-item_content">
            <p class="list-item_city">${data.city}</p>
            <p class="list-item_rating">Rating: ${data.rating} ⭐</p>
            <h1 class="list-item_title"><a href="#" tabindex="0">${
              data.name
            }</a></h1>
            <p class="list-item_description">${data.description.slice(
              0,
              100
            )}...</p>
        </div>
    </article>
`;
  });
  document.querySelector("#card").innerHTML = dataList;
});
