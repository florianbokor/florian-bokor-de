/*
	Hilfs-.js für florian.bokor.de
*/

window.onresize = window.onload = function () {
	/* Fenstergröße abgreifen */
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	/* Unterscheiden ob landscape oder portrait */
	if (windowWidth >= windowHeight) {
		/* landscape */
		var vCardDivWidth = normalize(windowWidth / 2, 200, 800);
		var vCardDivHeight = Math.round(vCardDivWidth / 1.2);
		document.getElementById("vCardDiv").className = "landscape";
		/* Schriftgröße berechnen */
		var fontSize = normalize(vCardDivHeight / 20, 12, 48);
	} else {
		/* portrait */
		var vCardDivHeight = normalize(windowHeight / 2, 200, 800);
		var vCardDivWidth = Math.round(vCardDivHeight / 1.2);
		document.getElementById("vCardDiv").className = "portrait";
		/* Schriftgröße berechnen */
		var fontSize = normalize(vCardDivWidth / 20, 12, 48);
		}
	/* Ergebnisse ins DOM packen */
	document.getElementById("vCardDiv").style.width = vCardDivWidth + "px";
	document.getElementById("vCardDiv").style.height = vCardDivHeight + "px";
	document.getElementById("contactDiv").style.fontSize = fontSize + "px";
}
/* Grenzwerte */
function normalize(size, sizeMin, sizeMax) {
	if (size < sizeMin) {
		size = sizeMin;
	}
	else if (size > sizeMax) {
		size = sizeMax;
	}
	Math.round(size);
	return size;
}