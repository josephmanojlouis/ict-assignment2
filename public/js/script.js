
	function show(){

		var password = document.getElementById("password");
		var confirmpassword = document.getElementById("confirmpassword");

		if(password.type === "password"){
			password.type = "text";
		}else{
			password.type = "password";
		}

		if(confirmpassword.type === "password"){
			confirmpassword.type = "text";
		}else{
			confirmpassword.type = "password";
		}


	}


var password = document.getElementById("password");

password.onfocus = function() {
		document.getElementById("password-message").style.display = "block";
	}

password.onblur = function() {
		document.getElementById("password-message").style.display = "none";
	}

password.onkeyup = function(){

	var uppercases = /[a-z]/g;
	if (password.value.match(uppercases)){
		uppercase.classList.remove("invalid");
		uppercase.classList.add("valid");
	}else{
		uppercase.classList.remove("valid");
		uppercase.classList.add("invalid");
	}

	var lowercases = /[A-Z]/g;
	if (password.value.match(lowercases)){
		lowercase.classList.remove("invalid");
		lowercase.classList.add("valid");
	}else{
		lowercase.classList.remove("valid");
		lowercase.classList.add("invalid");
	}


	var numbers = /[0-9]/g;
	if (password.value.match(numbers)){
		digit.classList.remove("invalid");
		digit.classList.add("valid");
	}else{
		digit.classList.remove("valid");
		digit.classList.add("invalid");
	}

	if((password.value.length >= 8) && (password.value.length <= 20)) {
			lengths.classList.remove("invalid");
			lengths.classList.add("valid");
		}else{
			lengths.classList.remove("valid");
			lengths.classList.add("invalid");
		}
}



	function validation(){
		

		var firstname = document.getElementById("firstname").value;
		var lastname = document.getElementById("lastname").value;
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		var confirmpassword = document.getElementById("confirmpassword").value;
		var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		


		


		if(firstname === "" || lastname === ""){
			document.getElementById("erro").innerHTML = "**Please fill in both first and last name**";
			return false;
		}

		if(!isNaN(firstname) || !isNaN(firstname)){
			document.getElementById("erro").innerHTML = "**Name cannot be only numbers or digits**";
			return false;
		}

		if(firstname.length<3 || lastname.length<3 || firstname.length>15 || lastname.length>15 ){
			document.getElementById("erro").innerHTML = "**name must be between 3-15 characters**";
			return false;
		}


		if(email === ""){
			document.getElementById("erro").innerHTML = "**Please fill in email**";
			return false;
		}

		if(email.length<8 || email.length>30){
			document.getElementById("erro").innerHTML = "**Email must be between 8 to 30 characters**";
			return false;
		}

		if(atpos<1 || dotpos<atpos+2 || dotpos+2>=length.email){
			document.getElementById("erro").innerHTML = "**Email erro: fill in email in proper format**";
			return false;
		}


		if(password === "" || confirmpassword === ""){
			document.getElementById("erro").innerHTML = "**Please fill in both password**";
			return false;
		}

		if(password != confirmpassword){
			document.getElementById("erro").innerHTML = "**Both password have to much**";
			return false;
		}

		var incorrect = /[a-zA-Z][0-9]/g;
		if(password.match(incorrect)){
			return true;
		}else{
			document.getElementById("erro").innerHTML = "**incorrect password**";
			return false;
		}

		

}


var confirmpassword = document.getElementById("confirmpassword");

confirmpassword.onfocus = function() {
		document.getElementById("password-message").style.display = "block";
	}

confirmpassword.onblur = function() {
		document.getElementById("password-message").style.display = "none";
	}

confirmpassword.onkeyup = function(){

	var uppercases = /[a-z]/g;
	if (confirmpassword.value.match(uppercases)){
		uppercase.classList.remove("invalid");
		uppercase.classList.add("valid");
	}else{
		uppercase.classList.remove("valid");
		uppercase.classList.add("invalid");
	}

	var lowercases = /[A-Z]/g;
	if (confirmpassword.value.match(lowercases)){
		lowercase.classList.remove("invalid");
		lowercase.classList.add("valid");
	}else{
		lowercase.classList.remove("valid");
		lowercase.classList.add("invalid");
	}


	var numbers = /[0-9]/g;
	if (confirmpassword.value.match(numbers)){
		digit.classList.remove("invalid");
		digit.classList.add("valid");
	}else{
		digit.classList.remove("valid");
		digit.classList.add("invalid");
	}

	if((confirmpassword.value.length >= 8) && (confirmpassword.value.length <= 20)) {
			lengths.classList.remove("invalid");
			lengths.classList.add("valid");
		}else{
			lengths.classList.remove("valid");
			lengths.classList.add("invalid");
		}
}



	