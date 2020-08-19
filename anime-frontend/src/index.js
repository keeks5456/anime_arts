const baseURL = `http://localhost:3000/users`
const userContainer = document.querySelector('.container')

//fetch the api
  const fetchUsers = () => {
    fetch(baseURL)
    .then(res => res.json())
    .then(json => json.forEach(user => buildUserCard(user))) //array
  }
  fetchUsers()

  // Build the user's cards

  const buildUserCard = (user) =>{
    console.log(user)
    const userCard = document.createElement('div')
    userCard.className = "card"
    userCard.id = user.id
    userCard.innerHTML += `
     
        <h1>${user.username}</h1>
        <img src="${user.artwork}"> 
        <p>${user.description}</p>
        <form action="/html/tags/html_form_tag_action.cfm" method="post">
        <div>
        <textarea name="comments" id="comments" style="font-family:sans-serif;font-size:1.2em;">Hey... say something!</textarea>
        </div>
        <input type="submit" value="Submit">
        </form> 
        <button class='btn-success'>likes: 0</button>
        <button class='btn-danger' data-delete='delete-btn' >Delete</button>
        <button class='btn-primary' data-edit='edit-btn'>Edit</button> 
          `
    userContainer.appendChild(userCard)
    console.log(userCard)
  }
