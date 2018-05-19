var current_wordList;
var current_wordListKey;

var progressNumber = 0;
var randomWordArray = [];
var randomWordArray_double = [];

var current_word = "figcaption";
var current_mask = "";
var current_key = "This tag defines a caption for a <figure> element";

var word_fill = "";
var queue_fill = "";

var letter = { "a":"rotate(175deg)",
				     "b":"rotate(162deg)",
				     "c":"rotate(147deg)",
				     "d":"rotate(132deg)",
				     "e":"rotate(117deg)",
				     "f":"rotate(105deg)",
				     "g":"rotate(92deg)",
				     "h":"rotate(78deg)",
				     "i":"rotate(65deg)",
				     "j":"rotate(53deg)",
				     "k":"rotate(39deg)",
				     "l":"rotate(25deg)",
				     "m":"rotate(11deg)",
				     "n":"rotate(-5deg)",
				     "o":"rotate(-19deg)",
				     "p":"rotate(-33deg)",
				     "q":"rotate(-47deg)",
				     "r":"rotate(-63deg)",
				     "s":"rotate(-77deg)",
				     "t":"rotate(-90deg)",
				     "u":"rotate(-102deg)", 
				     "v":"rotate(-116deg)", 
				     "w":"rotate(-130deg)", 
				     "x":"rotate(-144deg)", 
				     "y":"rotate(-158deg)",
				     "z":"rotate(-171deg)" };

var letterWheel = { setRotation: function (deg) { letterWheel.Rotation = deg; letterWheel.setTransform()},
			  Rotation: "rotate(0deg)",
			  setTranslation: function (x,y) { 
							var new_x = -(parseInt(getComputedStyle(document.getElementById('letter-circle')).getPropertyValue('left')) - x);
							var new_y = -(parseInt(getComputedStyle(document.getElementById('letter-circle')).getPropertyValue('top')) - y);
							new_x -= 235;
							new_y -= 80;
							letterWheel.Translation = "translate3d(" + new_x + "px," + new_y + "px,0px)"; letterWheel.setTransform();},
			  Translation: "translate3d(0px,0px,0px)",
			  setTransform: function () { document.getElementById('letter-circle').style.transform = letterWheel.Translation + " " + letterWheel.Rotation;},
			  startingPosition: function () { letterWheel.setTranslation((window.innerWidth /2) - 30, ((window.innerHeight/2) - 35)); letterWheel.setTransform(); },
			  queuePosition: function () { letterWheel.setTranslation(document.getElementById('letterQueue').offsetLeft + 25, (document.getElementById('letterQueue').offsetTop + 5) + ((queue_fill.length - 1) * 55)); letterWheel.setTransform();},
			  wordPosition: function (whichLetter) { letterWheel.setTranslation(document.getElementById('mask-start').offsetLeft + document.getElementById('word').offsetLeft + 3 + ((whichLetter - 1) * 66), document.getElementById('mask-start').offsetTop + document.getElementById('word').offsetTop + 35); letterWheel.setTransform();},
			  removeLetter: function(whichLetter) { 
							var myText = document.getElementById('letter-wheel-text').textContent;
							myText = myText.replace(whichLetter.toUpperCase(),' ');
							document.getElementById('letter-wheel-text').textContent = myText;
							}
			}

