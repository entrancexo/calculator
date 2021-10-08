var arg1 = "";
var arg2 = "";
var op="";
var op2 = "";
var s;
function addNum(num){
	if (s){
		document.getElementById("1").value += num;
	}
	else{
		document.getElementById("1").value = "";
		document.getElementById("1").value += num;
		s = true;
	}

}

document.addEventListener('keydown', function(event) {
	var key = parseInt(event.key);
	if (!isNaN(key)){
		addNum(key);	
	}
		

});
function calcul(but){
	switch (but) {
		case '*':
			result = arg1 * arg2;
	
		break
		case '+':
			result = Number(arg1) + Number(arg2);
	
		break
		case '-':
			result = arg1 - arg2;
	
		break
		case '/':
			result = arg1 / arg2;
	
		break
	}
	return result;
}
function pressBut(but){
	var result;
	s = false;
	if (arg1 != ""){
		switch(but){
			case '=':
			console.log(but);
				if (arg2 == ""){
						arg2 = document.getElementById("1").value;
						console.log("второй пустрой");
				}
				result = calcul(op);
				document.getElementById("1").value = result;
				arg1 = "";
				arg2 = "";
			break
			case 'c':
				result ="";
				arg1 = "";
				arg2 = "";
				document.getElementById("1").value = "";
			break
			default:
				arg2 = document.getElementById("1").value;
				result = calcul(op);
				document.getElementById("1").value = result;
				arg1 = document.getElementById("1").value;
				result = "";
				//arg1 = "";
				arg2 = "";
				op = but;
			break
		}
	
	}

	else{
		arg1 = document.getElementById("1").value;
		op = but;
	} 
}
