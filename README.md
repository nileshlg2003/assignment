# Assignment

# Challenge 1 
A 3-tier environment is a common setup. Use a tool of your choosing/familiarity create these resources. Please remember we will not be judged on the outcome but more focusing on the approach, style and reproducibility.




# Challenge 2 - 	
We need to write code that will query the meta data of an instance within AWS and provide a json formatted output. The choice of language and implementation is up to you.
	Bonus Points
	The code allows for a particular data key to be retrieved individually

Solution

## Approach 1 - 
1. SSH in to VM 
2. use the curl commands below to retrieve metadata from Vm instance

## Approach 2 -
A Simple NodeJS application using GCPMetadata client library to retrieve VM metadata programatically


# Challenge 3 - 	
We have a nested object, we would like a function that you pass in the object and a key and get back the value. How this is implemented is up to you.
	Example Inputs
	object = {“a”:{“b”:{“c”:”d”}}}
	key = a/b/c
	object = {“x”:{“y”:{“z”:”a”}}}
	key = x/y/z
	value = a

Solution 

