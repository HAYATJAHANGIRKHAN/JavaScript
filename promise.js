function createPromise(){
    return new Promise(function exec(resolve, reject){
        // your code goes here
        setTimeout(function f(){
            console.log("timer done");
           reject("hayat");// resolve("hayat")
        }, 3000);
    });
// }
// console.log("start");
// let x= createPromise();
// console.log("got a new promise");
// x.then(function f(value){
//     console.log("promise done",value);
// }).catch(function g(value) {
//     console.log("end", value);
// }).finally(function fn(){
//     console.log("finally");
// })
// console.log("end");
// for(let i =0; i< 1000000; i++){
//     // some code
}
// async function consume() {
//     return 10;
// }
// console.log(consume())

async function consume(){
    try{console.log("inside function ");
    const response =await createPromise();
    console.log("respobe is ", response);

    } catch(err){
        console.log("handled", err);

    }
    
}
console.log("start");
consume();
console.log("end");