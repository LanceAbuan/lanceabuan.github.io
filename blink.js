
async function blink_loading_screen(){
	document.getElementById("loading_screen_blinker").innerHTML = document.getElementById("loading_screen_blinker").innerHTML.slice(0,-1);
	await sleep(550);
	document.getElementById("loading_screen_blinker").innerHTML += "|";
	await sleep(550);
	blink();
}

async function blink_nav(){
	document.getElementById("blinker").innerHTML = document.getElementById("blinker").innerHTML.slice(0,-1);
	await sleep(550);
	document.getElementById("blinker").innerHTML += "|";
	await sleep(550);
	blink2();
}