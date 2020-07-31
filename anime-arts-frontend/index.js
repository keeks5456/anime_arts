
const likes = document.querySelector('span.likes') //likes span
const commentForm = document.querySelector('#comment-form') //form for comment
const ulComments = document.querySelector('.comments') //the ul for the posted comments

// const divCardInfo = document.querySelector('data-card')
// console.log(divCardInfo)

// GET REQUEST DONE
const fetchPost = () => {
fetch(`http://localhost:3000/posts`)
.then(res => res.json())
.then(json => json.forEach(post => buildPost(post)))
}
fetchPost();

// RENDER POST ON PAGE DONE
const buildPost = (post) => {
  // console.log(post)
  
  // card container
  const cardContainer = document.querySelector('.cards-container')
 
  // ENTIRE CARD HERE

  const div = document.createElement('div')
  div.className = 'cardInfo'
  div.dataset.card = post.id


  // UNORDERED LIST OF CARD INFO HERE
  const ul = document.createElement('ul')
  const li = document.createElement('li')
  li.innerHTML =
  `<h3>${post.user_id} </h3>
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
    
    <button class="edit-button" type="submit">Edit</button>

    <button class="delete-button" type="submit" data-deleteId=${post.id}>Delete</button>

    <div class="likes-section"></div> 
    <span class="likes" data-spanId=${post.id}>${post.likes} likes</span>
    <button class="like-button" id=${post.id}>♥</button> 
  `


cardContainer.appendChild(div)
div.appendChild(ul)
ul.appendChild(li)

// FUNCTIONS FOR EVENT LISTENERS
listenForLikes(post)
// listenForComment()
listenForForm(post)
listenForDelete(post)


// delete listener here
// let deleteBtn = document.getElementsByClassName('delete-button')
// // console.log(deleteBtn)
// deleteBtn.addEventListener('click', deletePost(post.id))
// console.log(deleteBtn)
}

// create addEventListener likes DONE
const listenForLikes = (post) => {
let likeBtn = document.getElementById(post.id)
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
    let currentPost = document.getElementById(post.id)
    let span = document.querySelector(`[data-spanId="${post.id}"]`)
    span.innerText = `${json.likes} likes` 
  })
}



// // MAKE NEW COMMENT HERE
// const listenForComment = () => {
//   let formBtn = document.querySelector('form#comment-form')
//   formBtn.addEventListener('submit', postComments)
// // console.log(formBtn)
//   // debugger 
// }

// // post request PostComments
// const postComments = (e) => {
//     console.log(e)

//   e.preventDefault()
//   data = {
//     user_comment: e.target[1].name
//   }
//   console.log(data)
//   let li = document.createElement('li')
//   li.innerText = data.content
//   ulComments.appendChild(li)
//   console.log(ulComments)
//   fetch(`http://localhost:3000/comments`, {
//     method: 'POST',
//     header: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
    
//   })
// }



// ADD NEW POST
const listenForForm = (post) => {
  const form = document.getElementById('create-post')
  form.addEventListener('submit', (e) => newPost(e))
  console.log(post)
} 

const newPost = (e) => {
  // debugger
  e.preventDefault()
  let data = {
    post: {
      user_id: 15,
    description: e.target[2].value,
    image: e.target[1].value,
    likes: 0,
  },
}

fetch(`http://localhost:3000/posts/`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    'Accept': 'application/json'
  },
  body: JSON.stringify(data)
})

.then(res => res.json())
.then(json => buildPost(json))
}




// // EDIT THE POST HERE

// const fetchOnePost = (id) => {
//   fetch(`http://localhost:3000/posts/${id}`)
//   .then(res => res.json())
//   .then(json => console.log(json))
// }

// const updatePost = (post) =>{
//   const wholeForm = document.getElementById('edit-post')
//   wholeForm.addEventListener('submit', (e) => console.log(e,post))

//   const postName = wholeName[0]
//   const postImage = wholeName[1]
//   const postDescription = wholeName[2]

//   postName.value = post.user.favorite_anime
//   postImage.value = post.image 
//   postDescription.value = post.postDescription


//   let h3 = document.querySelector('h3')
//   h3.innerContent = 'Edit Artwork'
// }

// const patchPost = (e, post) => {
//   e.preventDefault()
// console.log(e)
// }




// DELETE BUTTON HERE
const listenForDelete = (post) => {
  // console.log(post)
  let deleteBtn = document.querySelector(`[data-deleteId="${post.id}"]`)
  // console.log(deleteBtn)
  deleteBtn.addEventListener('click', () => deletePost(post))
  // console.log(deleteBtn)
}

// DELETE POST HERE
const deletePost = (post) => {

  fetch(`http://localhost:3000/posts/${post.id}`, {
    method: 'DELETE',

  })
  .then(res => res.json())
  .then(post => {
    let currentPost = document.querySelector(`[data-card=${post.id}]`)
    // console.log(currentPost)
  })
}

