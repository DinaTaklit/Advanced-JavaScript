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


promiseToCleanTheRoom
    .then( fromResolve =>console.log(`The room is ${fromResolve}`)) // run if promise resolved(succeed)
    .catch( fromReject => console.log(`The room is ${fromReject}`)) // run if the promise rejected(failled)