document.getElementById('cb1').addEventListener('change', function (e) {
	document.getElementById('sel1').disabled = !e.target.checked
	document.getElementById('op1').selected = !e.target.checked
})

document.getElementById('cb2').addEventListener('change', function (e) {
	document.getElementById('sel2').disabled = !e.target.checked
	document.getElementById('op2').selected = !e.target.checked
})

document.getElementById('cb3').addEventListener('change', function (e) {
	document.getElementById('sel3').disabled = !e.target.checked
	document.getElementById('op3').selected = !e.target.checked
})

document.getElementById('cb4').addEventListener('change', function (e) {
	document.getElementById('sel4').disabled = !e.target.checked
	document.getElementById('op4').selected = !e.target.checked
})

function calc() {

	var sel1 = document.getElementById('sel1');
	var sel2 = document.getElementById('sel2');
	var sel3 = document.getElementById('sel3');
	var sel4 = document.getElementById('sel4');
	var kach = document.getElementById('kach');
	var colich = document.getElementById('colich');
	var vid = document.getElementById('vid');


	var result1 = document.getElementById('result1');
	var price = 0;
	var price1 = 0;
	var v = parseInt(vid.options[vid.selectedIndex].value);
	var c = parseInt(colich.options[colich.selectedIndex].value);
	var k = parseInt(kach.options[kach.selectedIndex].value);
	var kk = parseInt(sport.options[sport.selectedIndex].value);


	price += v + c + k + kk;
	price = price;



	result1.innerHTML = price;
}

