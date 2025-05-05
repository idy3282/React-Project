
import {createSlice} from '@reduxjs/toolkit'
import { allSupplierThunk, getSupplierByNameThunk, getSupplierNameByLNumThunk } from './getSupplierThunk';
import { addSuppThunk } from './suplliersThunk';



const INITIAL_STATE = {
   allSuppliers : []
}

export const supplierSlice = createSlice({
    name: 'supplier',

    initialState: INITIAL_STATE,

    reducers:{
       
    },

    extraReducers: (builder)=>{

        builder.addCase(allSupplierThunk.fulfilled, (state,action)=>{
            state.allSuppliers = action.payload
        })

        builder.addCase(getSupplierByNameThunk.fulfilled, (state,action)=>{
        })

        builder.addCase(getSupplierNameByLNumThunk.fulfilled, (state,action)=>{
            console.log(action.payload);
        })
        builder.addCase(addSuppThunk.fulfilled, (state,action)=>{
            console.log(action.payload);
        })
    }
});

 export const{extraReducers} = supplierSlice.actions;