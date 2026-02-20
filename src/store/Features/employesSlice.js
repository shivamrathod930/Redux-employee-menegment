import { createSlice } from "@reduxjs/toolkit";
import { getEmployes, postEmployes, updateEmployes } from "../Thunk/FetchEmployes";


const initialState = {
     employees: [],
     loading: false,
     error: null,
}


const employesSlice = createSlice({
     name: 'employee',
     initialState,
     reducers: {},
     extraReducers: (addbuilder) => {
          addbuilder.addCase(getEmployes.pending, (state) => {
               state.error = null;
               state.loading = true;
          }),
               addbuilder.addCase(getEmployes.fulfilled, (state, action) => {
                    state.loading = false;
                    state.employees = action.payload;
               }),
               addbuilder.addCase(getEmployes.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
               }),
               // post 
               addbuilder.addCase(postEmployes.pending, (state) => {
                    state.error = null;
                    state.loading = true;
               }),
               addbuilder.addCase(postEmployes.fulfilled, (state) => {
                    state.loading = false;
               }),
               addbuilder.addCase(postEmployes.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
               })
          // update data
          addbuilder.addCase(updateEmployes.pending, (state) => {
               state.error = null;
               state.loading = true;
          }),
               addbuilder.addCase(updateEmployes.fulfilled, (state) => {
                    state.loading = false;
               }),
               addbuilder.addCase(updateEmployes.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
               })
     },
})

export const { } = employesSlice.actions
export default employesSlice.reducer;