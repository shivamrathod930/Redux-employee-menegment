import {configureStore} from '@reduxjs/toolkit'
import employesSlice from './Features/employesSlice'
import popupSlice from './Features/popupSlice'

const store = configureStore({
     reducer:{
          popup:popupSlice,
          employee : employesSlice,
     },
})


export default store;