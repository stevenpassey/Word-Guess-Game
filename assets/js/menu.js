var menuActive = false;

function displayMenu()
{
	setTimeout("menuActive = true", 2300);

	//Show letter wheel
	document.getElementById("letter-circle").style.display = "block";
	document.getElementById("letter-circle").style.willChange = "transform";
	document.getElementById("letter-circle").style.animation = "letter-wheel-spin 40s linear infinite";
	setTimeout('document.getElementById("letter-wheel-text").style.opacity = "1"', 1230);

	//Show menu title
	document.getElementById("menu-title").style.display = "block";
	setTimeout('document.getElementById("menu-title").style.opacity = "1"', 1230);

	//Show menu title cover
	document.getElementById("menu-title-cover").style.display = "block";

	//Show Word Lists
	document.getElementById("landing-div-1").style.display = "block";
	document.getElementById("launch-div-1").style.display = "block";
	setTimeout('document.getElementById("landing-div-1").style.animation = "dropInZ 1s"', 1230);
	setTimeout('document.getElementById("landing-div-1").style.animationFillMode = "forwards"', 1230);
	setTimeout('document.getElementById("landing-div-1").style.animation = "none"', 2500);
	setTimeout('document.getElementById("landing-div-1").style.transform = "rotate3d(0,0,0,0deg)"', 2500);
	setTimeout('document.getElementById("launch-div-1").style.opacity = "1"', 2780);

	document.getElementById("landing-div-2").style.display = "block";
	document.getElementById("launch-div-2").style.display = "block";
	setTimeout('document.getElementById("landing-div-2").style.animation = "dropInZ 1s"', 1230);
	setTimeout('document.getElementById("landing-div-2").style.animationDelay = "250ms"', 1230);
	setTimeout('document.getElementById("landing-div-2").style.animationFillMode = "forwards"', 1230);
	setTimeout('document.getElementById("landing-div-2").style.animation = "none"', 2510);
	setTimeout('document.getElementById("landing-div-2").style.transform = "rotate3d(0,0,0,0deg)"', 2510);
	setTimeout('document.getElementById("launch-div-2").style.opacity = "1"', 2780);

	document.getElementById("landing-div-3").style.display = "block";
	document.getElementById("launch-div-3").style.display = "block";
	setTimeout('document.getElementById("landing-div-3").style.animation = "dropInZ 1s"', 1230);
	setTimeout('document.getElementById("landing-div-3").style.animationDelay = "500ms"', 1230);
	setTimeout('document.getElementById("landing-div-3").style.animationFillMode = "forwards"', 1230);
	setTimeout('document.getElementById("landing-div-3").style.animation = "none"', 2780);
	setTimeout('document.getElementById("landing-div-3").style.transform = "rotate3d(0,0,0,0deg)"', 2780);
	setTimeout('document.getElementById("launch-div-3").style.opacity = "1"', 2780);

	//Show Clip Covers
	setTimeout("document.getElementById('topClipCover').style.opacity = '1'", 12);
	setTimeout("document.getElementById('bottomClipCover').style.opacity = '1'", 12);
	setTimeout("document.getElementById('leftClipCover').style.opacity = '1'", 12);
	setTimeout("document.getElementById('rightClipCover').style.opacity = '1'", 12);

	//Change Clip Cover Color
	setTimeout("document.getElementById('topClipCover').style.backgroundColor = 'rgb(36,36,44)'", 12);
	setTimeout("document.getElementById('bottomClipCover').style.backgroundColor = 'rgb(36,36,44)'", 12);
	setTimeout("document.getElementById('leftClipCover').style.backgroundColor = 'rgb(36,36,44)'", 12);
	setTimeout("document.getElementById('rightClipCover').style.backgroundColor = 'rgb(36,36,44)'", 12);

	//Add shadows
	setTimeout("document.getElementById('borderCover').style.zIndex = '17'", 12);
	setTimeout("document.getElementById('borderCover').style.boxShadow = '0px 0px 15px rgb(18,18,26)'", 12);
	
	//addMenuEvents
	setTimeout('addMenuEvents()', 12);

	//Move Clipping Covers
	document.getElementById("topClipCover").style.height = ((document.getElementById("borderCover").offsetTop + borderY) < 0) ? "0px" : (document.getElementById("borderCover").offsetTop + borderY) + "px";
	document.getElementById("bottomClipCover").style.top = (document.getElementById("borderCover").offsetTop + (borderY + 2) + document.getElementById("borderCover").clientHeight) + "px";
	document.getElementById("bottomClipCover").style.height =  150 + "px";

	document.getElementById("leftClipCover").style.width = ((document.getElementById("borderCover").offsetLeft + borderX) < 0) ? "0px" : (document.getElementById("borderCover").offsetLeft + borderX) + "px";
	document.getElementById("rightClipCover").style.right = 0 + "px";
	document.getElementById("rightClipCover").style.width = ((window.innerWidth - document.getElementById("borderCover").getBoundingClientRect().right) < 0) ? "0px" : (window.innerWidth - document.getElementById("borderCover").getBoundingClientRect().right) + "px";
		
	//moveMenuTitle
	if(document.getElementById("landing-div-1").offsetTop <= 116)
	{
		document.getElementById("menu-title").style.top = "20px";
		document.getElementById("landing-div-2").style.top = "calc(50vh - ((50vh / 2) - 100px))";
		document.getElementById("landing-div-3").style.top = "calc(50vh - ((50vh / 2) - 280px))";
		document.getElementById("launch-div-2").style.top = "calc(50vh - ((50vh / 2) - 100px))";
		document.getElementById("launch-div-3").style.top = "calc(50vh - ((50vh / 2) - 280px))";
	}

}

