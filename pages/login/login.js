import { authentificationResponse } from '../../fake-store/main.js'


let form = document.querySelector('#form');

form.addEventListener('submit', onSubmit)

async function onSubmit($event) {
  $event.preventDefault();
  let errorDiv = document.querySelector('.invalid-feedback')
  let user = {
    userName: $event.target.querySelector('#exampleInputEmail1').value,
    password: $event.target.querySelector('#exampleInputPassword1').value,
  }
  try {
    let response = await authentificationResponse(user);
    response.data ? window.location.href = '../main/main.html' : null
  } catch (error) {
    errorDiv.style.display = 'block'
    errorDiv.innerHTML = error.msg
    console.log(error)
  }





  //  authentificationResponse(user).then(response => {
  //   response.data ? window.location.href = '../main/main.html' : null
  //  }).catch(error => {
  //     console.log(error)
  //  })
  //     console.log(input1.value, input2.value)
}