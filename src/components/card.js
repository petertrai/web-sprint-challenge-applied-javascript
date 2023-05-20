import { createEvent } from "@testing-library/dom"
import axios from 'axios'

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>


  const card = document.createElement('div')
  const headliner = document.createElement('div')
  const author = document.createElement('div')
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const byAuthor = document.createElement('span')

  card.classList.add('card')
  headliner.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')

  img.src = article.authorPhoto
  byAuthor.textContent = `By ${article.authorName}`
  headliner.textContent = article.headline

  card.appendChild(headliner);
  card.appendChild(author);
  author.appendChild(imgContainer)
  imgContainer.appendChild(img)
  imgContainer.appendChild(byAuthor)

  card.addEventListener('click', () => {
    console.log(headliner.textContent)
  })

  return card

}
// bootstrap
// : 
// (3) [{…}, {…}, {…}]
// javascript
// : 
// (4) [{…}, {…}, {…}, {…}]
// jquery
// : 
// (3) [{…}, {…}, {…}]
// node
// : 
// (2) [{…}, {…}]
// technology
// :




  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardAppender = (selector) => {
  axios.get(`http://localhost:5001/api/articles`)
  .then(res => { 
    let theArticles = res.data.articles;
    theArticles.bootstrap.forEach((article) => { 
      document.querySelector(`${selector}`).appendChild(Card(article));
      theArticles.javascript.forEach(article => {
        document.querySelector(`${selector}`).appendChild(Card(article));
        theArticles.jquery.forEach(article => {
          document.querySelector(`${selector}`).appendChild(Card(article));
          theArticles.node.forEach(article => {
            document.querySelector(`${selector}`).appendChild(Card(article));
            theArticles.technology.forEach(article => {
              document.querySelector(`${selector}`).appendChild(Card(article));

          })}) })})})})
  
  .catch(err => {
    console.log(err);

  })
}


export { Card, cardAppender }
