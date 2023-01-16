import { authentificationResponse } from '../../fake-store/main.js'


let input1 = document.querySelector('#exampleInputEmail1');
let form = document.querySelector('#form')
let input2 = document.querySelector('#exampleInputPassword1');
let errorDiv = document.querySelector('.invalid-feedback')

form.addEventListener('submit', onSubmit)

function onSubmit($event) {
    $event.preventDefault();
    let user = {
        userName: input1.value,
        password: input2.value
    }
 authentificationResponse(user).then(response => {
   response.token ? window.location.href = '../main/main.html' : null
    
 }).catch(error => {
    console.log(error)
    errorDiv.style.display = 'block'
    errorDiv.innerHTML = error.msg
 })
    console.log(input1.value, input2.value)
}