var squareIdArray = [];
var squareRowXArray = [];
var squareRowYArray = [];
var coverIdArray = [];

var mouseX = 0, mouseY = 0;
var started = true;

var peekStarted = false;
var checkedBanners = false;
var capturedMouseX = 0, capturedMouseY = 0;

var borderDeltaX = 0, borderDeltaY = 0;
var startDeltaX = 0, startDeltaY = 0;
var circleDeltaX = 0, circleDeltaY = 0;
var buttonStartX = 0, buttonStartY = 0;
var labelStartX = 0, labelStartY = 0;
var borderX = 0, borderY = 0;

var arrow1StartX = 0, arrow1StartY = 0;
var arrow2StartX = 0, arrow2StartY = 0;
var arrow3StartX = 0, arrow3StartY = 0;

var surfaceDrawn = false;

var capturedWindowWidth = 0, capturedWindowHeight = 0;

//Menu Variables
var landingLeft = 0;
var wheelLeft = 0;
var realWheel = 0;

window.onload = function () { 
	
	capturedWindowWidth = window.innerWidth;
	capturedWindowHeight = window.innerHeight;

	document.getElementById("load-circle").onmouseenter = drawSurfaces;
	window.onresize = moveArrows;

	//move borderCover to center
	document.getElementById("borderCover").style.left = (window.innerWidth / 2) - (document.getElementById("borderCover").clientWidth / 2) + "px";
	document.getElementById("borderCover").style.top = (window.innerHeight / 2) - (document.getElementById("borderCover").clientHeight / 2) + "px";
	
	//Get distance of border from viewport edges
	borderDeltaX = 0 - parseInt(document.getElementById("borderCover").style.left);
	borderDeltaY = 0 - parseInt(document.getElementById("borderCover").style.top);

	//Get initial starting point of the start button
	buttonStartX = parseInt(document.getElementById("borderCover").style.left);
	buttonStartY = parseInt(document.getElementById("borderCover").style.top);

	//Get initial starting point of the start label
	labelStartX = parseInt(document.getElementById("startText").offsetLeft);
	labelStartY = parseInt(document.getElementById("startText").offsetTop);

	//Get initial starting point of the arrows
	arrow1StartX = parseInt(document.getElementById("arrow-1").offsetLeft);
	arrow1StartY = parseInt(document.getElementById("arrow-1").offsetTop);
	arrow2StartX = parseInt(document.getElementById("arrow-2").offsetLeft);
	arrow2StartY = parseInt(document.getElementById("arrow-2").offsetTop);
	arrow3StartX = parseInt(document.getElementById("arrow-3").offsetLeft);
	arrow3StartY = parseInt(document.getElementById("arrow-3").offsetTop);

	//Draw Border Logic
	document.getElementById("borderDraw-1").style.top = document.getElementById("borderCover").offsetTop + "px";
	document.getElementById("borderDraw-1").style.width = document.getElementById("borderCover").clientWidth + 100 + "px";
	document.getElementById("borderDraw-1").style.left = document.getElementById("borderCover").clientLeft + "px";

	document.getElementById("borderDraw-2").style.height = document.getElementById("borderCover").clientHeight + 5 + "px";	
	document.getElementById("borderDraw-2").style.top = document.getElementById("borderCover").offsetTop + "px";
	document.getElementById("borderDraw-2").style.left = document.getElementById("borderCover").offsetLeft + document.getElementById("borderCover").clientWidth + 1 + "px";
	
	document.getElementById("borderDraw-3").style.top = document.getElementById("borderCover").offsetTop + document.getElementById("borderCover").clientHeight + 1 + "px";
	document.getElementById("borderDraw-3").style.width = document.getElementById("borderCover").clientWidth + 5 + "px";
	document.getElementById("borderDraw-3").style.left = document.getElementById("borderCover").offsetLeft  + "px";

	document.getElementById("borderDraw-4").style.height = document.getElementById("borderCover").clientHeight + 5 + "px";	
	document.getElementById("borderDraw-4").style.top = document.getElementById("borderCover").offsetTop + "px";
	document.getElementById("borderDraw-4").style.left = document.getElementById("borderCover").offsetLeft +  "px";
	//End Border Logic

	//menuMove
	landingLeft = window.innerWidth > 1366 ? ((100 / 554) * (window.innerWidth - 1366)) : 0;
	document.getElementById("landing-div-1").style.left = "calc(50vw + " + landingLeft + "px)"; 
	document.getElementById("landing-div-2").style.left = "calc(50vw + " + landingLeft + "px)"; 
	document.getElementById("landing-div-3").style.left = "calc(50vw + " + landingLeft + "px)"; 
	document.getElementById("launch-div-1").style.left = "calc(50vw + " + landingLeft + "px)"; 
	document.getElementById("launch-div-2").style.left = "calc(50vw + " + landingLeft + "px)"; 
	document.getElementById("launch-div-3").style.left = "calc(50vw + " + landingLeft + "px)"; 

	wheelLeft = window.innerWidth > 1366 ? ((150 / 554) * (window.innerWidth - 1366)) : 0;
	
	document.getElementById("letter-circle").style.left = "calc(5vw + " + wheelLeft + "px)"

};