function startLogic(mode, list)
{
	document.getElementById('word').style.display = "block";
	document.getElementById('back-button-4').style.display = 'block';
	document.getElementById('modeLabel').style.display = 'block';
	document.getElementById('progressLabel').style.display = 'block';
	document.getElementById('clue').style.display = 'block';
	document.getElementById('letter-circle').style.top = "calc(50vh - 115px)";
	document.getElementById('letter-circle').style.left = "calc(50vw - 265px)";

	setTimeout("document.getElementById('back-button-4').style.opacity = '1'", 1230);
	setTimeout("document.getElementById('modeLabel').style.opacity = '1'", 1230);
	setTimeout("document.getElementById('progressLabel').style.opacity = '1'", 1230);
	setTimeout("document.getElementById('letter-wheel-text').style.opacity = 1", 1230);
	setTimeout("document.getElementById('word').style.opacity = 1", 1230);
	setTimeout("document.getElementById('clue').style.opacity = 1", 1230);

	if(mode === 'h')
	{
		document.getElementById('modeLabel').style.backgroundColor = "rgba(90,47,52, 1)";
		document.getElementById('modeLabel').textContent="Hangman Mode";
	}
	else if(mode === 't')
	{
		document.getElementById('modeLabel').style.backgroundColor = "rgba(47,90,50, 1)";
		document.getElementById('modeLabel').textContent="Typist Mode";
	}

	//reset
	progressNumber = 0;
	randomWordArray = [];
	randomWordArray_double = [];

	//getList & Key
	current_wordList = saved_wordLists[list];
	current_wordListKey = saved_wordLists[current_wordList[0]];
	var wordIndexLength = current_wordList.length;

	//set Progress label
	document.getElementById('progressLabel').textContent = progressNumber + " / " + ((wordIndexLength - 1) * 2);

	//set up indexes
	for(var current_index_amount = 1; current_index_amount < wordIndexLength; current_index_amount++)
	{
		randomWordArray.push(current_index_amount);
		randomWordArray_double.push(current_index_amount);
	}

	//move indexes at random
	var oldIndex = wordIndexLength - 2;
	var newIndex = 1;
	var tempValueStore;
	
	while(oldIndex > 0)
	{
		newIndex = Math.floor(Math.random() * ( wordIndexLength - 2));

		tempValueStore = randomWordArray[oldIndex];
		randomWordArray[oldIndex] = randomWordArray[newIndex];
		randomWordArray[newIndex] = tempValueStore;

		newIndex = Math.floor(Math.random() * ( wordIndexLength - 2));

		tempValueStore = randomWordArray_double[oldIndex];
		randomWordArray_double[oldIndex] = randomWordArray_double[newIndex];
		randomWordArray_double[newIndex] = tempValueStore;

		--oldIndex;
	}

	if(mode === 'h')
	{
		
		setTimeout("document.getElementById('letter-circle').style.transition = 'transform 1250ms'", 1230);
		document.getElementById('letterQueue').style.display = 'block';
		setTimeout("document.getElementById('letterQueue').style.opacity = '1'", 1230);
	}
	else if(mode === 't')
	{
		setTimeout("document.getElementById('letter-circle').style.transition = 'transform 100ms'", 1230);
	}

	getNewWord(mode);
		
}

