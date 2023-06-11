// console.log("haay"[3]);//find value of index num

// function sum(num1,num2,num3,num4){
//     return num1+ num2 
// }
// sum();
// let rs= sum(20,4);
// console.log(rs);
// sum()
// let f=sum(5,9);
// console.log(f);

// function sumOfall(){
//     let sum=0;
//     for (var i=0; i<arguments.length;i++)sum += arguments[i];
//     return sum;
//     }
//     sumOfall();
// let j=sumOfall(1,2,3,4,5,6);
// console.log(j);
    
// const square =(x)=> x+x;
//  console.log(square(5));

//  let x= function(){
//     console.log("hi");
//  }
//  x();
//  (function ee(){
//     console.log("hayat");
//  })();
//  (function (x){
//     console.log(x*x);
//  })(5);

// objects
let obj={id: 101, name:"hayat", salary:40000};
console.log(obj);
let obj1={id:102, name:"zahoor", salary:50000};
console.log(obj1);
let hh= new Object();
hh.id=102;
hh.name="jahangir ";
hh.salary=2222;
console.log(hh);

function emp(i, n, s){
   this.id=i;
   this.name=n;
   this.salary=s;
}
const e= new emp(104,"khan",4444);
console.log(e);

console.log(hh.id);
console.log(hh['name']);

hh.salary=1111;
hh['name']='jaaniya'//update


delete hh.id;  //delete
console.log(hh);

//object methods
let jj={
   id:105,
   name:'Zahoor',
   age:27
};
let keys=object.keys(jj);
console.log(keys);