function addMenuEvents()
{
	//Mouseover Events
	document.getElementById("landing-div-1").onmouseenter = document.getElementById("launch-div-1").onmouseenter = function() {
		document.getElementById("info-icon-1").style.color = "rgba(255,255,255, 1)";
		document.getElementById("info-icon-span-1").querySelector(".attempts-text").style.width = "55px";
		document.getElementById("info-icon-span-1").querySelector(".words-text").style.width = "40px";
		document.getElementById("launch-div-1").style.boxShadow = "rgba(18,18,26, 0.8) 0px 4px 15px";
		document.getElementById("launch-div-1").style.transform = "translateX(-55px)";
	};

	document.getElementById("landing-div-1").onmouseleave = document.getElementById("launch-div-1").onmouseleave = function() {
		document.getElementById("info-icon-1").style.color = "rgba(255,255,255, 0.6)";
		document.getElementById("info-icon-span-1").querySelector(".attempts-text").style.width = document.getElementById("info-icon-span-1").querySelector(".words-text").style.width = "0px";
		document.getElementById("launch-div-1").style.boxShadow = "rgba(18,18,26,0) 0px 4px 15px";
		document.getElementById("launch-div-1").style.transform = "translateX(0px)";
	};

	document.getElementById("landing-div-2").onmouseenter = document.getElementById("launch-div-2").onmouseenter = function() {
		document.getElementById("info-icon-2").style.color = "rgba(255,255,255, 1)";
		document.getElementById("info-icon-span-2").querySelector(".attempts-text").style.width = "55px";
		document.getElementById("info-icon-span-2").querySelector(".words-text").style.width = "40px";
		document.getElementById("launch-div-2").style.boxShadow = "rgba(18,18,26, 0.8) 0px 4px 15px";
		document.getElementById("launch-div-2").style.transform = "translateX(-55px)";
	};

	document.getElementById("landing-div-2").onmouseleave = document.getElementById("launch-div-2").onmouseleave = function() {
		document.getElementById("info-icon-2").style.color = "rgba(255,255,255, 0.6)";
		document.getElementById("info-icon-span-2").querySelector(".attempts-text").style.width = document.getElementById("info-icon-span-2").querySelector(".words-text").style.width = "0px";
		document.getElementById("launch-div-2").style.boxShadow = "rgba(18,18,26,0) 0px 4px 15px";
		document.getElementById("launch-div-2").style.transform = "translateX(0px)";
	};

	document.getElementById("landing-div-3").onmouseenter = document.getElementById("launch-div-3").onmouseenter = function() {
		document.getElementById("info-icon-3").style.color = "rgba(255,255,255, 1)";
		document.getElementById("info-icon-span-3").querySelector(".attempts-text").style.width = "55px";
		document.getElementById("info-icon-span-3").querySelector(".words-text").style.width = "40px";
		document.getElementById("launch-div-3").style.boxShadow = "rgba(18,18,26, 0.8) 0px 4px 15px";
		document.getElementById("launch-div-3").style.transform = "translateX(-55px)";
	};

	document.getElementById("landing-div-3").onmouseleave = document.getElementById("launch-div-3").onmouseleave = function() {
		document.getElementById("info-icon-3").style.color = "rgba(255,255,255, 0.6)";
		document.getElementById("info-icon-span-3").querySelector(".attempts-text").style.width = document.getElementById("info-icon-span-3").querySelector(".words-text").style.width = "0px";
		document.getElementById("launch-div-3").style.boxShadow = "rgba(18,18,26,0) 0px 4px 15px";
		document.getElementById("launch-div-3").style.transform = "translateX(0px)";
	};

	//Click Events
	document.querySelector("#launch-div-1 span").onclick = function () {
		document.getElementById("landing-div-1").style.transform = "translateX(-21vw)";
		document.getElementById("landing-div-1").style.height = "400px";
		document.getElementById("launch-div-1").style.opacity = "0";
		document.getElementById("launch-div-2").style.transform = "translateX(100vw)";
		document.getElementById("launch-div-3").style.transform = "translateX(100vw)";
		document.getElementById("landing-div-2").style.transform = "translateX(100vw)";
		document.getElementById("landing-div-3").style.transform = "translateX(100vw)";
		document.getElementById("landing-div-1").style.backgroundColor = "rgba(90,47,52, 0.2)";
		document.getElementById("letter-circle").style.animation="letter-wheel-spin-chosen-move 1s ease-out";	
		setTimeout('document.getElementById("letter-circle").style.animation="letter-wheel-spin-chosen 40s linear infinite"', 970);
		setTimeout('document.getElementById("letter-wheel-text").style.opacity = "0.2"', 300);

		//move letter-circle
		document.getElementById("letter-circle").style.transition="left 800ms";
		realWheel = ((window.innerWidth / 2 ) - 250) + "px";
		setTimeout('document.getElementById("letter-circle").style.left = realWheel', 130);
		setTimeout('document.getElementById("letter-circle").style.transition="none"', 830);
		
		//show mode selection window
		if(window.getComputedStyle(document.querySelector("#typist-button-1 .circle-holder-t")).getPropertyValue("background-color") != "rgb(23, 184, 232)")
		{
			setTimeout('document.getElementById("modeSelectionWindowH1").style.display = "block"', 970);
		}
		else
		{
			setTimeout('document.getElementById("modeSelectionWindowT1").style.display = "block"', 970);
		}

		//show the buttons
		setTimeout("document.getElementById('back-button-1').style.display = 'inline-block'", 970);
		setTimeout("document.getElementById('hangman-button-1').style.display = 'inline-block'", 970);
		setTimeout("document.getElementById('typist-button-1').style.display = 'inline-block'", 970);
		setTimeout("document.getElementById('play-button-1').style.display = 'inline-block'", 970);

	};

	document.getElementById('back-button-1').onclick = function () {
		
		document.getElementById("landing-div-1").style.transform = "translateX(0)";
		document.getElementById("landing-div-1").style.height = "125px";
		document.getElementById("launch-div-1").style.opacity = "1";
		setTimeout('document.getElementById("launch-div-2").style.transform = "translateX(0)"', 500);
		setTimeout('document.getElementById("launch-div-3").style.transform = "translateX(0)"', 500);;
		document.getElementById("landing-div-2").style.transform = "translateX(0)";
		document.getElementById("landing-div-3").style.transform = "translateX(0)";
		document.getElementById("landing-div-1").style.backgroundColor = "rgb(64,55,63)";
		setTimeout('document.getElementById("letter-wheel-text").style.opacity = "1"', 300);

		//move letter-circle back
		document.getElementById("letter-circle").style.transition="left 800ms";
		setTimeout('document.getElementById("letter-circle").style.left = "calc(5vw + " + ((wheelLeft + (borderX * 0.8)) + borderDeltaX) + "px)"', 130);
		setTimeout('document.getElementById("letter-circle").style.transition="none"', 830);
		
		//hide the mode selection window
		document.getElementById("modeSelectionWindowH1").style.display = "none";
		document.getElementById("modeSelectionWindowT1").style.display = "none";

		//hide the buttons
		document.getElementById('back-button-1').style.display = 'none';
		document.getElementById('hangman-button-1').style.display = 'none';
		document.getElementById('typist-button-1').style.display = 'none';
		document.getElementById('play-button-1').style.display = 'none';

	};

	document.getElementById('hangman-button-1').onclick = function () {
		document.getElementById("modeSelectionWindowH1").style.display = "block";
		document.getElementById("modeSelectionWindowT1").style.display = "none";
		document.querySelector("#hangman-button-1 .circle-holder-h").style.backgroundColor = "limegreen";
		document.querySelector("#typist-button-1 .circle-holder-t").style.backgroundColor = "rgb(57,100,60)";
	};

	document.getElementById('typist-button-1').onclick = function () {
		document.getElementById("modeSelectionWindowH1").style.display = "none";
		document.getElementById("modeSelectionWindowT1").style.display = "block";
		document.querySelector("#hangman-button-1 .circle-holder-h").style.backgroundColor = "rgb(100,57,62)";
		document.querySelector("#typist-button-1 .circle-holder-t").style.backgroundColor = "rgb(23,184,232)";
	};

	document.getElementById('play-button-1').onclick = function () {

		document.getElementById('play-button-1').disabled = "disabled";
		
		for ( var v = 0; v < 9; v=v+1 ) //raise z-index for transition reuse
		{
			document.getElementById(squareIdArray[v]).style.zIndex = '50';
		}
		document.getElementById("landing-div-1").style.transform = "translateX(100vw)";
		document.getElementById("menu-title-cover").style.opacity = "0";
		document.getElementById("menu-title").style.opacity = "0";
		document.getElementById("letter-wheel-text").style.opacity = "0";
		
		setTimeout("menuActive=false", 1500);
		setTimeout("document.getElementById('borderCover').style.display='none'", 1500);
		setTimeout("document.getElementById('topClipCover').style.display='none'", 1500);
		setTimeout("document.getElementById('bottomClipCover').style.display='none'", 1500);
		setTimeout("document.getElementById('leftClipCover').style.display='none'", 1500);
		setTimeout("document.getElementById('rightClipCover').style.display='none'", 1500);
		setTimeout('document.getElementById("letter-circle").style.animation=""', 1500);
		
		setTimeout("playTransition('rgb(64,55,63)')", 1000);
		if(window.getComputedStyle(document.querySelector("#typist-button-1 .circle-holder-t")).getPropertyValue("background-color") !== "rgb(23, 184, 232)")
		{
			setTimeout("startLogic('h', 'list1')", 1900);
		}
		else
		{
			setTimeout("startLogic('t', 'list1')", 1900);
		}
	};

	document.querySelector("#launch-div-2 span").onclick = function () {
		document.getElementById("landing-div-2").style.top = document.getElementById("launch-div-2").style.top = document.getElementById("landing-div-1").offsetTop + "px"
		document.getElementById("launch-div-2").style.opacity = "0";
		document.getElementById("launch-div-1").style.transform = "translateX(100vw)";
		document.getElementById("launch-div-3").style.transform = "translateX(100vw)";
		document.getElementById("landing-div-1").style.transform = "translateX(100vw)";
		document.getElementById("landing-div-3").style.transform = "translateX(100vw)";
		setTimeout("launch2delay()", 1000);

	};

	document.getElementById('back-button-2').onclick = function () {
		
		document.getElementById("landing-div-2").style.transform = "translateX(0)";
		document.getElementById("landing-div-2").style.height = "125px";
		document.getElementById("launch-div-2").style.opacity = "1";
		setTimeout('document.getElementById("launch-div-1").style.transform = "translateX(0)"', 500);
		setTimeout('document.getElementById("launch-div-3").style.transform = "translateX(0)"', 500);;
		document.getElementById("landing-div-1").style.transform = "translateX(0)";
		document.getElementById("landing-div-3").style.transform = "translateX(0)";
		document.getElementById("landing-div-2").style.backgroundColor = "rgb(64,55,71)";
		setTimeout('document.getElementById("letter-wheel-text").style.opacity = "1"', 300);

		//move letter-circle back
		document.getElementById("letter-circle").style.transition="left 800ms";
		setTimeout('document.getElementById("letter-circle").style.left = "calc(5vw + " + ((wheelLeft + (borderX * 0.8)) + borderDeltaX) + "px)"', 130);
		setTimeout('document.getElementById("letter-circle").style.transition="none"', 830);
		
		//hide the mode selection window
		document.getElementById("modeSelectionWindowH2").style.display = "none";
		document.getElementById("modeSelectionWindowT2").style.display = "none";

		//hide the buttons
		document.getElementById('back-button-2').style.display = 'none';
		document.getElementById('hangman-button-2').style.display = 'none';
		document.getElementById('typist-button-2').style.display = 'none';
		document.getElementById('play-button-2').style.display = 'none';

		//move the div
		if(document.getElementById("landing-div-1").offsetTop <= 116)
		{
			document.getElementById("landing-div-2").style.top = "calc(50vh - ((50vh / 2) - 100px))";
			document.getElementById("launch-div-2").style.top = "calc(50vh - ((50vh / 2) - 100px))";
		}
		else
		{
			document.getElementById("landing-div-2").style.top = "calc(50vh - ((50vh / 2) - 110px))";
			document.getElementById("launch-div-2").style.top = "calc(50vh - ((50vh / 2) - 110px))";
		}

	};

	document.getElementById('hangman-button-2').onclick = function () {
		document.getElementById("modeSelectionWindowH2").style.display = "block";
		document.getElementById("modeSelectionWindowT2").style.display = "none";
		document.querySelector("#hangman-button-2 .circle-holder-h").style.backgroundColor = "limegreen";
		document.querySelector("#typist-button-2 .circle-holder-t").style.backgroundColor = "rgb(57,100,60)";
	};

	document.getElementById('typist-button-2').onclick = function () {
		document.getElementById("modeSelectionWindowH2").style.display = "none";
		document.getElementById("modeSelectionWindowT2").style.display = "block";
		document.querySelector("#hangman-button-2 .circle-holder-h").style.backgroundColor = "rgb(100,57,62)";
		document.querySelector("#typist-button-2 .circle-holder-t").style.backgroundColor = "rgb(23,184,232)";
	};



	document.querySelector("#launch-div-3 span").onclick = function () {
		document.getElementById("landing-div-3").style.top = document.getElementById("launch-div-3").style.top = document.getElementById("landing-div-1").offsetTop + "px"
		document.getElementById("launch-div-3").style.opacity = "0";
		document.getElementById("launch-div-2").style.transform = "translateX(100vw)";
		document.getElementById("launch-div-1").style.transform = "translateX(100vw)";
		document.getElementById("landing-div-1").style.transform = "translateX(100vw)";
		document.getElementById("landing-div-2").style.transform = "translateX(100vw)";
		setTimeout("launch3delay()", 1000);
	};

	document.getElementById('back-button-3').onclick = function () {
		
		document.getElementById("landing-div-3").style.transform = "translateX(0)";
		document.getElementById("landing-div-3").style.height = "125px";
		document.getElementById("launch-div-3").style.opacity = "1";
		setTimeout('document.getElementById("launch-div-1").style.transform = "translateX(0)"', 500);
		setTimeout('document.getElementById("launch-div-2").style.transform = "translateX(0)"', 500);;
		document.getElementById("landing-div-1").style.transform = "translateX(0)";
		document.getElementById("landing-div-2").style.transform = "translateX(0)";
		document.getElementById("landing-div-3").style.backgroundColor = "rgb(64,55,79)";
		setTimeout('document.getElementById("letter-wheel-text").style.opacity = "1"', 300);

		//move letter-circle back
		document.getElementById("letter-circle").style.transition="left 800ms";
		setTimeout('document.getElementById("letter-circle").style.left = "calc(5vw + " + ((wheelLeft + (borderX * 0.8)) + borderDeltaX) + "px)"', 130);
		setTimeout('document.getElementById("letter-circle").style.transition="none"', 830);
		
		//hide the mode selection window
		document.getElementById("modeSelectionWindowH3").style.display = "none";
		document.getElementById("modeSelectionWindowT3").style.display = "none";

		//hide the buttons
		document.getElementById('back-button-3').style.display = 'none';
		document.getElementById('hangman-button-3').style.display = 'none';
		document.getElementById('typist-button-3').style.display = 'none';
		document.getElementById('play-button-3').style.display = 'none';

		//move the div
		if(document.getElementById("landing-div-1").offsetTop <= 116)
		{
			document.getElementById("landing-div-3").style.top = "calc(50vh - ((50vh / 2) - 280px))";
			document.getElementById("launch-div-3").style.top = "calc(50vh - ((50vh / 2) - 280px))";
		}
		else
		{
			document.getElementById("landing-div-3").style.top = "calc(50vh - ((50vh / 2) - 300px))";
			document.getElementById("launch-div-3").style.top = "calc(50vh - ((50vh / 2) - 300px))";
		}
	};

	
	document.getElementById('hangman-button-3').onclick = function () {
		document.getElementById("modeSelectionWindowH3").style.display = "block";
		document.getElementById("modeSelectionWindowT3").style.display = "none";
		document.querySelector("#hangman-button-3 .circle-holder-h").style.backgroundColor = "limegreen";
		document.querySelector("#typist-button-3 .circle-holder-t").style.backgroundColor = "rgb(57,100,60)";
	};

	document.getElementById('typist-button-3').onclick = function () {
		document.getElementById("modeSelectionWindowH3").style.display = "none";
		document.getElementById("modeSelectionWindowT3").style.display = "block";
		document.querySelector("#hangman-button-3 .circle-holder-h").style.backgroundColor = "rgb(100,57,62)";
		document.querySelector("#typist-button-3 .circle-holder-t").style.backgroundColor = "rgb(23,184,232)";
	};
}

