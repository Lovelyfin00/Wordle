import { WORDS } from "./words.js";

let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
console.log(rightGuessString)

// const buttons = document.querySelectorAll("button");
// //Created a var that tracks our current position
// let tracker = 0;

// buttons.forEach(button =>{
//     button.addEventListener("click", handleClick)
// })
// function handleClick(){
//     let buttonText = this.textContent;
//     let valueEntered = document.querySelectorAll(".input-value");
//     //for (i=0; i<valueEntered.length; i++){
//         //valueEntered[i].textContent += buttonText;
//     //}
//     valueEntered[tracker].textContent = buttonText;
//     tracker++
// }

