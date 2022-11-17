import { configureStore } from '@reduxjs/toolkit'
import info from "./slice"


export default configureStore({
  reducer: {
    info
  }
})
