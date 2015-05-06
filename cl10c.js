// JavaScript Document

var dateA = document.getElementById("mdy1").value;	//first user date
	var timeA = document.getElementById("time1").value; //first user time
	var dateB = document.getElementById("mdy2").value;	//2nd user date
	var timeB = document.getElementById("time2").value; //2nd user time
	var boxA;
	var boxB;
	var conv1;
	var conv2;
	var total;
	
function userdates()
{	
	//convert user dateA and timeA into a new date that has both date and time units
	
	boxA = new Date(dateA + timeA);
	conv1 = boxA.getTime();
	console.log("BoxA: " + boxA);
	console.log("Conversion 1: " + conv1);

	//convert user dateB and timeB into a new date that has both date and time units

	boxB = new Date(dateB + timeB);
	conv2 = boxB.getTime();
	console.log("BoxB: " + boxB);
	console.log("Conversion 2: " + conv2);

	//determine which date is earlier and which is later; subtract earlier from later
	
	if (conv1 > conv2)
		{
			total = conv1 - conv2;
		}
		else if (conv1 < conv2)
		{
			total = conv2 - conv1;
		}
		else (conv1 = conv2)
		{
			total = 0;
		}
		document.getElementById('result').innerHTML = "The amount of time elapsed between your two dates is:  " + total;

}
//subtract later - earlier
//get the output and convert to hours-minutes-seconds
