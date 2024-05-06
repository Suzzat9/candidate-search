// reducer function - called when state changes 

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
        case 'SET_FILTER':
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