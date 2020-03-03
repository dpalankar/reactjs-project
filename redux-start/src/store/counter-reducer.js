const initialState = {
    counter: 0,
    names: ['Akash', 'Sundar','Shradha']
};
export default function counterReducer(state = initialState, action) {

    switch (action.type) {
        case ('INCREMENT'):
            return { ...state,counter: state.counter + 1 }
            break;
        case ('DECREMENT'):
            return { ...state,counter: state.counter - 1 }
            break;
        case ('STEPUP'):
            return { ...state,counter: (state.counter += action.count) }
            break;
        case ('STEPDOWN'):
            return { ...state,counter: (state.counter -= action.count) }
            break;
    }
    return state;
}
