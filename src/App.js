import React from 'react'
import Burger from './components/Burger'
import Order from './components/Order'

function App() {
  return (
    <div className='container'>
        <div className="row justify-content-center align-items-center g-2">
            <div className="col-3"></div>
            <div className="col-4">
                <Burger />
            </div>
            <div className="col-5">
                <Order />
            </div>
        </div>
    </div>
  )
}

export default App
