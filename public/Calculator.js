//Functions

//Calculator function with switch case

function calc(first, operand, second) {
  switch (operand) {
    case "+":
      first += second;
      break;

    case "-":
      first -= second;
      break;

    case "*":
      first *= second;
      break;

    case "/":
      first /= second;
      break;

    default:
      console.log("error");
      break;
  }
  return first;
}

function digit(element) {
  //if statements for the first number

  if (num1 === undefined) {
    num1 = element;
    console.log(` num 1 is ${num1}`);
    output.value = num1;
  } else if (num1 !== undefined && inner === undefined) {
    num1 += element;
    console.log(`num 1 is ${num1}`);
    output.value = num1;
  }

  //if statements for the second number
  else if (num1 !== undefined && inner !== undefined && num2 !== undefined) {
    num2 += element;
    console.log(`num 2 is ${num2}`);
    output.value = num2;
  } else {
    num2 = element;
    console.log(`num 2 is ${num2}`);
    output.value = num2;
  }
}

function operand(element) {
  if (operands.includes(element)) {
    inner = element;
    console.log(`inner is ${inner}`);
    output.value = inner;
  } else {
    console.log("Invalid");
  }
}

function empty() {
  num1 = undefined;
  num2 = undefined;
  inner = undefined;
  console.log(num1 + " " + num2 + " " + inner);
}

function bgcolor(object, color, oldcolor) {
  object.style.backgroundColor = color;
  setTimeout(() => {
    object.style.backgroundColor = oldcolor;
  }, 100);
}

function buttonColor() {
  button.forEach((element) => {
    //Click event
    element.addEventListener("click", () => {
      bgcolor(element, "#636161", "white");
    });
  });
}

//Functions

// Calculator Variables

let num = document.querySelectorAll(".number");
let oper = document.querySelectorAll(".oper");
let button = document.querySelectorAll(".button");
let clear = document.querySelector(".clear");
let output = document.querySelector(".output");
let cal = document.querySelector(".cal");
let operands = ["+", "-", "*", "/"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let num1;
let num2;
let inner;

//calculator variables

buttonColor();

// foreach loops for the variables

num.forEach((element) => {
  //Click event
  element.addEventListener("click", () => {
    let value = element.innerHTML;
    digit(value);
  });
});

oper.forEach((element) => {
  //Click event
  element.addEventListener("click", () => {
    bgcolor(element, "#6e5b06", "#fccf0a");
    let value = element.innerHTML;
    operand(value);
  });
});

// foreach loops for the variables

cal.addEventListener("click", () => {
  output.value = calc(parseInt(num1), inner, parseInt(num2));
  console.log(output.value);
  empty();
});

//Clear event
clear.addEventListener("click", () => {
  empty();
  output.value = "";
});

document.addEventListener("keydown", (event) => {
  let value = event.key;
  if (numbers.includes(value)) {
    digit(value);
    console.log(value);
  } else if (operands.includes(value)) {
    operand(value);
    console.log(value);
  } else if (value === "Enter" || value === "=") {
    output.value = calc(parseInt(num1), inner, parseInt(num2));
    console.log(output.value);
    empty();
  } else if (value === "Backspace") {
    empty();
    output.value = "";
  } else {
    console.log(value);
  }
});