function moveArrows(e, arrowCenterX, arrowCenterY)
{
	if(!arrowCenterX)
	{
		/* center X:-48px Y-50px */

		arrow1StartX = arrow2StartX = arrow3StartX = (window.innerWidth / 2) - 48;
		arrow1StartY = arrow2StartY = arrow3StartY = (window.innerHeight / 2) - 50;

		//Move Arrows
		if(started === false)
		{
			document.getElementById("arrow-1").style.left = arrow1StartX + borderX + "px";
			document.getElementById("arrow-2").style.left = arrow2StartX + borderX + "px";
			document.getElementById("arrow-3").style.left = arrow3StartX + borderX + "px";
		
			document.getElementById("arrow-1").style.top = arrow1StartY + borderY + "px";
			document.getElementById("arrow-2").style.top = arrow2StartY + borderY + "px";
			document.getElementById("arrow-3").style.top = arrow3StartY + borderY + "px";
		}
		else if(started === true && menuActive === false)
		{
			//Move borderCovers
			document.getElementById("borderDraw-1").style.top = document.getElementById("borderCover").offsetTop + "px";
			document.getElementById("borderDraw-1").style.width = document.getElementById("borderCover").clientWidth + 100 + "px";
			document.getElementById("borderDraw-1").style.left = document.getElementById("borderCover").clientLeft + "px";

			document.getElementById("borderDraw-2").style.height = document.getElementById("borderCover").clientHeight + 5 + "px";	
			document.getElementById("borderDraw-2").style.top = document.getElementById("borderCover").offsetTop + "px";
			document.getElementById("borderDraw-2").style.left = document.getElementById("borderCover").offsetLeft + document.getElementById("borderCover").clientWidth + 1 + "px";
	
			document.getElementById("borderDraw-3").style.top = document.getElementById("borderCover").offsetTop + document.getElementById("borderCover").clientHeight + 1 + "px";
			document.getElementById("borderDraw-3").style.width = document.getElementById("borderCover").clientWidth + 5 + "px";
			document.getElementById("borderDraw-3").style.left = document.getElementById("borderCover").offsetLeft  + "px";

			document.getElementById("borderDraw-4").style.height = document.getElementById("borderCover").clientHeight + 5 + "px";	
			document.getElementById("borderDraw-4").style.top = document.getElementById("borderCover").offsetTop + "px";
			document.getElementById("borderDraw-4").style.left = document.getElementById("borderCover").offsetLeft +  "px";
		}
		else if(started === true && menuActive === true)
		{
			//menu-title-move
			if(document.getElementById("landing-div-1").offsetTop <= 116)
			{
				if(document.getElementById("landing-div-1").offsetLeft < window.innerWidth)
				{
					document.getElementById("menu-title").style.top = "20px";
					document.getElementById("landing-div-2").style.top = "calc(50vh - ((50vh / 2) - 100px))";
					document.getElementById("landing-div-3").style.top = "calc(50vh - ((50vh / 2) - 280px))";
					document.getElementById("launch-div-2").style.top = "calc(50vh - ((50vh / 2) - 100px))";
					document.getElementById("launch-div-3").style.top = "calc(50vh - ((50vh / 2) - 280px))";
				}
				else
				{
					document.getElementById("menu-title").style.top = "20px";
					document.getElementById("landing-div-2").style.top = document.getElementById("landing-div-3").style.top = document.getElementById("landing-div-1").offsetTop + "px";
				}
			}
			else
			{
				if(document.getElementById("landing-div-1").offsetLeft < window.innerWidth)
				{
					document.getElementById("menu-title").style.top = "50px";
					document.getElementById("landing-div-2").style.top = "calc(50vh - ((50vh / 2) - 110px))";
					document.getElementById("landing-div-3").style.top = "calc(50vh - ((50vh / 2) - 300px))";
					document.getElementById("launch-div-2").style.top = "calc(50vh - ((50vh / 2) - 110px))";
					document.getElementById("launch-div-3").style.top = "calc(50vh - ((50vh / 2) - 300px))";
				}
				else
				{
					document.getElementById("menu-title").style.top = "50px";
					document.getElementById("landing-div-2").style.top = document.getElementById("landing-div-3").style.top = document.getElementById("landing-div-1").offsetTop + "px";
				}
			}
			
			//menuMove
			landingLeft = window.innerWidth > 1366 ? ((100 / 554) * (window.innerWidth - 1366)) : 0;
			document.getElementById("landing-div-1").style.left = "calc(50vw + " + landingLeft + "px)";
			document.getElementById("landing-div-2").style.left = "calc(50vw + " + landingLeft + "px)";
			document.getElementById("landing-div-3").style.left = "calc(50vw + " + landingLeft + "px)"; 
			document.getElementById("launch-div-1").style.left = "calc(50vw + " + landingLeft + "px)";
			document.getElementById("launch-div-2").style.left = "calc(50vw + " + landingLeft + "px)";
			document.getElementById("launch-div-3").style.left = "calc(50vw + " + landingLeft + "px)";

			wheelLeft = window.innerWidth > 1366 ? ((150 / 554) * (window.innerWidth - 1366)) : 0;
			
			if(document.getElementById("letter-circle").style.left !== realWheel)
			{
				document.getElementById("letter-circle").style.left = "calc(5vw + " + wheelLeft + "px)"; 
			}
			else
			{
				realWheel = ((window.innerWidth / 2 ) - 250) + "px";
				document.getElementById("letter-circle").style.left = realWheel;
			}
		}
	}
}

