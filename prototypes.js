let myHeroes =["thor","spiderman"]
let dcHeroes=["batman","flash","superman"]

let heropower={
    thor:"hammer",
    spiderman:"sling",

    getspidermanpower:function(){
        console.log('spidy power is ${this.spiderman}');
    }
}
Object.prototype.hayat= function(){
    console.log('hayat jahangir khan');
}
console.log(myHeroes.hayat());
console.log(heropower.hayat());

Array.prototype.hijahangir= function(){
    console.log('hi jahangir');
}
console.log(myHeroes.hijahangir());
// console.log(heropower.hijahangir());

//inheritance
const user = {
    name:"jaaniya",
    email:"jaaniya@gmail.com"
}

const Teacher = {
    makevideo:true
}
const Teachersupport ={
    isAvailable: false
}
const Taasstance={
    makeassgn: "js assign",
    fulltime: true,
    __proto__: Teachersupport
}
// teacher.__proto__=user
Object.setPrototypeOf(Teachersupport,Teacher)
console.log(Taasstance.isAvailable);

String.prototype.truelength= function(){
    console.log('True length is ${this.trim().length}');
}

"hayat  ".truelength()
// "jaaniya  ".truelength()
