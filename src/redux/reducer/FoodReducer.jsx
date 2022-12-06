import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    burger: {
        salad: 1,
        cheese: 1,
        beef: 1
    },
    menu: {
        salad: 10,
        cheese: 20,
        beef: 55
    }
}

const FoodReducer = createSlice({
    name: 'foodReducer',
    initialState,
    reducers: {
        getOrderAction: (state, action) => {
            state.burger = action.payload
        }
    }
});

export const { getOrderAction } = FoodReducer.actions

export default FoodReducer.reducer

export const getOrder = (burger) => {
    return (dispatch) => {
        const action = getOrderAction(burger)
        dispatch(action)
    }
}