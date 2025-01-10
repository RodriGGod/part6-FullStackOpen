import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: ''
}

const notificationReducer = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      state.message = action.payload

      console.log(state)
    },
    removeNotification(state) {
      state.message = ''
    }
  }
})

export const { setNotification, removeNotification } = notificationReducer.actions
export default notificationReducer.reducer