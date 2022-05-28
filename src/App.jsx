import { useState } from 'react'
import Login from './components/Login'
import { useStateValue } from './global_state/StateProvider'


function App() {
  const [{user}] = useStateValue()

  return (
   <>
  <h1>Main Page</h1>
  <p>{user ? `user Logged in ${user}` : `No user logged in`}</p>
   <Login/>
   </>
  )
}

export default App
