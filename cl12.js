// Javascript document
function one()
{
	var yadayada = document.getElementById("yada").value //get 1st user input
	var moremore = document.getElementById("more").value //get 2nd user input 
	var notice = document.createElement("h2"); //create h2 variable for 2nd div
	var texty = document.createTextNode(moremore); //transfer the userinput verbage to go with h2 variable
	var element = document.getElementById("two"); //create variable for where to place the new h2 verbage
	
	document.getElementById("first").innerHTML =  yadayada; //new verbage for first div/h1
	notice.appendChild(texty);	 //combine the h2 tag and h2 verbage
	element.appendChild(notice); //append the complete h2 set to the html page in its proper place
		
}