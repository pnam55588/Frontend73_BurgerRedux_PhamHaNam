import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getOrder } from '../redux/reducer/FoodReducer'


function Order() {

    const { burger, menu } = useSelector(state => state.foodReducer)
    const dispatch = useDispatch()
    let [salad, setSalad] = useState(burger.salad)
    let [cheese, setCheese] = useState(burger.cheese)
    let [beef, setBeef] = useState(burger.beef)
    useEffect(() => {
        let newBurger = {
            salad: salad,
            cheese: cheese,
            beef: beef
        }
        const action = getOrder(newBurger)
        dispatch(action)
    }, [salad, cheese, beef])



    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">thức ăn</th>
                        <th scope="col"></th>
                        <th scope="col">đơn giá</th>
                        <th scope="col">thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td scope="row">salad</td>
                        <td>
                            <button className='btn btn-success' onClick={() => {
                                setSalad(salad + 1)
                            }}>+</button>
                            <span className='m-2'>{burger.salad}</span>
                            <button className='btn btn-danger' onClick={() => {
                                if (salad !== 0)
                                    setSalad(salad - 1)
                            }}>-</button>
                        </td>
                        <td>{menu.salad}</td>
                        <td>{menu.salad * burger.salad}</td>
                    </tr>
                    <tr className="">
                        <td scope="row">cheese</td>
                        <td>
                            <button className='btn btn-success' onClick={() => {
                                setCheese(cheese + 1)
                            }}>+</button>
                            <span className='m-2'>{burger.cheese}</span>
                            <button className='btn btn-danger' onClick={() => {
                                if (cheese !== 0)
                                    setCheese(cheese - 1)
                            }}>-</button>
                        </td>
                        <td>{menu.cheese}</td>
                        <td>{menu.cheese * burger.cheese}</td>
                    </tr>
                    <tr className="">
                        <td scope="row">beef</td>
                        <td>
                            <button className='btn btn-success' onClick={() => {
                                setBeef(beef + 1)
                            }}>+</button>
                            <span className='m-2'>{burger.beef}</span>
                            <button className='btn btn-danger' onClick={() => {
                                if (beef !== 0)
                                    setBeef(beef - 1)
                            }}>-</button>
                        </td>
                        <td>{menu.beef}</td>
                        <td>{menu.beef * burger.beef}</td>
                    </tr>
                    <tr className="">
                        <td scope="row"></td>
                        <td></td>
                        <td>Tổng cộng</td>
                        <td>{menu.salad * burger.salad + menu.cheese*burger.cheese + menu.beef*burger.beef}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Order