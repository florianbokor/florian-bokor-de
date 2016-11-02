/*
	Hilfs-.js für florian.bokor.de
*/

/*
	Funktionen
*/

/* Wenn alles geladen ist … */
window.onload = function () { 
	vCardDivSizer ();
}

/* Den Hauptcontent rezisen */
function vCardDivSizer() {
	/* Fentstergröße abgreifen */
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	/* Bestimmen welche Seite länger ist */
	if (windowWidth >= windowHeight) {
		var sides = [windowWidth, windowHeight];
	} else {
		var sides = [windowHeight, windowWidth]
	}
	/* ausrechnen wie lang die lange Kante der Karte ist */
	sides[0] = sides[0] / 3;
	sides[1] = sides[0] / 1.6;
	/* Limeswerte setzen */
	if (sides[0] < 200) {
		sides[0] = 200;
	}
	if (sides[0] > 400) {
		sides[0] = 400;
	}
	/* runden und mit Pixeln versehen */
	var cardWidth = Math.round(sides[0]) + "px";
	var cardHeight = Math.round(sides[1]) + "px";
	document.getElementById("vCardDiv").style.width = cardWidth;
	document.getElementById("vCardDiv").style.height = cardHeight;

	alert("sides[0] = " + sides[0] + "sides[1]" + sides[1]);
}
