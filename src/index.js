const redux = require('redux')
const creatStore = redux.creatStore

const CAKE_ORDERED = 'CAKE_ORDERED'

function orderCake() {
    return{
        type: CAKE_ORDERED,
        quantity: 1,

    }
    
}

const initialState = {
    numberOfCake: 10,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            
        return{
            ...state,
            numberOfCake: state.numberOfCake - 1
        }
        default:
            return state
    }
}


const store = creatStore(reducer)
console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('update state', store.getState())
);

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()