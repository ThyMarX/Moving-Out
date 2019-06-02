// JavaScript Document

//Checkliste variablerne der indeholder html
let checkliste1 = `<h3>Alt</h3>
			<span id="checklisteClose" onClick="closeCheckliste()">&times;</span>
			<div class="center-content">
				<div class="checkliste-container">
					<ul class="checkliste">
						<li>  &#9634; Håndklæder </li> <li>  &#9634; Spejl </li> <li>  &#9634; Vægt </li> <li>  &#9634; Badeforhæng </li> <li>  &#9634; Toiletbørste </li> <li>  &#9634; Tandbørste-krus </li>

						<li>  &#9634; Bordlamper </li> <li>  &#9634; Seng </li> <li>  &#9634; Sengebord </li> <li>  &#9634; Lyspærer </li> <li>  &#9634; Planter </li> <li>  &#9634; Gardiner </li> <li>  &#9634; Puder </li> <li>  &#9634; Lagner </li> <li>  &#9634; Dyne </li> <li>  &#9634; Sengetøj </li> <li>  &#9634; Madras </li> <li>  &#9634; Garderobeskab </li> <li>  &#9634; Bøjler </li> <li>  &#9634; Knagerække til dør  </li>

						<li>  &#9634; Klude </li> <li>  &#9634; Viskestykker </li> <li>  &#9634; Opvaskesvamp </li> <li>  &#9634; Opvaskebørste </li> <li>  &#9634; Span </li> <li>  &#9634; Kost og fejebakke </li> <li>  &#9634; Gulvmoppe </li> <li>  &#9634; Støvsuger </li> <li>  &#9634; Støvsugerposer </li> <li>  &#9634; Vaskemaskine </li> 
					</ul>

					<ul class="checkliste">
						<li>  &#9634; Opvaskemaskine </li> <li>  &#9634; Vaskemiddel </li> <li>  &#9634; Groft filtersalt </li> <li>  &#9634; Spændingsmiddel </li> <li>  &#9634; Tørrestativ </li> <li>  &#9634; Tøjklemmer </li> <li>  &#9634; Vasketøjskurv </li>

						<li>  &#9634; Gryder og pander </li> <li>  &#9634; Køkkenredskaber </li> <li>  &#9634; Kopper </li> <li>  &#9634; Skåle </li> <li>  &#9634; Bestik </li> <li>  &#9634; Tallerkener </li> <li>  &#9634; Glas </li> <li>  &#9634; Vinglas </li> <li>  &#9634; Dåseåbner </li> <li>  &#9634; Mikrobølgeovn </li>

						<li>  &#9634; Gulvlamper </li> <li>  &#9634; Sofa </li> <li>  &#9634; Stole </li> <li>  &#9634; Spisebord </li> <li>  &#9634; Lyspærer </li> <li>  &#9634; Planter </li> <li>  &#9634; Billeder </li> <li>  &#9634; Skrivebord </li> <li>  &#9634; Skrivebordsstol </li> <li>  &#9634; Arbejdslampe </li> <li>  &#9634; Bogreol </li> <li>  &#9634; Hylder </li>
					</ul>
				</div>
			</div>`;
let checkliste2 = `<h3>Badeværelse</h3>
			<span id="checklisteClose" onClick="closeCheckliste()">&times;</span>
			<div class="center-content">
				<div class="checkliste-container">
					<ul class="checkliste">
						<li>  &#9634; Håndklæder </li> <li>  &#9634; Spejl </li> <li>  &#9634; Vægt </li> 
					</ul>

					<ul class="checkliste">
						<li>  &#9634; Badeforhæng </li> <li>  &#9634; Toiletbørste </li> <li>  &#9634; Tandbørste-krus </li> 
					</ul>
				</div>
			</div>`;
let checkliste3 = `<h3>Køkken</h3>
			<span id="checklisteClose" onClick="closeCheckliste()">&times;</span>
			<div class="center-content">
				<div class="checkliste-container">
					<ul class="checkliste">
						<li>  &#9634; Gryder og pander </li> <li>  &#9634; Køkkenredskaber </li> <li>  &#9634; Kopper </li> <li>  &#9634; Skåle </li> <li>  &#9634; Bestik </li>
					</ul>

					<ul class="checkliste"> 
						<li>  &#9634; Tallerkener </li> <li>  &#9634; Glas </li> <li>  &#9634; Vinglas </li> <li>  &#9634; Dåseåbner </li> <li>  &#9634; Mikrobølgeovn </li>
					</ul>
				</div>
			</div>`;
let checkliste4 = `<h3>Soveværelse</h3>
			<span id="checklisteClose" onClick="closeCheckliste()">&times;</span>
			<div class="center-content">
				<div class="checkliste-container">
					<ul class="checkliste">
						 <li>  &#9634; Lagner </li> <li>  &#9634; Dyne </li> <li>  &#9634; Sengetøj </li> <li>  &#9634; Madras </li> <li>  &#9634; Garderobeskab </li> <li>  &#9634; Bøjler </li> <li>  &#9634; Knagerække til dør  </li>
					</ul>

					<ul class="checkliste">
						<li>  &#9634; Bordlamper </li> <li>  &#9634; Seng </li> <li>  &#9634; Sengebord </li> <li>  &#9634; Lyspærer </li> <li>  &#9634; Planter </li> <li>  &#9634; Gardiner </li> <li>  &#9634; Puder </li>
					</ul>
				</div>
			</div>`;
