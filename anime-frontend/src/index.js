const baseURL = `http://localhost:3000/posts`
const postContainer = document.querySelector('.container')

//fetch the api
  const fetchUsers = () => {
    fetch(baseURL)
    .then(res => res.json())

    .then(json => {
      json['data'].forEach(post =>{
         buildPostCard(post, json['included'])
        })
      // console.log(json)
    })//array
  }
  fetchUsers()

  // Build the user's cards


  const buildPostCard = (post, usersIncluded) =>{
    const postCard = document.createElement('div')
    postCard.className = "card"
    postCard.id = post.id
    postCard.innerHTML = `
        <h1>${usersIncluded.find(u => u.id === post.relationships.user.data.id).attributes.username}</h1>
        <img src="${post.attributes.artwork}"> 
        <p>${post.attributes.description}</p>
        <form action="/html/tags/html_form_tag_action.cfm" method="post">
        <div>
        <textarea name="comments" id="comments" style="font-family:sans-serif;font-size:1.2em;">Hey... say something!</textarea>
        </div>
        <input type="submit" value="Submit">
        </form> 

        <button class='btn-success'>likes: ${post.attributes.likes}</button>
        <button class='btn-danger' data-delete='delete-btn'>Delete</button>
        <button class='btn-primary' data-edit='edit-btn'>Edit</button> 
          `
          postContainer.appendChild(postCard) 

  // likes listener here
    let likesBtn = postCard.querySelector('.btn-success')
    likesBtn.addEventListener('click', (e) =>{ 
    incrementLikes(post)})

  //edit listener here 
  listenForEdit(post)
  }


const incrementLikes = (post) => {
  data = {
    likes: post.attributes.likes += 1 
  }
// console.log(data)
  fetch(`http://localhost:3000/posts/${post.id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(json => {
    // debugger
    let currentPost = document.getElementById(json.id)
    let button = currentPost.querySelector('.btn-success')
    button.textContent = `likes ${json.likes}`

  })
}

const listenForEdit = (post) =>{
// console.log(post)
let currentPost = document.getElementById(post.id)
let editBtn = currentPost.querySelector('.btn-primary')
editBtn.addEventListener('submit', (e)=> {
  e.preventDefault()
  console.log(e)
})
console.log(editBtn)
}