function getNewWord(mode)
{
	if(mode === 'h')
	{
		window.onkeyup = function (e) { hangman_key_capture(e) };
	}
	else if(mode === 't')
	{
		window.onkeydown = function (e) { typist_key_capture(e) };
	}

	//clear fills
	current_mask = "";
	word_fill = "";
      queue_fill = "";
	
	//set Progress labels
	progressNumber++;

	var wordListLength = mode === 'h' ? current_wordList.length - 1 : (current_wordList.length - 1) * 2;

	if(progressNumber > wordListLength)
	{
		document.getElementById("back-button-4").click();
	}
	document.getElementById('progressLabel').textContent = progressNumber + " / " + wordListLength;
		
	if(progressNumber <= 24)
	{
		current_key = current_wordListKey[randomWordArray[progressNumber - 1]];
		current_word = current_wordList[randomWordArray[progressNumber - 1]];
	}
	else
	{
		current_key = current_wordListKey[randomWordArray_double[(progressNumber - (current_wordList.length - 1)) - 1]];
		current_word = current_wordList[randomWordArray_double[(progressNumber - (current_wordList.length - 1)) - 1]];
	}
	
	for(var numberOfChars = 0; numberOfChars < current_word.length; numberOfChars++)
	{
		current_mask += "_ ";
	}

	//remove white space on ends
	current_mask = current_mask.charAt(0) === ' ' ? current_mask.substr(1) : current_mask;
	current_mask = current_mask.charAt(current_mask.length - 1) === ' ' ? current_mask.substr(0,current_mask.length - 1) : current_mask;
	
	//set clue to key
	document.getElementById("clue").textContent = current_key;

	//set word to mask
	document.getElementById("word").innerHTML = "<span id='mask-start'>" + current_mask + "</span>";

	if(mode === 'h')
	{
		//clear letter queue
		document.getElementById("letterQueue").innerHTML = "<div></div>";
	}

	//back Button
	document.getElementById('back-button-4').onclick = function () {

		document.getElementById('play-button-1').disabled = "";

		for(var allTheStrays = 0; allTheStrays < word_fill.length; allTheStrays++)
		{
			setTimeout("document.body.removeChild(document.getElementsByClassName('wordReveal')[0])", 1230);
		}

		window.onkeyup = "";
		window.onkeydown = "";

		document.getElementById('back-button-4').style.opacity = '0';
		document.getElementById('modeLabel').style.opacity = '0';
		document.getElementById('progressLabel').style.opacity = '0';
		document.getElementById('letter-wheel-text').style.opacity = 0;
		document.getElementById('word').style.opacity = 0;
		document.getElementById('clue').style.opacity = 0;
		document.getElementById('letterQueue').style.opacity = '0';
		
		setTimeout('document.getElementById("letter-circle").style.left = realWheel', 1030);
		setTimeout("document.getElementById('letter-circle').style.top = 'calc(50vh - 300px'", 1030);
		setTimeout('document.getElementById("letter-wheel-text").style.opacity = "0.2"', 1600);

	
		setTimeout("document.getElementById('letterQueue').style.display = 'none'", 1230);
		setTimeout("document.getElementById('word').style.display = 'none';", 1230);
		setTimeout("document.getElementById('back-button-4').style.display = 'none';", 1230);
		setTimeout("document.getElementById('modeLabel').style.display = 'none';", 1230);
		setTimeout("document.getElementById('progressLabel').style.display = 'none';", 1230);
		setTimeout("document.getElementById('clue').style.display = 'none';", 1230);

		for ( var b4 = 0; b4 < 9; b4=b4+1 ) //raise z-index for transition reuse
		{
			document.getElementById(squareIdArray[b4]).style.zIndex = '50';
		}

		setTimeout("playTransition('rgb(58,58,66)')", 1000);

		if(document.body.style.backgroundColor = "rgb(64,55,63)")
		{
			setTimeout('document.getElementById("landing-div-1").style.transform = "translateX(-21vw)"', 1600);
		}
		setTimeout('document.getElementById("menu-title-cover").style.opacity = "1"',  1600);
		setTimeout('document.getElementById("menu-title").style.opacity = "1"',  1600);
		
		setTimeout("menuActive=true", 1630);
		setTimeout("document.getElementById('borderCover').style.display='block'", 1630);
		setTimeout("document.getElementById('topClipCover').style.display='block'", 1630);
		setTimeout("document.getElementById('bottomClipCover').style.display='block'", 1630);
		setTimeout("document.getElementById('leftClipCover').style.display='block'", 1630);
		setTimeout("document.getElementById('rightClipCover').style.display='block'", 1630);
		setTimeout('document.getElementById("letter-circle").style.animation="letter-wheel-spin 40s linear infinite"', 1630);
		



	}
	
}