let checkliste5 = `<h3>Stue</h3>
			<span id="checklisteClose" onClick="closeCheckliste()">&times;</span>
			<div class="center-content">
				<div class="checkliste-container">
					<ul class="checkliste">
						<li>  &#9634; Gulvlamper </li> <li>  &#9634; Sofa </li> <li>  &#9634; Stole </li> <li>  &#9634; Spisebord </li> <li>  &#9634; Lyspærer </li> <li>  &#9634; Planter </li> 
					</ul>

					<ul class="checkliste">
						<li>  &#9634; Billeder </li> <li>  &#9634; Skrivebord </li> <li>  &#9634; Skrivebordsstol </li> <li>  &#9634; Arbejdslampe </li> <li>  &#9634; Bogreol </li> <li>  &#9634; Hylder </li>
					</ul>
				</div>
			</div>`;
let checkliste6 = `<h3>Rengøring</h3>
			<span id="checklisteClose" onClick="closeCheckliste()">&times;</span>
			<div class="center-content">
				<div class="checkliste-container">
					<ul class="checkliste">
						<li>  &#9634; Kost og fejebakke </li> <li>  &#9634; Gulvmoppe </li> <li>  &#9634; Støvsuger </li> <li>  &#9634; Støvsugerposer </li> <li>  &#9634; Vaskemaskine </li> 
					</ul>

					<ul class="checkliste">
						<li>  &#9634; Klude </li> <li>  &#9634; Viskestykker </li> <li>  &#9634; Opvaskesvamp </li> <li>  &#9634; Opvaskebørste </li> <li>  &#9634; Span </li> 
					</ul>
				</div>
			</div>`;


// ---checkliste javascript----

// vi kalder på htmlen og laver variabler ud af dem
let checklisteKnap1 = document.getElementById('checkliste1');
let checklisteKnap2 = document.getElementById('checkliste2');
let checklisteKnap3 = document.getElementById('checkliste3');
let checklisteKnap4 = document.getElementById('checkliste4');
let checklisteKnap5 = document.getElementById('checkliste5');
let checklisteKnap6 = document.getElementById('checkliste6');
let checkListe = document.getElementById('checkliste');

// vi tilføjer en unik function til hver af "Læg i kurv" knapperne
checklisteKnap1.addEventListener("click", checkliste1Action);
checklisteKnap2.addEventListener("click", checkliste2Action);
checklisteKnap3.addEventListener("click", checkliste3Action);
checklisteKnap4.addEventListener("click", checkliste4Action);
checklisteKnap5.addEventListener("click", checkliste5Action);
checklisteKnap6.addEventListener("click", checkliste6Action);

function closeCheckliste(){
	checkListe.style.display = "none";
	document.getElementById("checkliste").innerHTML = "";
}
function checkliste1Action(){
	checkListe.style.display = "block";
	document.getElementById("checkliste").innerHTML = checkliste1;
}
function checkliste2Action(){
	checkListe.style.display = "block";
	document.getElementById("checkliste").innerHTML = checkliste2;
}
function checkliste3Action(){
	checkListe.style.display = "block";
	document.getElementById("checkliste").innerHTML = checkliste3;
}
function checkliste4Action(){
	checkListe.style.display = "block";
	document.getElementById("checkliste").innerHTML = checkliste4;
}
function checkliste5Action(){
	checkListe.style.display = "block";
	document.getElementById("checkliste").innerHTML = checkliste5;
}
function checkliste6Action(){
	checkListe.style.display = "block";
	document.getElementById("checkliste").innerHTML = checkliste6;
}


// ---10 råd js---
//laver variablen som bestemmer hvilken slide vi er på
let slideIndex = 1;
//kalder functionen til at vise det første slide når siden bliver loadet
showDivs(slideIndex);

//
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
//hvis n bliver højere end antal slides så sætter den sig på 1's plads
  if (n > x.length) {
	  slideIndex = 1
  }
	//hvis vi trykker på pil tilbage
  if (n < 1) {
	  slideIndex = x.length
  }
	//gemmer de andre slides
  for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";  
  }
	//viser det rigtige slide
  x[slideIndex-1].style.display = "block";  
}


// Get the modal
var tips = document.getElementById('tips');

// Get the button that opens the modal
var tipsBtn = document.getElementById("tipsBtn");

// get navbar so that doesn't fuck
var navbar = document.getElementById("navbar");

// Get the <span> element that closes the modal
var tipsSpan1 = document.getElementsByClassName("close")[0];
var tipsSpan2 = document.getElementsByClassName("close")[1];
var tipsSpan3 = document.getElementsByClassName("close")[2];
var tipsSpan4 = document.getElementsByClassName("close")[3];
var tipsSpan5 = document.getElementsByClassName("close")[4];
var tipsSpan6 = document.getElementsByClassName("close")[5];
var tipsSpan7 = document.getElementsByClassName("close")[6];
var tipsSpan8 = document.getElementsByClassName("close")[7];
var tipsSpan9 = document.getElementsByClassName("close")[8];
var tipsSpan10 = document.getElementsByClassName("close")[9];

// When the user clicks on the button, open the modal 
tipsBtn.onclick = function() {		tips.style.display = "block";	navbar.style.display = "none";  }

// When the user clicks on <span> (x), close the modal
tipsSpan1.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan2.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan3.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan4.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan5.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan6.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan7.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan8.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan9.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan10.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == tips) {		tips.style.display = "none";	navbar.style.display = "block"; } 
}