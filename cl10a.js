// JavaScript Document

var date1;
var time1;

var date2;
var time2;

var later;
var earlier;

var elapsedYdm;
var elapsedH;

//determine which date is earlier and which is later

function sortYear() //determine if one year is earlier than the other
{
	var year1 = get.year(date1);
	var year2 = get.year(date2);
	
	if (year1 < year2)
	{
		later = year2;
		earlier = year1;
		findElapsedYdm();
	} //end if1
	
	else if (year1 > year2)
	{
		later = year1;
		earlier = year2;
		findElapsedYdm();
	} //end if2, counting year time
	
	else (year1 === year2)
	{
		sortMonth();
	}
} //end sortYear, years won't have value but months will

function sortMonth() //if years are the same, determine if months are different and which is earlier
{
	var month1 = get.month(date1);
	var month2 = get.month(date2);
	
	if (month1 < month2)
	{
		later = month2;
		earlier = month1;
		findElapsedYdm();
	} //end if1
	
	else if (month1 > month2)
	{
		later = month1;
		earlier = month2;
		findElapsedYdm();
	} //end if2, counting month time
	
	else (month1 === month2)
	{
		sortDay();
	}	//months won't have time but days will
} //end sortMonth

function sortDay()  //if months are the same, determine if days are different and which is earlier
{
	var day1 = get.day(date1);
	var day2 = get.day(date2);
	
	if (day1 < day2)
	{
		later = day2;
		earlier = day1;
		findElapsedYdm();
	} //end if1
	
	else if (date1 > date2)
	{
		later = date1;
		earlier = date2;
		findElapsedYdm();
	} //end if2 counting day time
	
	else (date1 === date2) //if YMD are the same, assign a value of 0 and go to hour difference
	{
		elapsedYdm === 0;
		sortHour();
	} //days won't count but hours will
} //end sortDay

function sortHour()
{
	if (date1 < date2)
	{
		timeA = date2;
		timeB = date1;
		findElapsedH();
	}
	
	else if (date1 > date2)
	{
		timeA = date1;
		timeB = date2;
		findElapsedH();
	}
	
	else (date1 === date2)
	{
		elapsedH = 0;
	}
} //end sortHour

function findElapsedYdm()
{
	console.log("Later: "  + later + ",  Earlier: " + earlier)
	elapsedYdm = later.getTime() - earlier.getTime();
} //end FindElapsed

function findElapsedH()
{
	console.log("TimeA: " + timeA + ",  TimeB: " + timeB)
	if (elasped != 0)
	{
		elapsedH = timeA  - timeB;
	}
	else 
	{
		elapsedH = 0;	
	}
}

function total()
{
	//check to see if there are year, day, month ms and convert to hours
	//check to see if there are hour ms and conver back to hours
	//add YDM hours to hour hours to get total.
	//send total to html element
	
}
