window.onload = () => {
    async function fetchUsers() {
        try {
            const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
            cardsRender(users)
            console.log(users)
        } catch (error) {
            console.log(error)
        }
    }
    fetchUsers();

    function cardsRender(usersArr) {
        let general = document.querySelector('.general');
        usersArr.forEach(element => {
            let card = `
                <div class="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149995.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-email">${element.email}</p>
                        <p class="card-phone">${element.phone}</p>
                        <a user-id="${element.id}" id="post" class="btn btn-primary">Posts</a>
                    </div>
                </div>
                `
            general.innerHTML += card;
        }
        );
        document.querySelector('#post').addEventListener('click', () => {
            alert('im work')
        })
    }


    function getPosts() {
        alert('im work')
    }
}

// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))