// class product{
//     // properties -> variables -> data member
//     // name;
//     // price;
//     // rating;
//     constructor(n, p, r){

//         console.log("calling the constractor");
//         this.name =n;
//         this.price=p;
//         this.rating=r;
//     }
//     // behaviours -> function -> member function
//     display(){
//         console.log("this refers to",this);
//         console.log("display hayat", this.name, this.price, this.rating);
//     }
// }
// const p= new product("mi" ,21000, 4);
// console.log(p);
// p.display();


/////function constructor
// function product(n, p, r) {
// this.name=n;
// this.price=p;
// this.rating=r;
// }
//     const p= new product ("laptop", 56000, 5);
//     console.log(p);

//     let x={
//         p:product
//     };
//     x.p("airpods", 2000,5);
//     console.log(x);

// //function2

// const product =function (n,p,r){
//     this.name=n;
//     this.price=p;
//     this.rating= r; 
// }
// const p= new product("khan",10000,5);
// console.log(p);

// function3

// const Product =(n, p ,r) => {
//     this.name= n;
//     this.price= p;
//     this.rating= r;
// }
// const p= new Product("khan",50000,9);
// console.log(p);

// arrow this
// let obj={
//     x:10,
//     fun(){
//         console.log(this.x);
//     }
// }
// obj.fun();

// static method
//getter and setter

class ComplexNumber{
    #real;
    #imag;
    constructor(r,i){
        this.#real=r;
        this.#imag=i;
    }
    display(){
        console.log(this.#real, "+i", this.#imag);
    }
    get real(){
        return this .#real;
    }
    get imag(){
        return this .#imag;
    }
    addComplexNumber(c){
        this.#real += c.real;
        this.#imag += c.imag;
    }
}
const c1 =new  ComplexNumber(2,3);
c1.display();
const c2= new ComplexNumber(4,5);
c1.addComplexNumber(c2);
c1.display();