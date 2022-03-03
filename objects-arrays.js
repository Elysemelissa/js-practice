const person = {
  name: "elyse",
  city: "Tokyo",
};

console.log(person.name);

// object with function

const dog = {
  name: "dog",
  speak(someParameter) {
    console.log("woof woof", someParameter);
  },
};

dog.speak("meow"); // "woof woof" "meow"\

// 'this' refers to global object

const numbers = [1, 2, 3];
console.log(numbers.join()); // removes space
console.log(numbers.join("")); // joins all numbers together

const students = [
  { name: "Lana", course: "Computer Science" },
  { name: "Bryan", course: "Linguistics" },
];

students.push({ name: "Floor", course: "Cooking" }); // add element
students[2] = { name: "Floor", course: "Baking" }; // update element
students.pop(); // removes last item in array

// removing elements

const subarray = students.splice(2, 3, { course: "Bowling" }); // start index array - amount of obj to remove - replace by...
