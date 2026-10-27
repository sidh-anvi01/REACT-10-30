// import React from 'react'

// const App = () => {
//   return (
//     <div>

//       <h1>hello react + vite </h1>
//       <h1>hello react + vite </h1>

//       <h1>hello react + vite </h1>

//       <h1>hello react + vite </h1>
//       <h1>hello react + vite </h1>

//     </div >
//   )
// }

// export default App



import React, { useState } from 'react'
import ListRendring from './pages/ListRendring'
import HomePage from './pages/HomePage'
import UseEffectEx from './pages/UseEffectEx'
import ApiIntegration from './pages/ApiIntegration'
import AppRoutes from './routes/AppRoutes'
const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(true)
  return (
    //  <ListRendring/>

  //  !isLoggedIn ? <HomePage/> :<ListRendring/>
  // <UseEffectEx/>
  // <ApiIntegration/>
  <AppRoutes/>

  )
}

export default App
