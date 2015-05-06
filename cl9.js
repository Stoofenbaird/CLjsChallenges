// JavaScript Document

var egg = null;
var roll;

function init()
{
	egg = document.getElementById("eggy");
	egg.style.position = "relative";
	egg.style.left = "0px";
} //end init

function eggRoll()
{
	egg.style.left =  parseInt(egg.style.left) + 10 + px;
	roll = setTimeout(eggRoll, 20);	
} //end eggRoll

function eggStop()
{
	clearTimeout(roll);
	egg.style.left = "0px";	
} //end eggStop

window.onlod = init;