function drawSurfaces()
{
	if ( surfaceDrawn === false )
	{
		surfaceDrawn = true;

		document.getElementsByTagName("circle")[0].style.animation = "loadCircle 1500ms ease-in-out";

		//Banners will show until first mouse movement
		setTimeout("document.getElementById(\"textCover\").style.opacity = 0.5", 900);

		//Start mouseCaputre and show banners
		setTimeout("started = false; document.getElementById('textCover').style.transition = 'opacity 500ms';", 2000);
	 
		//Delete Elements
		setTimeout("document.body.removeChild(document.getElementById('load-circle'))", 2000);
		setTimeout("document.body.removeChild(document.getElementsByClassName('borderDraw')[0])", 2000);
		setTimeout("document.body.removeChild(document.getElementsByClassName('borderDraw')[0])", 2000);
		setTimeout("document.body.removeChild(document.getElementsByClassName('borderDraw')[0])", 2000);
		setTimeout("document.body.removeChild(document.getElementsByClassName('borderDraw')[0])", 2000);

		setTimeout("document.getElementById(\"startText\").style.opacity = \"1\"", 900);
		setTimeout("document.getElementById(\"popupText\").style.opacity = \"1\"", 1100);
		setTimeout("document.getElementById(\"startButton\").onclick = buttonAnimate", 900);
		
		//Add Animation to Masks
		document.getElementById("borderDraw-1").style.display = document.getElementById("borderDraw-2").style.display = document.getElementById("borderDraw-3").style.display = document.getElementById("borderDraw-4").style.display = "block"
		document.getElementById("borderDraw-1").style.transition = document.getElementById("borderDraw-3").style.transition = "transform 2000ms ease-out, width 2000ms ease-out";
		document.getElementById("borderDraw-2").style.transition = document.getElementById("borderDraw-4").style.transition = "transform 2000ms ease-out, height 2000ms ease-out";
	
		//Move Masks
		setTimeout('document.getElementById("borderDraw-1").style.transform = "translateX(" + document.getElementById("borderDraw-1").clientWidth * 2 + "px)"', 100);
		setTimeout('document.getElementById("borderDraw-4").style.transform = "translateY(" + document.getElementById("borderDraw-4").clientHeight * 2 + "px)"', 100);
		setTimeout('document.getElementById("borderDraw-2").style.transform = "translateY(" + document.getElementById("borderDraw-2").clientHeight * 2 + "px)"', 900);
		setTimeout('document.getElementById("borderDraw-3").style.transform = "translateX(" + document.getElementById("borderDraw-3").clientWidth * 2 + "px)"', 900);
	}
}

