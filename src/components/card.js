import { createEvent } from "@testing-library/dom"
import axios from 'axios'


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
  const Card = (article) => {

  const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const byAuthor = document.createElement('span')

  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')

  img.src = article.authorPhoto
  byAuthor.textContent = `By ${article.authorName}`
  headline.textContent = article.headline

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer)
  imgContainer.appendChild(img)
  author.appendChild(byAuthor)

  card.addEventListener('click', () => {
      console.log(headline.textContent);
    
  });

  return card

}


// {javascript: Array(4), bootstrap: Array(3), technology: Array(3), jquery: Array(3), node: Array(2)


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
    const theArticles = res.data.articles;
    console.log(theArticles);
    
    theArticles.javascript.forEach(article => { 
      document.querySelector(`${selector}`).appendChild(Card(article));
    });
    theArticles.bootstrap.forEach(article => { 
      document.querySelector(`${selector}`).appendChild(Card(article));
    });
    theArticles.technology.forEach(article => { 
      document.querySelector(`${selector}`).appendChild(Card(article));
    });
    theArticles.jquery.forEach(article => { 
      document.querySelector(`${selector}`).appendChild(Card(article));
    });
    theArticles.node.forEach(article => { 
      document.querySelector(`${selector}`).appendChild(Card(article));
    });
      
    })
  
  .catch(err => {
    console.log(err);

  })
}


export { Card, cardAppender }
