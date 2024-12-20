const name = "raj"
const repoCount = 50

//console.log(name+repoCount+" Value"); // outdated
//niceh vala better hai : 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('raj-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,4)
console.log(newString);

const anothreString = gameName.slice(-5,4)
console.log(anothreString);

const newStringOne = "    raj    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://raj.com/raj%20pandey"
console.log(url.replace('%20','-'));

console.log(url.includes('nahi'))

console.log(gameName.split('-'));
