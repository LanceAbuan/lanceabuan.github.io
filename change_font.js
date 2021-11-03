//Below is the font changing script -->

function set_roboto(){
	var body_id = document.getElementById("body_id");
	body_id.style.fontFamily="Roboto Mono";
	sessionStorage.setItem('font', 'Roboto Mono');
}

function set_anon_pro(){
	var body_id = document.getElementById("body_id");
	body_id.style.fontFamily="Anonymous Pro";
	sessionStorage.setItem('font', 'Anonymous Pro');
}

function set_courier_prime(){	
	var body_id = document.getElementById("body_id");
	body_id.style.fontFamily="Courier Prime";
	sessionStorage.setItem('font', 'Courier Prime');
}
	
function set_ubuntu(){
	var body_id = document.getElementById("body_id");
	body_id.style.fontFamily="Ubuntu Mono";
	sessionStorage.setItem('font', 'Ubuntu');
}
