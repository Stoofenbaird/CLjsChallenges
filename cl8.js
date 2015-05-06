// JavaScript Document

var counter = 0;
console.log("start counter: " + counter)
function altColor() 
{
	function altRed()	//function to alternate the color of the screen
	{
		document.body.style.backgroundColor = "red";
		document.getElementsByTagName("h1").innerHTML = "GO CARDS!!";
		console.log("first red");
	}
	
	if (counter <= 3)
	{
 		setTimeout(altRed(), 3300);	
		console.log("red ran");
		counter++;
		console.log("count is: " + counter);
		altColor();
	} else {
		document.body.style.backgroundColor = "white";
		document.getElementsByTagName("h1").innerHTML = "How 'bout them Cards?";
	}

}

function altBlack()	//function to alternate the color of the screen
{
	document.body.style.backgroundColor = "black";
	document.getElementsByTagName("h1").innerHTML = "GO CARDS GO!!!";	
}

function altRed()	//function to alternate the color of the screen
{
	document.body.style.backgroundColor = "red";
	document.getElementsByTagName("h1").innerHTML = "GO CARDS!!";	
}

