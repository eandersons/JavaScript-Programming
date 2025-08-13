let xhr = new XMLHttpRequest();
xhr.open("GET", "./Health Articles.json", true);
xhr.responseType = "json";
xhr.onload = () => {
  xhr.response.articles.forEach((article) => {
    let article = document.createElement("article");
    let benefitsHeading = document.createElement("h3");
    let benefitsList = document.createElement("ul");
    let description = document.createElement("p");
    let heading = document.createElement("h2");
    let waysHeading = document.createElement("h3");
    let waysList = document.createElement("ul");
    article.classList.add("article");
    heading.textContent = article.title;
    description.textContent = article.description;
    waysHeading.textContent = "Ways to achieve";
    article.ways_to_achieve.forEach((way) => {
      let listItem = document.createElement("li");
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });
    benefitsHeading.textContent = "Benefits";
    article.benefits.forEach((benefit) => {
      let listItem = document.createElement("li");
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });
    article.appendChild(heading);
    article.appendChild(description);
    article.appendChild(waysHeading);
    article.appendChild(waysList);
    article.appendChild(benefitsHeading);
    article.appendChild(benefitsList);
    document.getElementById("articles").appendChild(article);
  });
};
xhr.onerror = (error) => console.error(error);
xhr.send();
