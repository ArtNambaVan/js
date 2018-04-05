//1)	
	var a = 1, b = 1, c, d;
	c = ++a; alert(c); // 2 значение а увеличивается на 1 и становится равным 2. потом с присваевается значение а (префиксная форма)
	d = b++; alert(d); // 1 возвращает старое значение, бывшее до увеличения (Постфиксная форма) b = 2; d = 1
	c = (2+ ++a); alert(c); // 5  а = 2;  ++a = 3;  2 + 3 = 5
	d = (2+ b++); alert(d); // 4  b = 2; b++ = 3; но т.к. постфиксная форма, то возвращается старое значение (2). 2+2 = 4
	alert(a); // 3  а = 3
	alert(b); // 3  b = 3

//2
	var a = 2;
	var x = 1 + (a *= 2); // x = 5

//3 
	console.log("Задание 3")
	var a = 60;
	var b = -46;

	if (a >= 0 && b >= 0) {
		console.log(a - b);
	} else if (a <= 0 && b <= 0) {
		console.log(a * b);
	} else {
		console.log(a + b);
	}

//4 
	console.log("Задание 4");
	a = 9

	switch(a) {
		case 0:
			console.log(0);
		case 1:
			console.log(1);			
		case 2:
			console.log(2);			
		case 3:
			console.log(3);			
		case 4:
			console.log(4);			
		case 5:
			console.log(5);			
		case 6:
			console.log(6);			
		case 7:
			console.log(7);			
		case 8:
			console.log(8);			
		case 9:
			console.log(9);			
		case 10:
			console.log(10);			
		case 11:
			console.log(11);			
		case 12:
			console.log(12);
		case 13:
			console.log(13);
		case 14:
			console.log(14);
		case 15:
			console.log(15);
	}

//5

	function minus(a, b) {
		return a - b;
	}

	function plus(a, b) {
		return a + b;
	}

	function multiply(a, b) {
		return a * b;
	}

	function divide(a, b) {
		return a / b;
	}

//6

	function mathOperation(arg1, arg2, operation) {
		if (operation == "+") {
			return arg1 + arg2;
		} else if (operation == "-") {
			return arg1 - arg2;
		} else if (operation == "/") {
			return arg1 / arg2;
		} else if (operation == "*") {
			return arg1 * arg2;
		} else {
			console.log ("Попробуйте в качестве оператора выюрать \"+\", \"-\", \"*\" или \"/\"");
		}
	}

//7

	null > 0 //false  +0 > 0
	null == 0 //false  nul == undefined и больше не равно ничему другому
	null >= 0 //true   если у нас есть два числа, x и y, и если x не меньше, чем y, тогда x должно быть больше чем y или равно ему.

//8

	function power(val, pow){
		if (pow > 1) {
			return val * power(val, pow - 1);
		} else {
			return val
		}
	}

