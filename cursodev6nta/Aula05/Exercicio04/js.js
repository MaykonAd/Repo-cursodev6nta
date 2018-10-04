/**
 * 
 */

function fazerLogin(){
	var login=document.getElementById("login").value;
	var senha=document.getElementById("senha").value;

	if(login=="admin" && senha=="123456"){
		window.location = "NewFile.html";
	}else{
		alert("Login ou senha errada...");
	}
	
}