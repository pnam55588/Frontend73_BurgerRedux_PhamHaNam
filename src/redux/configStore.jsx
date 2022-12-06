import {configureStore} from '@reduxjs/toolkit'
import FoodReducer from './reducer/FoodReducer'


export const store = configureStore({
    reducer: {
        foodReducer: FoodReducer
    }
})