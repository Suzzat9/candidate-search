# Getting Started with Candidate Search App

* First, clone this repository by running : `git clone "https://github.com/Suzzat9/candidate-search.git"` in your terminal on your system. 

* Next, run `cd candidate-search` so that you are in the project directory

* In the project directory, run `npm install` or `yarn install` to install the project dependencies 

* Finally, run `npm start` and visit [http://localhost:3000](http://localhost:3000) to view the app in your browser


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

* **reducers.js** : Contains the state variables and the rootReducer function which will set the state of these variables when `setFilter` is called. The state is of a variable will be set to include the `action.payload`

* **actions.js** : Specifies the relevant action types to manage global state

* **store.js** : Sets up the `Redux` store to manage global state

### Styling 

* **App.css** : Styles of all the components are set in this file


## Issues faced 

In general I was able to complete the project in its entirety. The only issue I faced was getting duplicate jobs (having the same jdUid) in the API call. This was happening despite setting the offset value to update in line 46 of InfiniteScroll.js. I have just proceeded with the assumption that duplicates have been included in order to increase the amount of data available for the infinite scroll to work well. And that the duplicates issue would be handled on the database side. 