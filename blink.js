
async function blink(){
	document.getElementById("blinker").innerHTML += "|";
	await sleep(550);
	document.getElementById("blinker").innerHTML = document.getElementById("blinker").innerHTML.slice(0,-1);
	await sleep(550);
	blink();
}

