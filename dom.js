// change properties from css class example

/* <style>
  .square {
    width: 100px;
    height: 100px;
    background-color: crimson;
  }
</style>

<div class="red-square"></div> */

// <script>
const redSquare = document.querySelector(".square"); // only grabs the first instance
redSquare.style.backgroundColor = "limegreen";
// </script>

// want all instances?
document.querySelectorAll;

// in the console: $0 refers to whatever's selected
$0.style.width = "100%";

// adding and removing classes
item.classList.add("other-class");
item.classList.remove("other-class");

// for accessibility, always use button-tags, option-tags for dropdown, etc.

// button click eventListener

const button = document.addEventListener("click", function () {
  alert("hey there");
});

// check your website with a screen reader! Like Jaws

// keyup eventlistener

document
  .querySelector(".input-to-copy")
  .addEventListener("keyup", function (event) {
    console.log("event");
    item.innerText = event.target.value;
  });

// event bubbling

<div class="button-container">
  <button>Button1</button>
  <button>Button2</button>
  <button>Button3</button>
  <button>Button4</button>
</div>;

document
  .querySelector(".button-container")
  .addEventListener("click", function (event) {
    alert(`You clicked on ${event.target.innerText}`); // target is the tag that the event originated from
  });

// there is one bug here. if you click on the container instead of the buttons,
// its grabbing all the text from the inner nodes
// it will alert "you clicked on button1button2 etc."

// solution: add if-statement
document
  .querySelector(".button-container")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      // mind the uppercase
      alert(`You clicked on ${event.target.innerText}`);
    }
  });