window.onmousemove = function (e) {

	mouseX = e.clientX; //Place mouse coords in global scope
	mouseY = e.clientY;

	var centerRect = document.getElementById("startButton").getBoundingClientRect(); //get center point of viewport from start button

	var centerPointX = centerRect.left + 35; //center of start button
	var centerPointY = centerRect.top + 35;
		
	var mouseDistanceX = centerPointX - mouseX; // distance of mouse pointer from button
	var mouseDistanceY = centerPointY - mouseY;

	if(!started)
	{	
		if(document.getElementById("popupText").style.borderSize !== "0px") //borderSize starts as undefined, when we set it to 0px it stays that way. That makes this if statment only the first time the user moves the mouse
		{
			document.getElementById("popupText").style.borderSize = "0px";
			setTimeout('document.getElementById("popupText").style.opacity=0', 4000); //hide popup text
			setTimeout('document.getElementById("popupText").style.animation="none"', 4000); //end popup text animation
		}
		
		document.getElementById("textCover").style.opacity = 1; //Cover Banners
		document.getElementById("borderCover").style.border = "1px solid #444451"; //Darken Border
		if(peekStarted === false)
		{
			peekBanners();
			peekStarted = true;
		}
	
		var mouseDistanceXabsolute = -mouseDistanceX > 0 ? -mouseDistanceX : mouseDistanceX; //this makes the difference positive
		var mouseDistanceYabsolute = -mouseDistanceY > 0 ? -mouseDistanceY : mouseDistanceY;
		
		var gradientX = mouseDistanceXabsolute; //naming
		var sizeY = mouseDistanceYabsolute;

		gradientX = ((gradientX / (window.innerWidth / 2)) * 100) * 0.01; /* This changes the positive distance to a percentage based on 1/2 of the window width */
		sizeY = ((sizeY / (window.innerHeight / 4)) * 100) * 0.01; /* This changes the positive distance to a percentage based on 1/4 of the window height */

		var circleSize = (sizeY * 100) < 40 ? 40 : (sizeY * 100); /* This is essentially min-width: 40px; for our circle*/

		/* Create a radial gradient around our mouse cursor */
	      /*document.body.style.background = "radial-gradient(circle " + circleSize + "px at " + mouseX + "px " + mouseY + "px ,rgba(18,18,25," + gradientX + ") 5%, rgba(18,18,25,1))";*/
		document.getElementById("textCover").style.background = "radial-gradient(circle " + circleSize + "px at " + mouseX + "px " + mouseY + "px ,rgba(18,18,26," + gradientX + ") 5%, rgba(18,18,26,1))";

		//Moving Border Logic
		borderX = (((mouseDistanceX / (window.innerHeight / 4)) * 100) * 0.01) * borderDeltaX;
		borderY = (((mouseDistanceY / (window.innerWidth / 16)) * 100) * 0.01) * borderDeltaY;

		document.getElementById("borderCover").style.transform = "translate3d(" + borderX + "px," + borderY + "px,0px)";
		//End Moving Border Logic

		//Move Start button the same distance as the border moved
		startDeltaX = (buttonStartX + borderX) + borderDeltaX;
		startDeltaY = (buttonStartY + borderY) + borderDeltaY;

		document.getElementById("startButton").style.transform = "translate3d(" + startDeltaX + "px," + startDeltaY + "px,0px)";
		
		//Move Start label the same distance as the border moved
		document.getElementById("startText").style.transform = "translate3d(" + borderX + "px," + borderY + "px,0px)";
		
		//Move Arrows
		document.getElementById("arrow-1").style.left = arrow1StartX + borderX + "px";
		document.getElementById("arrow-2").style.left = arrow2StartX + borderX + "px";
		document.getElementById("arrow-3").style.left = arrow3StartX + borderX + "px";
		
		document.getElementById("arrow-1").style.top = arrow1StartY + borderY + "px";
		document.getElementById("arrow-2").style.top = arrow2StartY + borderY + "px";
		document.getElementById("arrow-3").style.top = arrow3StartY + borderY + "px";

		//Move Clipping Covers
		document.getElementById("topClipCover").style.height = document.getElementById("borderCover").offsetTop + borderY + "px";
		document.getElementById("bottomClipCover").style.top = (document.getElementById("borderCover").offsetTop + (borderY + 2) + document.getElementById("borderCover").clientHeight) + "px";
		document.getElementById("bottomClipCover").style.height =  150 + "px";

		document.getElementById("leftClipCover").style.width = document.getElementById("borderCover").offsetLeft + borderX + "px";
		document.getElementById("rightClipCover").style.right = 0 + "px";
		document.getElementById("rightClipCover").style.width = (window.innerWidth - document.getElementById("borderCover").getBoundingClientRect().right) + "px";

	}
	else if(started === true && menuActive === true)
	{
		//Moving Border Logic
		borderX = (((mouseDistanceX / (window.innerHeight / 4)) * 100) * 0.01) * borderDeltaX;
		borderY = (((mouseDistanceY / (window.innerWidth / 16)) * 100) * 0.01) * borderDeltaY;

		document.getElementById("borderCover").style.transform = "translate3d(" + borderX + "px," + borderY + "px,0px)";
		//End Moving Border Logic

		//Move Clipping Covers
		document.getElementById("topClipCover").style.height = ((document.getElementById("borderCover").offsetTop + borderY) < 0) ? "0px" : (document.getElementById("borderCover").offsetTop + borderY) + "px";
		document.getElementById("bottomClipCover").style.top = (document.getElementById("borderCover").offsetTop + (borderY + 2) + document.getElementById("borderCover").clientHeight) + "px";
		document.getElementById("bottomClipCover").style.height =  150 + "px";

		document.getElementById("leftClipCover").style.width = ((document.getElementById("borderCover").offsetLeft + borderX) < 0) ? "0px" : (document.getElementById("borderCover").offsetLeft + borderX) + "px";
		document.getElementById("rightClipCover").style.right = 0 + "px";
		document.getElementById("rightClipCover").style.width = ((window.innerWidth - document.getElementById("borderCover").getBoundingClientRect().right) < 0) ? "0px" : (window.innerWidth - document.getElementById("borderCover").getBoundingClientRect().right) + "px";
		
		//Move Menu Title Cover
		document.getElementById("menu-title-cover").style.height = document.getElementById("topClipCover").style.height;

		//Move landing-divs the same distance as the border moved
		var landingDeltaX = (landingLeft + (borderX * 0.8)) + borderDeltaX;

		//menuMove with mouse
		document.getElementById("landing-div-1").style.left = "calc(50vw + " + landingDeltaX + "px)";
		document.getElementById("landing-div-2").style.left = "calc(50vw + " + landingDeltaX + "px)";
		document.getElementById("landing-div-3").style.left = "calc(50vw + " + landingDeltaX + "px)"; 
		document.getElementById("launch-div-1").style.left = "calc(50vw + " + landingDeltaX + "px)";
		document.getElementById("launch-div-2").style.left = "calc(50vw + " + landingDeltaX + "px)";
		document.getElementById("launch-div-3").style.left = "calc(50vw + " + landingDeltaX + "px)";

		//Move letter-wheel with the same distance as the border moved
		var wheelDeltaX = (wheelLeft + (borderX * 0.8)) + borderDeltaX;

		//wheelMove with mouse
		if(document.getElementById("letter-circle").style.transition !== "left 800ms" && document.getElementById("letter-circle").style.left !== realWheel)
		{
			document.getElementById("letter-circle").style.left = "calc(5vw + " + wheelDeltaX + "px)";
		}
	}
};

