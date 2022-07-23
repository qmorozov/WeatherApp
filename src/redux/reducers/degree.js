const initialState = {
    degree: false
};

const degree = (state = initialState, action) => {
    if (action.type === 'SET_DEGREE_FAHRENHEIT') {
        return {
            degree: true
        };
    };
    if (action.type === 'SET_DEGREE_CELSIUS') {
        return {
            degree: false
        };
    };
    return state;
};

export default degree;