# WeLoveMovies

## Learning objectives

This project is designed to test your ability to build complex servers and access data through a database. To succeed at this project, you'll need to demonstrate that you can do the following:

1. Install and use common middleware packages
1. Receive requests through routes
1. Run tests from the command line
1. Access relevant information through route and query parameters
1. Create an error handler for the case where a route doesn't exist
1. Build an API following RESTful design principles
1. Create and customize a knexfile.js file
1. Create a connection to your database with Knex
1. Write database queries to complete CRUD routes in an Express server
1. Return joined and nested data with Knex
1. Write database migrations using Knex's migration tool
1. Deploy your backend server to a cloud service
1. You will not need to make any edits to HTML or CSS for this project.

Remember to sync this Qualified project with your local machine so that you can commit it to GitHub in the next checkpoint.

## General tasks

You will also need to make sure that the following tasks are complete.

1. Your app.js file and server.js file are correctly configured, with your app.js 1.file exporting the application created from Express.
1. You use the cors package so that requests from the frontend can correctly reach the backend.
1. If a request is made to a route that doesn't exist, the server returns a 404 error.
1. If a request is made to a route that exists but the HTTP method is wrong, the server returns a 405 error.
1. All of your routes respond with the appropriate status code and use a data key in the response.

## Steps to complete

To complete this project, you must do the following:

1. Write code that passes all the tests in the Qualified assessment in this checkpoint.
1. Write code that passes all of the requirements in the project rubric below, and submit your GitHub repo link to the Thinkful team in the next checkpoint.
   Note: This project won't deploy properly without additional configuration. You do not need to deploy it to finish this assignment.

## Project rubric

For your project to pass, all of the following statements must be true.

1. All the tests are passing in Qualified.
1. The migrations can be correctly run and rolled back.
1. The seed command can be run multiple times and work correctly.
1. A response is included for Method Not Allowed.
1. The cors package is included.
1. The entire application is deployed and working.
