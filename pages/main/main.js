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
        usersArr.forEach((element, index) => {
            let card = `
                <div class="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149995.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-email">${element.email}</p>
                        <p class="card-phone">${element.phone}</p>
                        <a onclick="getPosts(${element.id}, ${index})" id="post" class="btn btn-primary">Posts</a>
                        <div class="posts">

                        </div>
                    </div>
                </div>
                `
                getPosts = async (id, index)  => {
                    try {
                        const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)).json();
                        posts.forEach(post => {
                            general.children[index].querySelector('.posts').innerHTML += `<p>${post.title}</p>`
                           
                        })
                       
                    } catch (error) {
                        console.log(error)
                    }
            
                }
            general.innerHTML += card;
        }
        ); 
    }
}

