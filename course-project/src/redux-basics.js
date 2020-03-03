// Life Cycle
//component
//action
//reducer
//store
//subscriber

// Actual Sequence 
const Redux = require('redux')
let createStore = Redux.createStore;

const initialState = { counter: 0 };

//reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            state = { counter: ++state.counter };
            break;
        case 'DECREMENT':
            state = { counter: state.counter-1 };
            break;
        case 'STEPUP':
            state = { counter: state.counter += action.count };
            break;
        case 'STEPDOWN':
            state = { counter: state.counter - action.count };
            break;
        default:
    }
    // if (action.type == 'inc') {
    //     return { counter: state.counter+1 };
    // }
    // if (action.type == 'dec') {
    //     return { counter: state.counter-1 };
    // }
    return state;
}

//store
const store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

// console.log(store.getState());
store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState());

store.dispatch({ type: 'DECREMENT' });
// console.log(store.getState());

store.dispatch({ type: 'STEPUP', count: 3 });
// console.log(store.getState());

store.dispatch({ type: 'STEPDOWN', count: 2 });
// console.log(store.getState());