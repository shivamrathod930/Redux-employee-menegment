import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosinstance from "../../config/AxiosInstance";


const getEmployes = createAsyncThunk(
     'employee/getEmployes',
     async (_, { rejectWithValue }) => {
          try {
               const Employes = await axiosinstance({
                    method: 'get',
                    url: '/employee',
               });
               return Employes.data;
          } catch (error) {
               return rejectWithValue('something went wrong')
          }
     }
)

const postEmployes = createAsyncThunk(
     'employee/postEmployes',
     async (formDetails, { rejectWithValue,dispatch}) => {
          try {
               const Employes = await axiosinstance({
                    method: 'post',
                    url: '/employee',
                    data: formDetails
               });
               dispatch(getEmployes());
               return Employes.data;
          } catch (error) {
               return rejectWithValue('something went wrong')
          }
     }
)

const updateEmployes = createAsyncThunk(
     'employee/updateEmployes',
     async ({id,details}, { rejectWithValue,dispatch}) => {
          try {
               const Employes = await axiosinstance({
                    method: 'put',
                    url: `/employee/${id}`,
                    data:details
               });
               dispatch(getEmployes());
               return Employes.data;
          } catch (error) {
               return rejectWithValue('something went wrong')
          }
     }
)


const DeleteEmployes = createAsyncThunk(
     'employee/DeleteEmployes',
     async (id, { rejectWithValue,dispatch}) => {
          try {
               const Employes = await axiosinstance({
                    method: 'delete',
                    url: `/employee/${id}`,
               });
               dispatch(getEmployes());
               return Employes.data;
          } catch (error) {
               return rejectWithValue('something went wrong')
          }
     }
)



export {
     getEmployes,
     postEmployes,
     DeleteEmployes,
     updateEmployes
}