function peekBanners()
{
	if(checkedBanners === false) //we will log the mouse coords for now and compare them in 500 miliseconds
	{
		capturedMouseX = mouseX;
		capturedMouseY = mouseY;
		checkedBanners = true;
		
		setTimeout("peekBanners()", 500);
	}
	else if(checkedBanners === true) //it's been 500 miliseconds 
	{
		if(mouseX === capturedMouseX && mouseY === capturedMouseY && started === false) //if the mouse hasn't moved we can show the banners
		{
			document.getElementById("textCover").style.opacity = 0.5; //Show Banners
			document.getElementById("borderCover").style.border = "1px solid #888891"; //Lighten Border
			if(mouseY > document.getElementById("borderCover").offsetHeight - 350 || mouseY < 300)
			{
				document.getElementById("borderCover").style.border = "none";
			}
			peekStarted = false;
		}
		else //maybe next time
		{
			capturedMouseX = mouseX;
			capturedMouseY = mouseY;
			setTimeout("peekBanners()", 500);
		}
	}
}

function buttonAnimate()
{
	document.getElementById("textCover").style.willChange = "none";
		
	document.getElementById("arrow-1").style.opacity = "0"; // Fade Out Arrows
	document.getElementById("arrow-2").style.opacity = "0";
	document.getElementById("arrow-3").style.opacity = "0";

	document.getElementById("popupText").style.opacity = '0'; //Fade out popup

	document.getElementById('textCover').style.opacity="1"; //Fade Out Banners
	setTimeout("document.getElementById('borderCover').style.opacity='0'", 30); // Fade Out Border
	setTimeout("document.getElementById('borderCover').style.opacity='1'", 2000); // Fade In Border after animation
	setTimeout("document.getElementById('borderCover').style.border='1px solid rgb(48,48,56)'", 2200); //Change border color after animation
	
	started = true; //Switch intro mousemove events off

	document.getElementById('startFill').style.left = document.getElementById('startButton').offsetLeft + 34 + "px"; //Bring in the fill div
	document.getElementById('startFill').style.top = document.getElementById('startButton').offsetTop + 34 + "px";
	document.getElementById('startFill').style.transform = document.getElementById('startButton').style.transform;
	document.getElementById('startFill').style.display = "block";
	
	circleDeltaX = startDeltaX - 34; //Move the fill div to the center
	circleDeltaY = startDeltaY - 34;

	setTimeout("document.getElementById('startFill').style.width = '66px'", 30); //button fill grow
	setTimeout("document.getElementById('startFill').style.height = '66px'", 30);
	setTimeout("document.getElementById('startFill').style.transform = 'translate3d(' + circleDeltaX + 'px,' + circleDeltaY + 'px,0px)'", 30);
	setTimeout("document.getElementById('startFill').style.backgroundColor = 'rgba(0,0,0,0)'", 280);
	setTimeout("document.getElementById('startButton').style.opacity = '0'", 30); //the fade outs before the animation
	setTimeout("document.getElementById('startText').style.opacity = '0'", 280);
	setTimeout("document.getElementById('hiddenText').style.opacity = '0'", 280);
	setTimeout("document.getElementById('textCover').style.opacity = '0'", 280);
	setTimeout("document.getElementById('topClipCover').style.opacity = '0'", 280);
	setTimeout("document.getElementById('bottomClipCover').style.opacity = '0'", 280);

	setTimeout("playTransition('rgb(58,58,66)')", 1000);
	setTimeout("displayMenu()", 1900);	
}

