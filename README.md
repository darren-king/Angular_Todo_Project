# Angular Todo App

## Overview

### What is this app for?

This is a Todo app. It helps users to keep track of anything that they have to do. 

### What does it do?

This app will allow users to register and login. Once the users have done that, they'll be able to create items to add to their Todo list . Once they've created their Todo list, they'll be able to update the status of each item and even delete items.

### How does it work?

This app uses JSON Web Tokens to authenticate users and keep them logged in. All the data is consumed from an API hosted on Heroku using AngularJS. The site is styled with Bootstrap. 

## Features

### Existing Features
- User Based Features
	- Registration
	- Login

### Features Left to Implement
- User Based Features
	- Logout

- Todo Based Features
	- Creating Todo Items
	- Retrieving Todo Items
	- Updating Todo Items
	- Deleting Todo Items 

## Tech Used

### Some of the technology used includes:
- [AngularJS](https://angularjs.org/)
	- I used **AngularJS** to handle page routing. We also use it to make calls to the REST API and build custom directives.
- [Bootstrap](https://getbootstrap.com/)
	- I used **Bootstrap** to give the project a simple, stylish, responsive layout. 
- [npm](https://www.npmjs.com/)
	- I used **npm** to help manage some of the dependencies in our application.
- [bower](https://bower.io/)
	- I used **bower** to manage the installation of the libraries and frameworks. 

## Contributing

### Getting the code up and running:
1. Firstly you will need to clone this repository by running the ```git clone https://github.com/darren-king/angular-todo``` command.
2. After that's done, you'll need to make sure that you have **npm** and **bower** installed:
	1. You can get **npm** by installing Node from [here](https://nodejs.org/en/).
	2. Once you've done this you'll need to run the following commands:
		a. Windows: ```npm install -g bower```
		b. Mac/Linux: ```sudo npm install -g bower```
3. Once **npm** and **bower** are installed, you'll need to install all of the dependecies in *package.json* and *bower.json*
```
npm install

bower install
```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following:
	1. Windows: ```npm install -g http-server```
	2. Linux/mac: sudo npm install -g http-server
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080).
7. Make changes to the code and if you think it belongs in here then just submit a pull request. 





