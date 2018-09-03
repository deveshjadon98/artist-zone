# Artist Zone
Isomorphic Artist Zone app with debounced search implemented using Redux Saga.

Find the deployed app [here](https://build-eqdudjofzd.now.sh)

For persisting last searched artist I have used [Localforage](https://localforage.github.io/localForage/) to interact with IndexedDB.

### Prerequisites

* node v8.4.0
* npm 5.3.0

### Steps to run on local machine

Install node modules by running the following command
```
npm install
```
After successful installation run the following commands to serve app on dev environment
```
npm start
```
Access app on the following url
```
localhost:3000
```

### Server Rendering

Run the following command to get a production build
```
npm run build
```
Run the following command to render our app using node.js server
```
npm run server:render
```
Access app on the following url
```
localhost:3000
```

### Unit Testing
Run the following command to run Unit Test cases.
```
npm run test:watch
```

## Built With

* [React](https://reactjs.org/) - JS Library
* [Redux](https://redux.js.org/) - State Container
* [Redux Sagas](https://redux-saga.js.org/) - Middleware
* [Localforage](https://localforage.github.io/localForage/) - Library to interact with IndexedDB.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client
* [Jest](https://jestjs.io/) - Unit Testing Framework
* [Enzyme](http://airbnb.io/enzyme/) - Assertion library

## Acknowledgments

* I have used [Now](https://zeit.co/now) for deploying Artist Zone app.