var moveAlong = 0; //text cursor position
var myTypistLetter = "";
var backSpace = 0;
function typist_key_capture(e)
{
	var alpha = document.getElementById('letter-circle').textContent.toLowerCase().trim();
	if(alpha.indexOf(e.key) === -1 || moveAlong === current_word.length)
	{
		if(e.keyCode !== 13)
		{
			
		 	if(e.keyCode === 8 && moveAlong !== 0)
			{
				myTypistLetter = "";
				word_fill = word_fill.substring(0, word_fill.length - 1);
				moveAlong--;
				if(backSpace > 0) { document.body.removeChild(document.getElementsByClassName('wordReveal')[document.getElementsByClassName('wordReveal').length - 1]);}
				letterWheel.startingPosition();
				backSpace++;
			}
			return;
		}	
		else if(moveAlong === current_word.length)
		{	
			moveAlong=0;
			clearLetters();
			getNewWord('t');
			return;
		}
		else
		{
			return;
		}
	}
	//if key is not in the alphabet then we stop here
	
	backSpace = 0
	word_fill += e.key;	

	//move letterWheel to spot
	letterWheel.setRotation(letter[e.key]);
	letterWheel.wordPosition(moveAlong + 1);
	//document.getElementById('letter-wheel-text').style.opacity = "0.2";
	
	var letterLeftCalc = document.getElementById('mask-start').offsetLeft + document.getElementById('word').offsetLeft + 3 + moveAlong * 66;
	var letterTopCalc = document.getElementById('mask-start').offsetTop + document.getElementById('word').offsetTop + 35;
		
	if(myTypistLetter !== "") { document.body.appendChild(myTypistLetter); }
	myTypistLetter = document.createElement("div");
	myTypistLetter.setAttribute("class", "wordReveal");
	myTypistLetter.setAttribute("style", "left: " + letterLeftCalc + "px; top: " + letterTopCalc + "px;");
	myTypistLetter.textContent = e.key.toUpperCase();

	

	moveAlong++; //move text cursor position
	if( moveAlong === current_word.length)
	{
		var theAnswer = document.createElement("div");
		theAnswer.setAttribute("class", "wordReveal");
		theAnswer.setAttribute("style", "left: " + (letterLeftCalc + 100) + "px; top: " + letterTopCalc + "px;");
		theAnswer.textContent = current_word;
		theAnswer.style.color = word_fill === current_word ? "green" : "rgba(226,63,63, 1)";
		word_fill = "";
		document.body.appendChild(theAnswer);

		//document.getElementById('word').textContent = current_word.toUpperCase();
		setTimeout("letterWheel.startingPosition()", 100);
		//document.getElementById('letter-wheel-text').style.opacity = "1";
		document.body.appendChild(myTypistLetter);
		myTypistLetter = "";
	}
	
		
}

function clearLetters()
{
	while(document.getElementsByClassName('wordReveal')[0])
	{
		document.body.removeChild(document.getElementsByClassName('wordReveal')[0]);
	}
}

var temporary_key_store = "";
var myNewLetter;
var myDuplicateLetter;
var duplicateLetterIndex;
var myOtherLetter = [];
var duplicateLetters = -1;

