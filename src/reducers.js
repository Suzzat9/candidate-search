// reducer function - called when state changes 

// setting state variables to track (from the FilterBar)
const initialState = {
    filters: {
        companyName: '',
        minExp: '',
        location: '',
        workMode: '',
        jobRole: '',
        techStack: '',
        minJdSalary: ''
    }
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER': // if setFilter is called, set the new state
            return {
                ...state,
                filters: {
                    ...state.filters,
                    ...action.payload,
                }
            }
        default:
            return state;

    }
};

export default rootReducer;