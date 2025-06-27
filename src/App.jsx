/*import React from 'react'
import { createStore } from 'redux'

const App = () =>{



const CAKE_ORDERED = 'CAKE_ORDERED'

function orderCake() {
  return {
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
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1,
      }
    default:
      return state
  }
}

const store = createStore(reducer)

console.log('initial state', store.getState())

 const unsubscribe = store.subscribe(() => {
  console.log('updated state', store.getState())
})

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()

}
export default App */

import React from 'react'
import { createStore } from 'redux'

const CAKE_ORDERED = 'CAKE_ORDERED'

function orderCake() {
  return {
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
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1,
      }
    default:
      return state
  }
}

const store = createStore(reducer)

console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => {
  console.log('updated state', store.getState())
})


store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()


const App = () => {
  const state = store.getState()

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Cake Shop 🍰</h1>
      <p>Number of Cakes Left: {state.numberOfCake}</p>
    </div>
  )
}

export default App