function launch2delay()
{
	document.getElementById("landing-div-2").style.transform = "translateX(-21vw)";
	document.getElementById("landing-div-2").style.height = "400px";
	document.getElementById("landing-div-2").style.backgroundColor = "rgba(90,47,92, 0.2)";
	document.getElementById("letter-circle").style.animation="letter-wheel-spin-chosen-move 1s ease-out";	
	setTimeout('document.getElementById("letter-circle").style.animation="letter-wheel-spin-chosen 40s linear infinite"', 970);
	setTimeout('document.getElementById("letter-wheel-text").style.opacity = "0.2"', 300);

	//move letter-circle
	document.getElementById("letter-circle").style.transition="left 800ms";
	realWheel = ((window.innerWidth / 2 ) - 250) + "px";
	setTimeout('document.getElementById("letter-circle").style.left = realWheel', 130);
	setTimeout('document.getElementById("letter-circle").style.transition="none"', 830);

	//show mode selection window
	if(window.getComputedStyle(document.querySelector("#typist-button-2 .circle-holder-t")).getPropertyValue("background-color") !== "rgb(23, 184, 232)")
	{
		setTimeout('document.getElementById("modeSelectionWindowH2").style.display = "block"', 970);
	}
	else
	{
		setTimeout('document.getElementById("modeSelectionWindowT2").style.display = "block"', 970);
	}

	//show the buttons
	setTimeout("document.getElementById('back-button-2').style.display = 'inline-block'", 970);
	setTimeout("document.getElementById('hangman-button-2').style.display = 'inline-block'", 970);
	setTimeout("document.getElementById('typist-button-2').style.display = 'inline-block'", 970);
	setTimeout("document.getElementById('play-button-2').style.display = 'inline-block'", 970);
}

