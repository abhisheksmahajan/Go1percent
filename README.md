# Nightwatch.js Test Suite for Go1percert Application

This repository contains automated tests for verifying the login functionality and Dashboard functionality(My Activity) of the Go1Percent web application using Nightwatch.js.

## Purpose

>The purpose of these tests is to ensure that the login process on the Go1Percent website functions correctly.
> The tests cover various aspects such as UI elements, redirects, error handling, and successful login scenarios.

## Prerequisites
>Before running the tests, ensure that you have the following dependencies installed:
   - Node.js
   - Nightwatch.js
    
### Running the Tests

 >Clone this repository to your local machine:-
 > git clone <[repository-url](https://github.com/abhisheksmahajan/Go1percent.git?authuser=0)>

### Navigate to the project directory:

cd <project-directory>

### Install the dependencies:

npm install

### Configure the test environment:

    Modify nightwatch.conf.js to specify the desired browser and WebDriver settings.

### Run the tests:

    npm test

## Test Cases
```sh

    - Verify the "Go1Percent" logo, carousel images, carousel caption, and the footer message
    - Verify that the tagline with the text "Get 1% Better Everyday" is displayed
    - Verify that the carousel image changes while clicking on the carousel button
    - Verify that the login page heading contains the text "Sign in to Go 1%"
    - Verify that clicking on the Microsoft logo redirects to the Microsoft login page
    - Verify that specific text between login options is present on the web page
    - Verify clicking on the "Terms of Use" link opens a new page with the terms of use
    - Verify clicking on the "Privacy Policy" link opens a new page with the privacy policy
    - Verify that login fails with invalid credentials and an alert message is displayed
    -Verify the forgot password functionality
    -Verify remember me checkbox is selected during login
    -Verify successful login with valid credentials
