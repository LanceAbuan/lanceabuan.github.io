//Below is the script for the autogeneration text at the top left -->
var counter = 0;
var type_rate = Math.floor(Math.random() * 60)+60;
const phrases = ["Think Freely", "Work Hard", "Stay Creative", "Give Back", "Be Fearless", "Carpe Diem", "Live Risky", "Take Chances", "Conquer From Within", "Never Stop", "Keep Going", "Chase Your Dreams", "Prove Them Wrong", "Venture Forth", "Explore the Uncharted", "Ideas Matter", "Trust Yourself"];
var chosen_phrase = phrases[Math.floor(Math.random() * phrases.length)];
async function typing_effect(){
	if(counter < chosen_phrase.length){
		document.getElementById("phrase").innerHTML += chosen_phrase.charAt(counter);
		counter++;
		type_rate = Math.floor(Math.random() * 60)+60;
		setTimeout(typing_effect,type_rate);
	}else{
		await sleep(3500);
		backspace();
	}
} 	

async function backspace(){
	var type_rate = Math.floor(Math.random() * 50)+25;
	if(document.getElementById("phrase").innerHTML != ""){
		document.getElementById("phrase").innerHTML = document.getElementById("phrase").innerHTML.slice(0,-1);
		type_rate = Math.floor(Math.random() * 50)+25;
		setTimeout(backspace,type_rate);
	}else{
		chosen_phrase = phrases[Math.floor(Math.random() * phrases.length)];
		counter = 0;
		typing_effect();
	}			
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}
