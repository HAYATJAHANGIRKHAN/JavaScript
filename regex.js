let pattern='Hayat'

let regExone = new RegExp (pattern)

let flag ='gi'
let regExTwo = new RegExp(pattern,flag)

let regExthree = /Hayat/gi
const strToCheck='Hayat jahangir khan Hayat from kashmir hayat qualification is B.E hayat is good boy'
const result = regExthree.test(strToCheck)
console.log(result); //output true or false
const anotherResult = strToCheck.match(regExthree)
console.log(anotherResult); // its show how much time 

const oneMoreResult = strToCheck.replace(regExthree, "jaaniya")
console.log(oneMoreResult);

const webUrl ="https://hayatjahangir.com/jaaniya%20khan"
const useableUrl = webUrl.replace(/%20/g,'-')
console.log(useableUrl);
