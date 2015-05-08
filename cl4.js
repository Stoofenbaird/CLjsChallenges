
var numsE = 0; //even number
var numsO = 0; // odd numbers

//use a for loop to iterate over the variable
var numbers = function() {
for (var i=0; i <= 100; i++) //a variable for all numbers to increment from 1 to 100 in the loop)
{	

//console.log('At start of loop, i = ' + i); 	a check to see if the numbers are counting correctly

	if (i % 2 == 0) {  //determine if i is an even number (dividing by 2 will not have a remainder)		
		console.log(i);	 //print the even numbers out in the console display
		numsE = numsE + i;		//add the vaule of this even number to the value of the previous even number	
	}
	else { 		//if the number is not even, then it is odd
	
	numsO = numsO + i; //add the value of this odd number to the value of the previous odd number.
	}
}

	
//print the sums of the even numbers and the sums of the odd numbers to the console display.
console.log('The sum of the even numbers is ' + numsE + '.');
console.log('The sum of the odd numbers is ' + numsO + '.');

}