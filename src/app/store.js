import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/reducers/cartReducer'


export default configureStore({
  reducer: {
		cart: cartReducer,
	},
})