const main = document.getElementById("articles-container");

let data;
let dataLength;

async function getdata() {
  const res = await fetch("https://newsapi.org/v2/everything?q=technology&apiKey=4a175007142a447783c139567cd092b9");
  const result = await res.json();
  data = result.articles;
  dataLength=data.length;
  console.log("\n:",data);

  renderUI();
}

getdata();

function renderUI() {

  for (let i = 4; i <20; i++) {
    const article = document.createElement('article');
    article.innerHTML = `
                        <img src=${data[i].urlToImage} class="artical-img">
                        <div class="article-content">
                          <h2> ${data[i].title}</h2>
                          <p>${data[i].description}</p>
                          <a href="${data[i].url}">Read more...</a>
                        </div>
                          `;
    main.appendChild(article);
  }

}

// try latest
const main2 = document.getElementById("artical-latest");

let data2;
let dataLength2;

async function getdata2() {
  const res2 = await fetch("https://newsapi.org/v2/everything?q=technology&apiKey=4a175007142a447783c139567cd092b9");
  const result2 = await res2.json();
  data2 = result2.articles;
  dataLength2 = data2.length;
  console.log("\n:", data2);

  renderUI2();
}

getdata2();
renderUI2();
function renderUI2() {

  for (let i = 0; i <22; i++) {
  const section = document.createElement('section');
  section.innerHTML = `
    <a href="${data[i].url}"><h5>${data[i].title}</h2></a>
    <p>- ${data[i].source.name}</p>
    `;
    main2.appendChild(section);
  }

}
