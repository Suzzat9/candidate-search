# Getting Started with Candidate Search App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project Structure

This section describes the different components that have been built for the application, going from the smaller components to the largest

### Components

* **Filters.js** : Contains two functions. **TextFilter** is a generic text input component and **SelectOption** is a generic select input component. These are used to create the filter options at the top of the app page 

* **JobCard.js** : Contains a generic Card component that will be used to display the job cards 

* **FilterBar.js** : Imports **TextFilter** and **SelectOption** and uses these to create the specific fields we will filter by. 

* **InfiniteScroll.js** : All the above components are put together in this file, it also has the logic for gathering the jobs data from the API. In the `return` block, we have a **FilterBar**, logic for filtering the JobCards and a map function to create a JobCard for each job. 

* **App.js** : Just imports InfiniteScroll and presents it 

* **index.js** : Imports the `App` and also specifies the `Redux` data store where the state of each of the filter options is managed

### State management

* **reducers.js** : Contains the state variables and the rootReducer function which will set the state of these variables when `setFilter` is called. The state is of a variable will be set to include the action.payload

* **actions.js** : Specifies the relevant action types for the state variables 

* **store.js** : Sets up the `Redux` store to manage global state

### Styling 

* **App.css** : Styles of all the components are set in this file


## Issues faced 