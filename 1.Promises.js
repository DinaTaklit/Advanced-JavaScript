//============================================
//======= Simple promise
//============================================

// promise callbak have 2 parameter resolve once the promise succeed, reject if the promise failed
let promiseToCleanTheRoom = new Promise (
    (resolve, reject) => {
        // cleaning the room => some code that should be done
        let isClean = true;
        
        // The code that should be run if the promise succeed
        if (isClean){
            resolve('Clean');
        }else{
            reject('not Clean');
        }
    }
);

// promiseToCleanTheRoom
//     .then( fromResolve =>console.log(`The room is ${fromResolve}`)) // run if promise resolved(succeed)
//     .catch( fromReject => console.log(`The room is ${fromReject}`)) // run if the promise rejected(failled)

//============================================
//======= Nested promise
//============================================

let cleanRoom = () => {
    return new Promise ((resolve, reject) => {
       resolve('clean The room'); 
    });
}

let removeGarbage = message =>{
    return new Promise ((resolve, reject) => {
        resolve(`${message}, remove Garbage`); 
    })
}

let winIcecream = (message) => {
    return new Promise ((resolve, reject) => {
        resolve(`${message}, win Ice Cream`); 
    })
}


cleanRoom()
    .then( result => removeGarbage(result))
    .then( result => winIcecream(result))
    .then ( result => console.log(`finished: ${result}`))

// Now if we want to run them all in parallel
Promise.all([
    cleanRoom(),
    removeGarbage(),
    winIcecream()
]).then(()=> console.log('All finished!'))

// Now if we want one of them be finished
Promise.race([
    cleanRoom(),
    removeGarbage(),
    winIcecream()
]).then(()=> console.log('One of them is finished'))