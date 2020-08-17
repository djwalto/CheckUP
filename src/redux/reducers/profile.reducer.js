const initialState = [];


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            return action.payload;
        case 'UNSET_PROFILE':
            return initialState;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default profileReducer;