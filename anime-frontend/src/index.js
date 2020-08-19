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
        <a class="waves-effect waves-light btn-small"><i class="material-icons left">cloud</i>like</a>
      
      `
      // why aren't the images showing on the page? somthing wrng with GET request
    userContainer.appendChild(userCard)
    console.log(userCard)
  }
