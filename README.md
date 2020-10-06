# Angular Version
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

# Run this project
Run `npm install`, then `ng serve` and finally navigate to `http://localhost:4200/`.

# Login in to the application
In order to pass through the login page use the following credentials

- Email: `admin@site.com`
- Password: `1234`

# Implementation Details

## Project Structure
The project has been divided into some basic folders in order to separate the components

- `auth`
- `pages`
- `shared`

### Auth folder
---
The auth folder contains all the logic regarding the authentication and authorization of the app. Even if the app has no back end server, I have created a "real-life" application structure.

#### Auth Service
This is the service that is responsible to communicate with a backend server and validate the credentials.

Methods included: 
- `login`, a method to send the credentials to the server and create a local storage entry if succeeded.
- `isLoggedIn`, a method to read from the local storage and decide if the user is logged in
- `logout`, a method to clear the storage and perfom the log out

#### Guard
The application is enhanced with a guard to prevent the user from browsing unauthorized pages (eg the Dashboard). The guard is using the method `isLoggedIn` of the auth service.

### Pages folder
---
In this folder I have created all the page-components where the user is navigated to. A `page.module.ts` have been generated and imported to the `app.module.ts` in order to group those components.

The pages/componets are 
- `dashboard`, a page with the main functionality of the app. This folder also have a `components` folder with all the specific components for this feature, specifically the `map`, the `calendar` and the `customer` widget.
- `login`, a page for the user to login to the application. The correct credentials are stored to the `app.constants.ts` file.
- `error404`, a page to redirect the user when he/she is navigating to invalid routes.

### Shared folder
---
In this folder I have implemented the shared and common services the application is using. 

## Additional files
A file for the constants of the application has been created to the root of the src with the name `app.constants.ts`. 

## Plugins used
- bootstrap 
- google maps 
- angular-calendar
- angular cdk drag and drop