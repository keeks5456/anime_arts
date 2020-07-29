// first do a get fetch 
// document.addEventListener('DOMContentLoaded', () => {

// })
const likes = document.querySelector('.span')
const commentForm = document.querySelector('#comment-form')

// GET request for users
const fetchPost = () => {
fetch(`http://localhost:3000/posts`)
.then(res => res.json())
.then(json => json.forEach(post => buildPost(post)))
}
fetchPost();


// build a post
const buildPost = (post) => {
  // console.log(post)
  
  // card container
  const cardContainer = document.querySelector('.cards-container')
 
  // card image here
  const div = document.createElement('div')
  div.className = 'cardInfo'
  div.id = post.id

// comment form
  // const commentForm = document.querySelector('#comment-form')

  // create unordered list
  const ul = document.createElement('ul')
  const li = document.createElement('li')
  li.innerHTML =

  `<h3>${post.user.favorite_anime} </h3>
    <img src=${post.image} class="anime-image" />

    <ul class="comments">
    <li>comments go here</li>
    </ul>

    <form id="comment-form">
    <input
      class="comment-input"
      type="text"
      name="description"
      placeholder="Add a comment..." />
    <button class="comment-button" type="submit">post</button>
    </form>


    <div class="likes-section"></div> 
    <span class=${post.likes}>0 likes</span>
    <button class="like-button">♥</button> 
  `


// append the children
cardContainer.appendChild(div)
div.appendChild(ul)
ul.appendChild(li)

// listenForLikes(post)
// listenForComment(post)
}

//create addEventListener likes
// const listenForLikes = (post) => {
//   console.log(post)
// let card = document.getElementById(post.id)
// let likeBtn = card.querySelector('.like-btn')
// likeBtn.addEventListener('click', () => updateLikes(post))

// // // note to self, figure out where to put an id for later
// }

// add Likes eventListener here

// const updateLikes = (post) => {
//   console.log(post)
//   let data = { likes: post.likes+=1}
//   fetch(`http://localhost:3000/posts/${post.id}`,{
//     method: 'PATCH',
//     header: {
//       'Content-Type': 'application/json',
//       Accept: "application/json"
//     },
//     body: JSON.stringify(data),
//   })
//   .then(res => res.json())
//   .then(post => {likes.innerText = `${post.likes} likes`})

// }


// Submit listener
const listenForComment = (post) => {
  console.log(post)
  let btn = document.querySelector('button.comment-button')
  btn.addEventListener('submit', postComments)
  console.log(btn)
  // console.log(commentForm)
}

// post request PostComments
const postComments = (post) => {
  e.preventDefault()
  console.log(e.target.description.value)
  data = {
    description: e.target.description.value
  }
  let li = document.createElement('li')
  li.innerText = data.content
// append this pack to the buildPost()
// create your fetch here
  // console.log(e.target)
  debugger
}






