var count = 0;
var counts = document.getElementById("co");
var red = document.getElementById("r");
var blue = document.getElementById("b");
var green = document.getElementById("g");
var colorcontent = document.getElementById("colorcontent");

red.addEventListener("click", () => {
    colorcontent.innerHTML = "Color of the selected cube is: Red";
})
blue.addEventListener("click", () => {
    colorcontent.innerHTML = "Color of the selected cube is: Blue";
})
green.addEventListener("click", () => {
    colorcontent.innerHTML = "Color of the selected cube is: Green";
})
function counter() {
  count++;
  counts.innerHTML = "Button clicked: " + count + " times";
}
