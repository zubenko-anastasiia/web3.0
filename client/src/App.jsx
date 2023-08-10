import { Footer, Loader, Navbar, Services, Transactions, Welkome } from './components';

import { useState } from 'react'


const App = () => {
  return (
    <>
      <div className="text-3xl font-bold underline">
        <Navbar/> 
        <Welkome/>
      </div>
      <div>
        <Transactions/>
        <Loader/>
        <Services/>
        <Footer/>
      </div>
    </>
  )
}

export default App
