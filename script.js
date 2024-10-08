const display=document.getElementById("display");

// function to display a number
function appendNumber(number){
  display.value += number;
}

function appendOperator(operator){
  display.value +=operator;
}

function clearDisplay(){
  display.value ='';
}

function calculate(){
  const expression=display.value;
  const result=eval(expression);
  display.value=result;
}

function deleteLast(){
  const expression=display.value;
  display.value=expression.slice(0,-1)
}
