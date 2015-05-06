// JavaScript Document
	
	var t1 = new Date(Date.UTC(2008, 02, 24, 14, 35, 14));
	var t2 = new Date(Date.UTC(2015, 02, 24, 08, 00, 0, 0));
	
	var milisec = t2 - t1; //get total ms diff between dates
	console.log("Milisec is: " + milisec); //get the number of day units in the total miliseconds
	var daysFloat = milisec/86400000; 
	console.log("daysFloat = " + daysFloat)
	var daysWhole = Math.floor(daysFloat) //complete 24-hour days
	console.log("daysWhole = " + daysWhole)
	var daysConv = daysWhole * 86400000; // return complete days to miliseconds
	var milisecHours = milisec - daysConv; //subtract day milisec from total milisecs to get hour milisec
	//convert the milisecHour miliseconds into floating point hours
	var hoursFloat = milisecHours / 3600000; 
	var hoursWhole = Math.floor(hoursFloat); //round down the hours
	var hoursConv = hoursWhole * 3600000; // return complete hours to milisecs
	var milisecMins = milisecHours - hoursConv; //subtract whole hour ms from miilesec hour to milisec minutes
	var minsFloat = milisecMins / 60000;
	var minsWhole = Math.floor(minsFloat); //round down minutes to complete minutes
	var minsConv = minsWhole * 60000; //return whole minutes to  milisecs
	var milisecSec = milisecMins - minsConv; //get remaining miliseconds, then find whole seconds
	var secsFloat = milisecSec /1000; 
	var secsWhole = Math.floor(secsFloat); //round down floating point seconds to whole seconds.
	
	 document.getElementById('bottom').innerHTML = "Happy Birthday, Tossie!  You were " + daysWhole + " days, " + hoursWhole + " hours, " + minsWhole + " minutes and " + secsWhole + " seconds old when we got up this morning!"  ;
	 //output will be daysWhole, hoursWhole, minsWhole, secsWhole
	 