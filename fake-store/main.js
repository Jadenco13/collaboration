 function authentificationResponse(user) {
    return new Promise((resolve, reject) => {
        if (user && user.userName == 'admin' && user.password == 12345) {
            const successObject = {
                msg: 'Success',
                data: 'token'
            }
            resolve(successObject);
        } else {
            const errorObject = {
                msg: 'An error occured',
                error: 'uuups'
            }
            reject(errorObject);
        }
    });
}
export {authentificationResponse}

// const receivedPromise = authentificationResponse({
//     userName: 'admin',
//     password: 12345
// })

// receivedPromise.then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
// })