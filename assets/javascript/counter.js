// The best-practice is to pull all the elements into variables, in order to avoid
// searching the HTML tree for these elements more than once:
let incrementButton = document.querySelector('#increment')
let decrementButton = document.querySelector('#decrement')
let counter = document.querySelector("#counter")

incrementButton.addEventListener('click', function(){
  console.log('+ button clicked')
    // Any code you write in here, will run every time incrementButton
    // is clicked.
    // Run the console.log function to display some text in the console:
    // Calculate the new value for our counter:
    let newCounterValue = Number(counter.innerHTML) +1
    //If the counter is >=10 then change the text color to red:
    if(newCounterValue >=10) {
      counter.style.color = "red"
    }
    //Calculate the new value for our counter:
    counter.innerHTML = newCounterValue
})  // We have to close the curly braces and parentheses we opened above.

//This is the "event listener" for clicking the button.
// Use the console.log function to display some text in the console when the button is clicked:
decrementButton.addEventListener('click', function(){
  console.log('- button clicked')
  //Calculate the new value for our counter (note the subtraction operator):
  let newCounterValue=Number(counter.innerHTML) -1
  //If the counter drops below 10, change the text color to black:
  if(newCounterValue <10){
    counter.style.color='black'
  }
  //only update the counter value on the screen if the counter is >0
  if (counter.innerHTML >0){
  //Update the counter in the HTML tree:
  counter.innerHTML=newCounterValue;
  }
})

