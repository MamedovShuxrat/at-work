import react, { useState } from 'react'
import Header from './components/Header/Header'
import Routers from './router/Routers'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
    </>
  )
}

export default App
