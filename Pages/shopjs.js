// JavaScript Document


// ---Varer modals
// Get the modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');
var modal6 = document.getElementById('myModal6');

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];

// get navbar so that doesn't fuck
var navbar = document.getElementById("navbar");

// When the user clicks on the button, open the modal 
btn1.onclick = function() {		modal1.style.display = "block";	navbar.style.display = "none";	}
btn2.onclick = function() {		modal2.style.display = "block";	navbar.style.display = "none";	}
btn3.onclick = function() {		modal3.style.display = "block";	navbar.style.display = "none";	}
btn4.onclick = function() {		modal4.style.display = "block";	navbar.style.display = "none";	}
btn5.onclick = function() {		modal5.style.display = "block";	navbar.style.display = "none";	}
btn6.onclick = function() {		modal6.style.display = "block";	navbar.style.display = "none";	}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {	modal1.style.display = "none";	navbar.style.display = "block";	}
span2.onclick = function() {	modal2.style.display = "none";	navbar.style.display = "block";	}
span3.onclick = function() {	modal3.style.display = "none";	navbar.style.display = "block";	}
span4.onclick = function() {	modal4.style.display = "none";	navbar.style.display = "block";	}
span5.onclick = function() {	modal5.style.display = "none";	navbar.style.display = "block";	}
span6.onclick = function() {	modal6.style.display = "none";	navbar.style.display = "block";	}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {	modal1.style.display = "none";	navbar.style.display = "block";	} 
  if (event.target == modal2) {	modal2.style.display = "none";	navbar.style.display = "block";	} 
  if (event.target == modal3) {	modal3.style.display = "none";	navbar.style.display = "block";	} 
  if (event.target == modal4) {	modal4.style.display = "none";	navbar.style.display = "block";	} 
  if (event.target == modal5) {	modal5.style.display = "none";	navbar.style.display = "block";	} 
  if (event.target == modal6) {	modal6.style.display = "none";	navbar.style.display = "block";	} 
  if (event.target == kurvModal) {
	  kurvModal.style.display = "none";
	  document.getElementById("kurv-liste").innerHTML = '<div class="kurv-liste1" id="vare"> <h4 class="left-text">Vare</h4> <br class="line-height"> </div>   <div class="kurv-liste2" id="pris"> <h4 class="left-text">Pris</h4> <br class="line-height"> </div>  <div class="kurv-liste2" id="stk"> <h4 class="left-text">Stk</h4> <br class="line-height"> </div>';
	  document.getElementById("total-pris").innerHTML = "Total price: ";
	  navbar.style.display = "block";	
  }
  if (event.target == betalModal) {
	  betalModal.style.display = "none";
  }
}




// -----Kurv feature----
// ---Kurv Modal---
// Få modalens id 
var kurvModal = document.getElementById('kurvModal');

// Få id på knappens åbner modalet
var kurv = document.getElementById("kurv");

// Få <span> elementet (krydset) som lukker modalet
var kurvClose = document.getElementsByClassName("close")[6];

// Funktionen som når man klikker på kurv knappen åbner man modalet 
kurv.onclick = function() {
 	kurvModal.style.display = "block"; 
	navbar.style.display = "none";
}

// Funktionen som gør at når man klikker på krydset så lukker modalet
kurvClose.onclick = function() {
	kurvModal.style.display = "none";
	document.getElementById("kurv-liste").innerHTML = '<div class="kurv-liste1" id="vare"> <h4 class="left-text">Vare</h4> <br class="line-height"> </div>   <div class="kurv-liste2" id="pris"> <h4 class="left-text">Pris</h4> <br class="line-height"> </div>  <div class="kurv-liste2" id="stk"> <h4 class="left-text">Stk</h4> <br class="line-height"> </div>';
	document.getElementById("total-pris").innerHTML = "Total price: ";
	navbar.style.display = "block";
}


// ---Kurv---
// arrayet som fortæller vores kurv hvor mange vare der er blevet tilføjet
let products = [0, 0, 0, 0, 0, 0];

// vi kalder på htmlen og laver variabler ud af dem
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');
let item6 = document.getElementById('item6');

// vi tilføjer en unik function til hver af "Læg i kurv" knapperne
item1.addEventListener("click", item1Action);
item2.addEventListener("click", item2Action);
item3.addEventListener("click", item3Action);
item4.addEventListener("click", item4Action);
item5.addEventListener("click", item5Action);
item6.addEventListener("click", item6Action);

// Den bestemte function for hver af knapperne
function item1Action(){ 
	count(0); //vi kalder på functionen count og tilføjer et stk af varen til kurven
	item1.style.animation = "spin 0.5s linear"; //vi spiller knappens animation
	setTimeout(function(){ removeClass(item1)}, 500); //vi kalder på functionen removeClass først efter animationen er færdig
}
function item2Action(){ 
	count(1);
	item2.style.animation = "spin 0.5s linear";
	setTimeout(function(){ removeClass(item2)}, 500);
}
function item3Action(){ 
	count(2);
	item3.style.animation = "spin 0.5s linear";
	setTimeout(function(){ removeClass(item3)}, 500);
}
function item4Action(){ 
	count(3);
	item4.style.animation = "spin 0.5s linear";
	setTimeout(function(){ removeClass(item4)}, 500);
}
function item5Action(){ 
	count(4);
	item5.style.animation = "spin 0.5s linear";
	setTimeout(function(){ removeClass(item5)}, 500);
}
function item6Action(){ 
	count(5);
	item6.style.animation = "spin 0.5s linear";
	setTimeout(function(){ removeClass(item6)}, 500);
}

