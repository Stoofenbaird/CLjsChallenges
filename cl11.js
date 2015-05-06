// JavaScript Document

for(i=1; i<=1000; i++)
{
	while (i < 900)
	{
		i++;
		if (i % 7 === 0)
		{
			console.log(i)
			if (i === 899)
			{
				break;	
			}
		} //end 7 if
	}  //end while <900
	
	while (i >= 900)
	{
		i++;
		if (i % 8 === 0)
		{
			console.log(i)	
		} //end 8 if
		if (i === 1000)
		{
			console.log("end program i = " + i )
			break;	
			
		} //end 1000/break
	} //while >900
} //end for