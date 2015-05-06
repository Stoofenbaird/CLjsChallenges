// JavaScript Document
function iggyPop()

{
	var first = document.getElementById("first").value;
	console.log(first);
	
	var second = document.getElementById("second").value;
	console.log(second)
	
	var band = first.concat(second);
	console.log(band);
	
	document.getElementById('punk').innerHTML = "Your punk rock band name is: The " + band + "s.";
	
}



