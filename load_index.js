//function that loads all functions
async function index_load(){
	if(sessionStorage.first_time == null){
		initial_screen();
	}else{
		hide_loading_screen();
	}
	carry_font(sessionStorage.getItem('font'));
	typing_effect();
	blink_loading_screen();
	blink_nav();
	map.resize();
}

