const isLoggedin = false;           //null coalescing operator -> ?? optional chaining -> ?.
const value = isLoggedin ?? Ravi; // ?? checks and passes second value if first is null or undefined
                                // so value = false
//promise
let hasError = false;
const promise = new Promise((resolve, reject) => {
    if (hasError){
        reject("Error Ayo");
    }else{
        resolve("Success"); //resolve ma {name: rv, age:23} haru pani paucha 
    }
})                         //resolve("Success") goes to result
// promise.then((result) => { //result or j ni lekhna milcha
//     console.log(result);
// }).catch((e) => {
//     console.log(e); //e ma chai if reject
// }).finally(() => {
//     console.log("Finally"); // finally chai promise vayeni
//                             // navayeni promise vayesi run huni 
// });

//non blocking code / async code[]
//async function
async function main() {
    try {
        const result = await promise; //promise.then((result) => {console.log(result);
        console.log(result);
    } catch (e) {
        console.log(e);
    } finally{
        console.log("Finally using async");
    }
}
main();

//timer
setTimeout(() => {console.log("run after time is complete");}, 2000); // short version is below

function waitFor(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}
async function sleepChecker(){
    console.log("before sleep");
    await waitFor(3000);
    console.log("after sleep Done");
}
sleepChecker();