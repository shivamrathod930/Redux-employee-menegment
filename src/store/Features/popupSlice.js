import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employeepopup:false,
    deletepopup:false,
}

const popupSlice = createSlice({
     name:'popup',
     initialState,
     reducers:{
          openEmployeepopup:(state,action)=>{
               state.employeepopup = action.payload ?? true 
          },
          closeEmployeepopup:(state)=>{
               state.employeepopup = false
          },
          openDeletepopup:(state,action)=>{
               state.deletepopup = action.payload ?? true;
          },
          closeDeletepopup:(state)=>{
               state.deletepopup = false;
          }
     },
})

export const {openEmployeepopup,closeEmployeepopup,openDeletepopup,closeDeletepopup} = popupSlice.actions
export default popupSlice.reducer