function hangman_key_capture(e)
{
	if(current_word.indexOf(e.key) > -1)
	{
		if(word_fill.indexOf(e.key) !== -1 || queue_fill.length === 9)
		{
			return;
		}

		word_fill += e.key;
		setTimeout("onWordReveal()", 3000);

		window.onkeyup = "";
		letterWheel.setRotation(letter[e.key]);
		letterWheel.wordPosition(current_word.indexOf(e.key) + 1);

		setTimeout("letterWheel.startingPosition()", 1250);
		setTimeout("window.onkeyup = function (e) { hangman_key_capture(e) }", 1250);
		
		//create letter div and position it at wheel apex
		var letterLeftCalc = document.getElementById('mask-start').offsetLeft + document.getElementById('word').offsetLeft + 3 + current_word.indexOf(e.key) * 66;
		var letterTopCalc = document.getElementById('mask-start').offsetTop + document.getElementById('word').offsetTop + 35;
		
		if(e.key === 'i' || e.key === 'l')
		{
			letterLeftCalc += 8;
		}
		
		if(e.key === 's' || e.key === 't')
		{
			letterLeftCalc += 4;
		}

		myNewLetter = document.createElement("div");
		myNewLetter.setAttribute("class", "wordReveal");
		myNewLetter.setAttribute("style", "left: " + letterLeftCalc + "px; top: " + letterTopCalc + "px;");
		myNewLetter.textContent = e.key.toUpperCase();
		setTimeout("document.body.appendChild(myNewLetter)", 1250);


		var firstLetterIndex = current_word.indexOf(e.key);
		var restOfWord = current_word.substr(firstLetterIndex + 1, current_word.length);

		if(restOfWord.indexOf(e.key) > -1)
		{
			duplicateLetterIndex = restOfWord.indexOf(e.key) + (current_word.length - restOfWord.length);
			restOfWord = current_word.substr(duplicateLetterIndex + 1, current_word.length);
			
			temporary_key_store = e.key.toUpperCase()
			
			setTimeout('window.onkeyup = ""', 1250);
			setTimeout('letterWheel.setRotation(letter[temporary_key_store.toLowerCase()])', 1260);
			setTimeout('letterWheel.wordPosition(duplicateLetterIndex + 1)', 1260);

			setTimeout("letterWheel.startingPosition()", 2510);
			setTimeout("window.onkeyup = function (e) { hangman_key_capture(e) }", 2510);
		
			//create letter div and position it at wheel apex
			letterLeftCalc = document.getElementById('mask-start').offsetLeft + document.getElementById('word').offsetLeft + 3 + duplicateLetterIndex * 66;
			letterTopCalc = document.getElementById('mask-start').offsetTop + document.getElementById('word').offsetTop + 35;
		
			myDuplicateLetter = document.createElement("div");
			myDuplicateLetter.setAttribute("class", "wordReveal");
			myDuplicateLetter.setAttribute("style", "left: " + letterLeftCalc + "px; top: " + letterTopCalc + "px;");
			myDuplicateLetter.textContent = e.key.toUpperCase();
			setTimeout("document.body.appendChild(myDuplicateLetter)", 2510);
		}

		while(restOfWord.indexOf(e.key) > -1)
		{
			duplicateLetters += 1;
			duplicateLetterIndex = restOfWord.indexOf(e.key) + (current_word.length - restOfWord.length);
			restOfWord = current_word.substr(duplicateLetterIndex + 1, current_word.length);

			//create letter div and position it at wheel apex
			letterLeftCalc = document.getElementById('mask-start').offsetLeft + document.getElementById('word').offsetLeft + 3 + duplicateLetterIndex * 66;
			letterTopCalc = document.getElementById('mask-start').offsetTop + document.getElementById('word').offsetTop + 35;

			myOtherLetter.push(document.createElement("div"));
			myOtherLetter[duplicateLetters].setAttribute("class", "wordReveal");
			myOtherLetter[duplicateLetters].setAttribute("style", "left: " + letterLeftCalc + "px; top: " + letterTopCalc + "px;");
			myOtherLetter[duplicateLetters].textContent = e.key.toUpperCase();
		}

		if(duplicateLetters !== -1)
		{
			duplicateLetters = -1;
			var addTiming = 0;
			for(var moreThanTwo = 0; moreThanTwo < myOtherLetter.length; moreThanTwo++)
			{
				addTiming = (moreThanTwo * 100) + 1270;
				var addElem = "document.body.appendChild(myOtherLetter[" + moreThanTwo + "])";
				setTimeout(addElem, addTiming);
			}
			setTimeout("myOtherLetter=[]", addTiming);
		}
		
	}
	else
	{
		var alpha = document.getElementById('letter-circle').textContent.toLowerCase().trim();
		if(queue_fill.indexOf(e.key) !== -1 || alpha.indexOf(e.key) === -1 || queue_fill.length === 9)
		{
			return;
		}

		queue_fill += e.key;
		if(queue_fill.length === 9) 
		{ 
			window.onkeyup = "";

			for(var allTheGuesses = 0; allTheGuesses < word_fill.length; allTheGuesses++)
			{
				document.body.removeChild(document.getElementsByClassName('wordReveal')[0]);
			}
		
			document.getElementById('word').textContent = current_word.toUpperCase();
			
			setTimeout("getNewWord('h')", 5000);
		}

		letterWheel.setRotation(letter[e.key]);
		letterWheel.queuePosition();

		temporary_key_store = e.key.toUpperCase()
		setTimeout("document.getElementById('letterQueue').innerHTML += temporary_key_store + '<br>'", 1250);
		setTimeout("letterWheel.startingPosition()", 1250);
		window.onkeyup = "";
		setTimeout("window.onkeyup = function (e) { hangman_key_capture(e) }", 1250);
	}
}

function onWordReveal()
{
	if(document.getElementsByClassName('wordReveal').length == current_word.length)
	{
		window.onkeyup = "";

		for(var allTheLetters = 0; allTheLetters < current_word.length; allTheLetters++)
		{
			document.body.removeChild(document.getElementsByClassName('wordReveal')[0]);
		}

		document.getElementsByClassName('wordReveal').length

		getNewWord('h');
	}
}
