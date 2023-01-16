import { authentificationResponse } from '../../fake-store/main.js'




let input1 = document.querySelector('.input-1');
let input2 = document.querySelector('.input-2');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    var performance;
    if (input1 == receivedPromise.userName && input2 == receivedPromise.password) {
        return performance = true;
    } else {
        performance = false
    };
    if (performance === true) {
        window.onload = () => {
            window.location.href = 'https://www.google.com/search?q=translate&oq=tra&aqs=chrome.1.69i57j35i39j0i67l2j69i60l3j69i65.2698j0j7&sourceid=chrome&ie=UTF-8'
        };
    } else {
        console.log(performance)
        console.log(receivedPromise)
        // alert("Sorry, your entered data does not exist")
    }
}
)