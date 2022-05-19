# Assignment

# Challenge 1 
A 3-tier environment is a common setup. Use a tool of your choosing/familiarity create these resources. Please remember we will not be judged on the outcome but more focusing on the approach, style and reproducibility.




# Challenge 2 - 	
We need to write code that will query the meta data of an instance within AWS and provide a json formatted output. The choice of language and implementation is up to you.
	Bonus Points
	The code allows for a particular data key to be retrieved individually

Solution

![alt text](https://github.com/nileshlg2003/assignment/blob/main/assets/3%20tier%20application.png?raw=true)

THis stadard three tier application uses Managed instance groups which hosts the flask app. Managed Instance group will provide the auto healing, autoscaling cpabilities. We will also use the External load balancer to managed requests. A cloud SQL service with My SQL will be used as relation database. Secrets will hold all the databses secrets and can communicate with app.
The infrastructure will be provisioned using Terraform module and provided startup script will deploy the application once the infrastructure is ready. An Optional Project creation module will help create and setup GCP project with Organisatoin, folder and necessary permissions. It will also enable necessary APIs

1. Terraform Modules
2. GCP Managed Instance Groups
3. Load Balancers
4. Cloud SQL
5. VPC Networking
6. Cloud Secrets
7. Bash Script to install initial application
8. Flask App

## To do
1. Implement CLoud Build for CI/CD Pipeline
2. Implement Internal Load Balancer
3. Implement Redis for Cache
4. Cloud CDN

## Steps
```
	1. Terraform Init

```
```
	2. Terraform apply -auto-approve

```
3. find the URL / IP Adress form Load balancer in GCP console
4. acces the frontend



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