function launch3delay()
{
	document.getElementById("landing-div-3").style.transform = "translateX(-21vw)";
	document.getElementById("landing-div-3").style.height = "400px";
	document.getElementById("landing-div-3").style.backgroundColor = "rgba(90,47,132, 0.2)";
	document.getElementById("letter-circle").style.animation="letter-wheel-spin-chosen-move 1s ease-out";	
	setTimeout('document.getElementById("letter-circle").style.animation="letter-wheel-spin-chosen 40s linear infinite"', 970);
	setTimeout('document.getElementById("letter-wheel-text").style.opacity = "0.2"', 300);

	//move letter-circle
	document.getElementById("letter-circle").style.transition="left 800ms";
	realWheel = ((window.innerWidth / 2 ) - 250) + "px";
	setTimeout('document.getElementById("letter-circle").style.left = realWheel', 130);
	setTimeout('document.getElementById("letter-circle").style.transition="none"', 830);

	//show mode selection window
	if(window.getComputedStyle(document.querySelector("#typist-button-3 .circle-holder-t")).getPropertyValue("background-color") !== "rgb(23, 184, 232)")
	{
		setTimeout('document.getElementById("modeSelectionWindowH3").style.display = "block"', 970);
	}
	else
	{
		setTimeout('document.getElementById("modeSelectionWindowT3").style.display = "block"', 970);
	}

	//show the buttons
	setTimeout("document.getElementById('back-button-3').style.display = 'inline-block'", 970);
	setTimeout("document.getElementById('hangman-button-3').style.display = 'inline-block'", 970);
	setTimeout("document.getElementById('typist-button-3').style.display = 'inline-block'", 970);
	setTimeout("document.getElementById('play-button-3').style.display = 'inline-block'", 970);
}
