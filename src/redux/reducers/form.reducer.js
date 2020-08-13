const initialState = [];


const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FORM':
            return action.payload;
        case 'UNSET_FORM':
            return initialState;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default formReducer;
