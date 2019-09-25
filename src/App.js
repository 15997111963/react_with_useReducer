import React, { useReducer } from 'react'
import RouterConfig from '@/router'
import { handleStore, initialState } from '@/store'

export const CountContext = React.createContext()

export default () => {
  const [state, dispatch] = useReducer(handleStore, initialState)
  return (
    <CountContext.Provider value={[state, dispatch]}>
      <div className="App">
        <RouterConfig/>
      </div>
    </CountContext.Provider>
  )
}
