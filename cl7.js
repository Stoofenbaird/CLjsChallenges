// JavaScript Document
console.log("a program exists");

var myArray = [9, 2, 4, 3, 5, 8, 1, 6, 7, 10]; //Rob's provided array
 
function sorting(myArray) //function to sort the array, passed the argument of myArray
{
    var changed; //did two elements switch places?
    do 
	{  //do this procedure
        changed = false; //the two selected elements haven't changed places yet
        for (var i=0; i < myArray.length-1; i++)  //cycle through the array elements 
            {
				if (myArray[i] > myArray[i+1]) //choose a pair to compare
			 	{ 
					var holder = myArray[i]; //if the first elem. is > 2nd elem, put 1st in a temporary holder
					myArray[i] = myArray[i+1]; //re-assign the elem of [i] with its right neighbor
					myArray[i+1] = holder; //put the right neighbor in the temp holder;
					changed = true; //a pair have switched places
					console.log("re-ordered array" + myArray);
            	} //end if blcok	
        	} //end for block
    } //end do block
	while (changed);  //check to see if no pairs have switched places
} //end function block
 
sorting(myArray); //repeat the function until no pairs have switched places
console.log("The final array is: " + myArray);
document.getElementById('sorted').innerHTML = "The fully sorted array is: " + myArray;