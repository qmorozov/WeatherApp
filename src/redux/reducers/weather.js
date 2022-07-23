const initialState = {
    weather: {},
    isLoaded: false
};

const weather = (state = initialState, action) => {
    if (action.type === 'SET_WEATHER') {
        return {
            ...state,
            weather: action.payload,
            isLoaded: true
        };
    };
    return state;
};

export default weather;

