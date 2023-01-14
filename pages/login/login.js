import {authentificationResponse} from '../../fake-store/main.js'

const receivedPromise = authentificationResponse({
    userName: 'admin',
    password: 12345
})
console.log(receivedPromise)