document.addEventListener('keydown', function(event) {
	var key = parseInt(event.key);
	if (!isNaN(key)){
		addNum(key);	
	}
});

 document.addEventListener("DOMContentLoaded", () => {
    createButt();
    updateDisplay();
  });

const but = "123+456-789*c0=/";
const classNum = "btn btn-light waves-effect";
const classOP = "operator btn btn-info";
const classAC = "all-clear function btn btn-danger btn-sm";

		
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function createButt(){
    for (var i = 0; i < but.length; i++) {
      var buttClass;
      if (!isNaN(parseInt(but[i]))){
          buttClass = classNum;
      }
      else {
        if(but[i] == "c"){
          buttClass = classAC;
        }
        else{
          buttClass = classOP;
        }
      }
    document.getElementById("2").innerHTML +="<button type=\"button\"  class=\"" + buttClass 
              + "\"onclick=\"checkClick(this.innerHTML)\">" +but[i]+ "</button>";
}
}
function checkClick(butt){
    if (!isNaN(parseInt(butt))){
        addNum(butt);
    }
    else {
      if (butt == "c"){
          resetCalculator();
      }
      else{
        pressBut(butt);
      }
      
    }

}
function addNum(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit :  String(displayValue) + digit;
  }
  updateDisplay();
}


function pressBut(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand)  {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand == null) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const currentValue = firstOperand || 0;
    const result = performCalculation[operator](currentValue, inputValue);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  updateDisplay();
}

const performCalculation = {
  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

  '=': (firstOperand, secondOperand) => secondOperand
};

function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('1');

  document.getElementById("1").value = calculator.displayValue;
}




