// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    const cardInfo = Object.values(response.data.articles);
    console.log(cardInfo);
    cardInfo.map(array1 => {
      array1.map(array2 => {
        cards.appendChild(createArticleCard(array2));
      });
    });
  });

function createArticleCard(cardObject) {
  //Created elements
  const cardDiv = document.createElement("div");
  const headDiv = document.createElement("div");
  const author = document.createElement("div");
  const imgDiv = document.createElement("div");
  const authorImg = document.createElement("img");
  const authorName = document.createElement("span");

  //Appened the elements
  cardDiv.appendChild(headDiv);
  cardDiv.appendChild(author);
  author.appendChild(imgDiv);
  imgDiv.appendChild(authorImg);
  author.appendChild(authorName);

  //Added the classes
  cardDiv.classList.add("card");
  headDiv.classList.add("headline");
  author.classList.add("author");
  imgDiv.classList.add("img-container");

  //Added content
  headDiv.textContent = cardObject.headline;
  authorImg.src = cardObject.authorPhoto;
  authorName.textContent = cardObject.authorName;

  return cardDiv;
}
