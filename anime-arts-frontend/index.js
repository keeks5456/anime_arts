
const likes = document.querySelector('span.likes') //likes span
const commentForm = document.querySelector('#comment-form') //form for comment
const ulComments = document.querySelector('.comments') //the ul for the posted comments

// GET request for users DONE
const fetchPost = () => {
fetch(`http://localhost:3000/posts`)
.then(res => res.json())
.then(json => json.forEach(post => buildPost(post)))
}
fetchPost();

// build a post DONE
const buildPost = (post) => {
  // console.log(post)
  
  // card container
  const cardContainer = document.querySelector('.cards-container')
 
  // card image here
  const div = document.createElement('div')
  div.className = 'cardInfo'
  div.dataset.card = post.id

// comment form
  // const commentForm = document.querySelector('#comment-form')

  // create unordered list
  const ul = document.createElement('ul')
  const li = document.createElement('li')
  li.innerHTML =
  `<h3>${post.user.favorite_anime} </h3>
    <img src=${post.image} class="anime-image" />

    <ul class="comments">
    <li>${post.comment}</li>
    </ul>

    <form id="comment-form">
    <input
      class="comment-input"
      type="text"
      name="description"
      placeholder="Add a comment..." />
    <button class="comment-button" type="submit">Submit</button>
    </form>
  
    <div class="likes-section"></div> 
    <span class="likes" data-spanId=${post.id}>${post.likes} likes</span>
    <button class="like-button" id=${post.id}>♥</button> 
  `

// append the children
cardContainer.appendChild(div)
div.appendChild(ul)
ul.appendChild(li)

listenForLikes(post)
listenForComment()
}

// create addEventListener likes DONE
const listenForLikes = (post) => {
let likeBtn = document.getElementById(post.id)
// console.log(likeBtn)
likeBtn.addEventListener('click', (e) => updateLikes(post))
// console.log(post)
}

// add Likes eventListener here DONE
const updateLikes = (post) => {
  console.log(post)
  let data = { likes: post.likes+=1}

  fetch(`http://localhost:3000/posts/${post.id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(json => {
    // debugger
    // console.log(e.target.parentElement)
    let currentPost = document.getElementById(post.id)
    // console.log(currentPost)
    let span = document.querySelector(`[data-spanId="${post.id}"]`)
    span.innerText = `${json.likes} likes` 
  })
}





// Submit listener
const listenForComment = () => {
  let formBtn = document.querySelector('form#comment-form')
  formBtn.addEventListener('submit', postComments)
// console.log(formBtn)
  // debugger 
}

// post request PostComments
const postComments = (e) => {
  e.preventDefault()
  // // debugger
  data = {
    user_comment: e.target[0].name
  }
  console.log(data)
  let li = document.createElement('li')
  li.innerText = data.content
  ulComments.appendChild(li)
  console.log(ulComments)
  fetch(`http://localhost:3000/comments`, {
    method: 'POST',
    header: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    
  })

  // debugger
}

// Form for adding and updating the cards

// const addPost = (e) => {
//   e.preventDefault()

// }