// functionen som tilføjer varen til kurven
function count(product) {
	products[product] += 1; //tilføjelsen sker her
	kurv.style.animation = "enlarge 0.5s linear"; //afspil kruvens animation
}

// functionen som fjerne animation classes fra knapperne, hvilket gør at animationen kan spilles igen når vi klikker igen
function removeClass(a){
	a.style.animation = "";
	kurv.style.animation = "";
}

// når vi trykker på kurv knappen kalder vi på functionen visKurv
kurv.addEventListener("click", visKurv);

// functionen gør at varene bliver vist i kurv modalet
function visKurv(){
	let totalPris = 0; //vi laver en samlet pris
	if(products[0] > 0){ //en if statement som tjekker om der er blevet trykket på "Læg i kurv" knappen for vare1 og hvis der er bliver varen tilføjet til kurven
		document.getElementById("vare").innerHTML += "Pakke 1 <br class='line-height'>"; //her skal der ændres på navnet
		document.getElementById("pris").innerHTML += "165 dkk <br class='line-height'>"; //her skal der ændres på prisen
		document.getElementById("stk").innerHTML += products[0] + "<br class='line-height'>";
		totalPris += 165 * products[0]; //her skal der ændres på prisen igen
	}
	if(products[1] > 0){
		document.getElementById("vare").innerHTML += "Pakke 2 <br class='line-height'>"; 
		document.getElementById("pris").innerHTML += "292dkk <br class='line-height'>"; 
		document.getElementById("stk").innerHTML += products[1] + "<br class='line-height'>";
		totalPris += 292 * products[1]; 
	}
	if(products[2] > 0){
		document.getElementById("vare").innerHTML += "Pakke 3 <br class='line-height'>";
		document.getElementById("pris").innerHTML += "1070 dkk <br class='line-height'>";
		document.getElementById("stk").innerHTML += products[2] + "<br class='line-height'>";
		totalPris += 1070 * products[2];
	}
	if(products[3] > 0){
		document.getElementById("vare").innerHTML += "Pakke 4 <br class='line-height'>";
		document.getElementById("pris").innerHTML += "239 dkk <br class='line-height'>";
		document.getElementById("stk").innerHTML += products[3] + "<br class='line-height'>";
		totalPris += 239 * products[3];
	}
	if(products[4] > 0){
		document.getElementById("vare").innerHTML += "Pakke 5 <br class='line-height'>";
		document.getElementById("pris").innerHTML += "1502 dkk <br class='line-height'>";
		document.getElementById("stk").innerHTML += products[4] + "<br class='line-height'>";
		totalPris += 1502 * products[4];
	}
	if(products[5] > 0){
		document.getElementById("vare").innerHTML += "Abonnement <br class='line-height'>";
		document.getElementById("pris").innerHTML += "222 dkk <br class='line-height'>";
		document.getElementById("stk").innerHTML += products[5] + "<br class='line-height'>";
		totalPris += 222 * products[5];
	}

	// hvis kurven er tom
	if(products[0] == 0 && products[1] == 0 && products[2] == 0 && products[3] == 0 && products[4] == 0 && products[5] == 0 ){
		document.getElementById("kurv-liste").innerHTML = "Kurven er tom";
	}

	// vis den totalle pris
	document.getElementById("total-pris").innerHTML += totalPris + " dkk";
}

//tom kurv knap
let tomKurvKnap = document.getElementById('tom-kurv');
tomKurvKnap.addEventListener("click", tomKurv);
function tomKurv(){
	products = [0, 0, 0, 0, 0, 0];
	document.getElementById("kurv-liste").innerHTML = "Kurven er tom";
	document.getElementById("total-pris").innerHTML = "TOTAL PRICE: 0 DKK";
}

// ---Betaling Modal---
// Get the modal
var betalModal = document.getElementById('betalModal');

// Get the button that opens the modal
var betal = document.getElementById("betalling");

// Get the <span> element that closes the modal
var betalClose = document.getElementsByClassName("close")[7];

// When the user clicks on the button, open the modal 
betal.onclick = function() {
	// hvis kurven er tom giver det ingen mening at kunne åbne betal modalet
	if(products[0] == 0 && products[1] == 0 && products[2] == 0 && products[3] == 0 && products[4] == 0 && products[5] == 0 ){
		alert("Kurven er tom");
	} else {
		betalModal.style.display = "block";
	}
}

// When the user clicks on <span> (x), close the modal
betalClose.onclick = function() {
	betalModal.style.display = "none";
}

let betalKnap = document.getElementById("betal");
betalKnap.addEventListener("click", betalt);
function betalt(){
	alert("Din betaling gik igennem");
	kurvModal.style.display = "none";
	document.getElementById("kurv-liste").innerHTML = '<div class="kurv-liste1" id="vare"> <h4 class="left-text">Vare</h4> <br class="line-height"> </div>   <div class="kurv-liste2" id="pris"> <h4 class="left-text">Pris</h4> <br class="line-height"> </div>  <div class="kurv-liste2" id="stk"> <h4 class="left-text">Stk</h4> <br class="line-height"> </div>';
	document.getElementById("total-pris").innerHTML = "Total price: ";
	betalModal.style.display = "none";
	products = [0, 0, 0, 0, 0, 0];
	navbar.style.display = "block";
}




	
	
	
	
	