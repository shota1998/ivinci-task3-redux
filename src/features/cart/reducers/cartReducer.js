import { createSlice } from '@reduxjs/toolkit'

export const cartReducer = createSlice({
  name: 'counter',

  initialState: {
    items: [
        {
          id: 0,
          title: "sampleTitle0",
          value: 3.0,
          description: "sampleDescription0",
          quantity: 10,
        },
        {
          id: 1,
          title: "sampleTitle1",
          value: 5.0,
          description: "sampleDescription1",
          quantity: 0,
        },
      ],
  },
})

export default cartReducer.reducer