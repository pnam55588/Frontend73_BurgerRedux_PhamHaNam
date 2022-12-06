import React from 'react'
import {useSelector} from 'react-redux'

function Burger() {
    const {burger} = useSelector(state => state.foodReducer)
    
    const arrSalad = []
    for (let i = 0; i < burger.salad; i++) {
        arrSalad[i] = i
    }
    const arrBeef = []
    for (let i = 0; i < burger.beef; i++) {
        arrBeef[i] = i
    }
    const arrCheese = []
    for (let i = 0; i < burger.cheese; i++) {
        arrCheese[i] = i
    }
    return (
        <div>
            <div className="breadTop"></div>
            <div className="food">
                {arrSalad?.map(item => {
                    return <div className='salad'></div>
                })}
                {arrCheese?.map(item => {
                    return <div className='cheese'></div>
                })}
                {arrBeef?.map(item => {
                    return <div className='beef'></div>
                })}
            </div>
            <div className="breadBottom"></div>
        </div>
    )
}

export default Burger