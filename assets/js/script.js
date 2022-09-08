function Verify(){
	const InputName = document.getElementById('user');
	const InputMail = document.getElementById('mail');


	if(!InputName.checkValidity() ){
		InputName.style.background = "rgb(200,150,150)";
	}
	else{ 
		InputName.style = '';
	}
	if(InputMail.value == ''){
		InputMail.style.background = "rgb(200,150,150)";
	}
	else{
		InputMail.style = '';
	}
}