function playTransition(newColor) 
{
	//Move all 9 covers logic

	for ( var s = 0; s < 9; s=s+1 ) //Fill arrays with Id's
	{
		squareIdArray.push("square-" + s);
		coverIdArray.push("cover-" + s);
	}

	//We will have a total of 3 unique Y values 
	squareRowYArray[1] = 0;
	squareRowYArray[2] = document.getElementById(squareIdArray[0]).clientHeight;
	squareRowYArray[3] = document.getElementById(squareIdArray[0]).clientHeight * 2;

	//We will have a total of 3 unique X values accessed in a different order then the Y values
	squareRowXArray[1] = squareRowXArray[4] = squareRowXArray[7] = 0;
	squareRowXArray[2] = squareRowXArray[5] = squareRowXArray[8] = document.getElementById(squareIdArray[0]).clientWidth;
	squareRowXArray[3] = squareRowXArray[6] = squareRowXArray[9] = document.getElementById(squareIdArray[0]).clientWidth * 2;

	for ( var q = 0; q < 9; q=q+1 ) //Assign X and Y values
	{
		document.getElementById(squareIdArray[q]).style.top = squareRowYArray[Math.ceil((q + 1) / 3)] + "px";
		document.getElementById(squareIdArray[q]).style.left = squareRowXArray[q + 1] + "px";
	}
	
	//End move 9 covers logic

	for ( var u = 0; u < 9; u=u+1 ) //Assign will-change
	{
		document.getElementById(coverIdArray[u]).style.willChange = "transform";
	}

	for ( var a = 0; a < 9; a=a+1 ) //Animate
	{
		//var timing = ( a + 1 ) * 50;
		//var timing = ( a + 1 ) * 300;
		/*var timing = [100, 400, 700, 
				  400, 700, 1000,
				  700, 1000, 1300] stagger at 200ms*/
		/*var timing = [100, 350, 600, 
				  350, 600, 650,
				  600, 650, 700] stagger 400ms */
		/*var timing = [100, 350, 600,
				  100, 350, 600,
				  100, 350, 600]*/
		var timing = [100, 300, 500, 
				  350, 400, 500,
				  600, 550, 500]; /*cool 250ms*/
		/*var timing = [100, 350, 600, 
				  100, 350, 600,
				  100, 350, 600];*/
		
		var element = "document.getElementById(coverIdArray[" + a + "]).style.transform = 'translateX(0)'";
		setTimeout(element, timing[a]);
	}

	for ( var r = 0; r < 9; r=r+1 ) //Animate
	{
		/*var timing = [100, 350, 600, 
				  350, 600, 650,
				  600, 650, 700] /*stagger 200ms*/ 
		/*var timing = [100, 350, 600,
				  100, 350, 600,
				  100, 350, 600]*/
		var timing = [600, 550, 600, 
				  350, 400, 350,
				  300, 300, 100];
		/*var timing = [600, 350, 100, 
				  600, 350, 100,
				  600, 350, 100];*/
		
		var element = "document.getElementById(coverIdArray[" + r + "]).style.transform = 'translateX(-100%)'";
		setTimeout(element, timing[r] + 1200);
	}

	for ( var e = 0; e < 9; e=e+1 ) //Assign Colors
	{
		var bgcolor = [48, 38, 28, 
				   48, 38, 28,
				   48, 38, 28]
		var addblue = bgcolor[e] + 8;
		document.getElementById(coverIdArray[e]).style.backgroundColor = "rgb(" + bgcolor[e] + "," + bgcolor[e] + "," + addblue + ")";
	}

	//Change Background
	setTimeout("document.body.style.background = '" + newColor + "'", 900);
	
	//Clean up
	for ( var c = 0; c < 9; c=c+1 ) //Remove will-change
	{
		var elementToSet = "document.getElementById(coverIdArray[" + c + "]).style.willChange = 'none'";
		setTimeout(elementToSet, 2000);
	}

	for ( var o = 0; o < 9; o=o+1 ) //lower z-index
	{
		var elementToLower = "document.getElementById(squareIdArray[" + o + "]).style.zIndex = '1'";
		setTimeout(elementToLower, 3000);
	}

}
