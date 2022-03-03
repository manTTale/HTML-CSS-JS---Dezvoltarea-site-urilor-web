var myButton = document.getElementById('clickButton');
console.log(myButton);
var myText = document.getElementById('helloText');
myButton.addEventListener('click',doSomething,false);
function doSomething(){
 myText.textContent = "salut, lume";
}
myButton.addEventListener('mouseout',doSomethingElse, false);
function doSomethingElse(){
  location.reload;
}
