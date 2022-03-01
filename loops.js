// for-loop: how did it work again in JS? 

const character = 't';
let myString = '';

for (let i = 0; i < 5; i++) {
  myString = myString + character;
}

console.log(myString);

// scope

// any variable that is declared inside a block, like a loop, if-statement etc,
// is going out of scope when the block finishes. 
// You can't read the value of that variable

// so it matters a lot where the variable is created. 

const A = "A";
let F;

function doStuff(B) {
  console.log(B);
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D); // won't work, out of scope
  console.log(H);
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A);
  const G = "G";
}
console.log(E);
console.log(G); // out of scope

doStuff("B");
console.log(B); // parameters destroyed after functioning is over, won't work
console.log(C); // out of scope
console.log(F);