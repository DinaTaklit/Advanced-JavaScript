[1mdiff --git a/1.Promises.js b/1.Promises.js[m
[1mindex b7bed43..81a5ccd 100644[m
[1m--- a/1.Promises.js[m
[1m+++ b/1.Promises.js[m
[36m@@ -47,4 +47,18 @@[m [mlet winIcecream = (message) => {[m
 cleanRoom()[m
     .then( result => removeGarbage(result))[m
     .then( result => winIcecream(result))[m
[31m-    .then ( result => console.log(`finished: ${result}`))[m
\ No newline at end of file[m
[32m+[m[32m    .then ( result => console.log(`finished: ${result}`))[m
[32m+[m
[32m+[m[32m// Now if we want to run them all in parallel[m
[32m+[m[32mPromise.all([[m
[32m+[m[32m    cleanRoom(),[m
[32m+[m[32m    removeGarbage(),[m
[32m+[m[32m    winIcecream()[m
[32m+[m[32m]).then(()=> console.log('All finished!'))[m
[32m+[m
[32m+[m[32m// Now if we want one of them be finished[m
[32m+[m[32mPromise.race([[m
[32m+[m[32m    cleanRoom(),[m
[32m+[m[32m    removeGarbage(),[m
[32m+[m[32m    winIcecream()[m
[32m+[m[32m]).then(()=> console.log('One of them is finished'))[m
\ No newline at end of file[m
