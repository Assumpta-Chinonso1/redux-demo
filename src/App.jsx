import React from 'react'
import { createStore } from 'redux'
import './App.css'
import { bindActionCreators } from 'redux'

const CAKE_ORDERED = 'CAKE_ORDERED'
const RESTOCKED_CAKE = 'RESTOCKED_CAKE'
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,

  }
  
}

function restockedCake(qty = 1) {
  return{
    type: RESTOCKED_CAKE,
    payload: qty
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
      case RESTOCKED_CAKE:
        return {
          ...state,
          numberOfCake: state.numberOfCake + action.payload
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

const actions = bindActionCreators({orderCake, restockedCake}, store.dispatch)

actions.orderCake
actions.orderCake
actions.orderCake
actions.restockedCake(4)

unsubscribe()

const App = () => {
  const state = store.getState()
  return (
    <div className='cake-count' style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Cake Shop 🍰</h1>
      <p>Number of Cakes Left:{state.numberOfCake}</p>
    </div>

  )
}


export default App




