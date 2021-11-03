function run_both(){
	set_first_time();
	initial_screen();
}

function set_first_time(){
	sessionStorage.setItem("first_time", "true");
}

function initial_screen(){
	var loading_screen = document.getElementById("loading_screen");
	var main_page = document.getElementById("main_page");
	
	if(sessionStorage.first_time  == "true"){
		main_page.style.display = "block";
		loading_screen.style.display = "none";
		sessionStorage.setItem("first_time", "false");
	}
	
}

function hide_loading_screen(){
	
	main_page.style.display = "block";
	loading_screen.style.display = "none";
	sessionStorage.setItem("first_time", "false");
	
}