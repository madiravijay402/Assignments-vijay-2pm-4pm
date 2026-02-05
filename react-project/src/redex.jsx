  import React from 'react'
  
  function redex() {
    return (
      <div>
        redex is a state management libraray used with react to manage global application state 
        (data shered cross components)

        store - store is the centerlised price  where all application state is stored
        only one store for react app 

        slice - slice is pieace of redux state + logic for updating state 

        combines state+reduce+action

        reduces boiler plate 
        feature - based structure

        reducer - function updates the state based on an action
      </div>
    )
  }
  
  export default redex

