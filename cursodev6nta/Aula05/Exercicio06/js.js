function res() {
	var a = document.getElementById("produto");
	var valor = a.options[a.selectedIndex].text;
	document.getElementById("result").innerHTML = valor;
	
}