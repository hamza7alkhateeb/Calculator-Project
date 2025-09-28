// Set footer year
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});


// Simple calculator
function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operation").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Error: Please enter valid numbers!";
    return;
  }

  if (!op) {
    resultDiv.textContent = "Error: Please choose an operation!";
    return;
  }

  let result;

  if (op === "add") {
    result = num1 + num2;
  } else if (op === "subtract") {
    result = num1 - num2;
  } else if (op === "multiply") {
    result = num1 * num2;
  } else if (op === "divide") {
    if (num2 === 0) {
      result = "Error: Division by zero";
    } else {
      result = num1 / num2;
    }
  }

  resultDiv.textContent = "Result: " + result;
}




// Complex calculator
const displayMain = document.querySelector(".display-main");
const displayOps = document.querySelector(".display-operations");
const complexButtons = document.querySelectorAll(".calculator-complex .button");

let current = "" 

complexButtons.forEach((btn)=>{
  btn.addEventListener("click", (e) => {
    const key=e.target
    const action =e.target.dataset.action
    switch(action){
      case "eq":
        if (current){
          let result = eval(current).toString(); 
          displayMain.textContent=result;
          current=result;
        }
        break;
      case 'ac':
        current=""
        break
      case "ce":
        if (current.length>0){
          current=current.slice(0,-1);
        }
        break
      default:
        if (current=="0"){
          current="";
        }
        if (e.target.textContent=="x"){
          current +="*"
        }else{
          current +=e.target.textContent
        }
        break;

    }
    displayOps.textContent=current
    
  });
})