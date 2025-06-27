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

{/*function App() {
  return <h1>Check your browser console 😄</h1>
}*
}
export default App */
import React, { useState } from 'react'
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

const App = () => {
  const [cakeCount, setCakeCount] = useState(store.getState().numberOfCake)

  // Subscribe to store changes and update UI
  store.subscribe(() => {
    setCakeCount(store.getState().numberOfCake)
  })

  const handleOrder = () => {
    store.dispatch(orderCake())
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🍰 Cake Shop</h1>
      <p>Number of Cakes: {cakeCount}</p>
      <button
        onClick={handleOrder}
        style={{
          padding: '10px 20px',
          backgroundColor: '#8758ff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Order Cake
      </button>
    </div>
  )
}

export default App



