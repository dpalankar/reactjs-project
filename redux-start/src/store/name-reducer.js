const initialState = {
    counter: 0,
    names: ['Akash', 'Sundar', 'Shradha']
};
export default function nameReducer(state = initialState, action) {
    return { ...state, names: action.count-1 }
}
