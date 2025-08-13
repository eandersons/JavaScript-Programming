const xhr = new XMLHttpRequest();
xhr.open("GET", "./News Articles.json", true);
xhr.responseType = "json";
xhr.onload = () => {
  xhr.response.articles.forEach((article) => {
    const newsArticle = document.createElement("article");
    const articles = document.getElementById("articles");
    const content = document.createElement("div");
    const date = document.createElement("p");
    const heading = document.createElement("h2");
    const labelsList = document.createElement("p");
    newsArticle.classList.add("article");
    heading.textContent = article.title;
    date.classList.add("date");
    date.textContent = article.date;
    content.classList.add("content");
    article.contentParagraphs.forEach((contentParagraph) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = contentParagraph;
      content.appendChild(paragraph);
    });
    labelsList.classList.add("labels");
    labelsList.textContent = "Labels: ";
    article.labels.forEach((label, index) => {
      const labelItem = document.createElement("span");
      labelItem.textContent = label;

      if (index !== 0) {
        labelsList.appendChild(document.createTextNode(" | "));
      }

      labelsList.appendChild(labelItem);
    });
    newsArticle.appendChild(heading);
    newsArticle.appendChild(date);
    newsArticle.appendChild(content);
    newsArticle.appendChild(labelsList);
    articles.appendChild(document.createElement("hr"));
    articles.appendChild(newsArticle);
  });
};
xhr.onerror = (error) => console.error(error);
xhr.send();
