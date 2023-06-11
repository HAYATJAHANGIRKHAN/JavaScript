let score =4
function one(){
    let score =0
    console.log(score);
}
function two(){
    let score =3
    console.log(score);
}
function three(){
    console.log(score);
}
// one()
// two()
// three()
// console.log(score);
 function outerfun(){
    let outervar = " i am at scope level 1"
    function innerfun(){
        console.log(outervar);
    }
    // console.log(innerval);
    innerfun()
 }
//  outerfun()

const myglobalvalue=0
function fun(){
    const val1=1;
    console.log(myglobalvalue);

    function inneroffun(){
        const val2 = 2
        console.log(val2, val1,myglobalvalue);

        function innerofinnerfun(){
            const val3= 3
            console.log(val3, val2,val1,myglobalvalue);
        }
        innerofinnerfun()
    }
    inneroffun()
}
// fun()
//closure
function superfun(){
    let outervalue=" i am outer"
    function minorfun(){
        console.log(outervalue);
    }
    minorfun()
}
// superfun()
const errormessage = "file not found"
setTimeout(function callback(){
console.log(errormessage);
},1000)

let pagecount = 0
const items = [2,4,5,7,8]

items.forEach(function iterator(num){
    pagecount++
    console.log(num);
})

console.log("page count",pagecount);