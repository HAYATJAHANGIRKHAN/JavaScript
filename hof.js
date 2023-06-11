// const powerTwo =(n) => {
//     return n**2
// }
// // console.log(powerTwo(9));
// function powerCube(powerTwo,n){
//     return powerTwo(n) * n
// }
// // console.log(powerCube(powerTwo,4));
// function hayat(){
//     return () => {
//         // console.log("jaaniya");
//     }
// }
// let guessvalue = hayat()
// console.log(guessvalue);
// // guessvalue();

// const higherOrder =n  => {
//     const oneFun =m =>{
//         const twoFun =p  =>{
//             return m+n+p
//         }
//         return twoFun
//     }
//     return oneFun
// }
//  console.log( higherOrder(2)(3)(4));  

//  const MyNums = [2,3,4,5]
//  const sumArray = arr =>{
//     let total = 0
//     arr.forEach(function(element) {
//         total += element
        
//     });
//     return total
//  }

// //  console.log(sumArray(MyNums));

// function onemorehello(){
//     console.log("hello jahangir !", Math.random());
// }
// setInterval(onemorehello,1000)
// // setTimeout(onemorehello,2000)

//foreach,map,filter,find,sort

let arr=[2,3,4]
arr.forEach(function(element,index,arr){
    console.log(index,element,arr);
})
arr.forEach((element,index,arr) =>{
    // console.log(index,element,arr);
})

const hero= ["hayat","jahangir","khan"]
// hero.forEach((el)=>{console.log(el.toUpperCase())})

arr.map(function(index, element,arr){
    console.log(index, element,arr);
})

hero.map((el) =>{console.log(el.toUpperCase());})

//filter
console.log(hero);
const herowitht= hero.filter((el)=>{
    return el.endsWith('t')
})
console.log(herowitht);

//shopping cart (reduce)
const cartBill=[20,30,50,]
const sum= cartBill.reduce((prev, curr) => prev +curr,0)
console.log(sum);

const gameScore=[200, 300,310,250,150]
//check if all values are numbers
console.log(typeof gameScore)
const gameScoreCheck= gameScore.every((v)=> typeof v==='number')
console.log("check:", gameScoreCheck);
//find
const above200 =gameScore.find((score)=> score > 200)
console.log(above200);