const baseURL = `http://localhost:3000/users`
const userContainer = document.querySelector('.container')

//fetch the api
  const fetchUsers = () => {
    fetch(baseURL)
    .then(res => res.json())
    .then(json => json.forEach(post => buildPostCard(post))) //array
  }
  fetchUsers()

  // Build the user's cards

  const buildPostCard = (post) =>{
    console.log(post)
    const postCard = document.createElement('div')
    postCard.className = "card"
    postCard.id = post.id
    postCard.innerHTML += `
     
        <h1>${post.username}</h1> //this will have user, needs serializer first
        <img src="${post.artwork}"> 
        <p>${post.description}</p>
        <form action="/html/tags/html_form_tag_action.cfm" method="post">
        <div>
        <textarea name="comments" id="comments" style="font-family:sans-serif;font-size:1.2em;">Hey... say something!</textarea>
        </div>
        <input type="submit" value="Submit">
        </form> 
        <button class='btn-success'>likes: ${post.likes}</button>
        <button class='btn-danger' data-delete='delete-btn' >Delete</button>
        <button class='btn-primary' data-edit='edit-btn'>Edit</button> 
          `


    userContainer.appendChild(userCard)
    console.log(userCard)
  }
