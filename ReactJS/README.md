![react-task-tracker](https://github.com/Muthung/Javascript/blob/main/ReactJS/react-task-tracker.png)
![react-task-tracker](https://github.com/Muthung/Javascript/blob/main/ReactJS/react-expense-tracker.png)

## React Js

It's a front-end framework, runs on the client as a Single Page App that can be used to buils full stack apps by communicating with a server/API.

### Why I Use React

- Structure the 'view' layer of application.
- Resusble components with their own state
- JSX -Dynamic markup.
- Interactive UIs with Virtual Dom.
- Performance and testing.

When using React, each UI is a bunch of seperate components.

### Working with State

Components can have 'state' which is an object that determines how a component renders and behaves.
'App' or 'Global' state refers to state that is available to the entire UI, not just a single component.

#### React Hooks

**React Hooks** are functions that let's us **hook** into the **React** state and lifecycle features from function components.

- *useState* : Returns a stateful value and a function to update it.
- *useEffect* : Perform side effects in function components.



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


### Json-Server

This projects collects user data and stores in a Json Server.

CRUD is implemented in the server and a reminder toggle function on each task. It's set to run on *http://localhost:5000*.

Run *npm i json-server* to install it.

Then run the development server along the json-server while using the application.

Using *npm run server*.