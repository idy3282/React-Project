
import {createSlice} from '@reduxjs/toolkit'
import { allSupplierThunk, getSupplierByNameThunk, getSupplierNameByLNumThunk } from './getSupplierThunk';
import { addSuppThunk } from './suplliersThunk';
import { allDataThunk } from '../AllData/allDataThunk';



const INITIAL_STATE = {
   allSuppliers : []
}

export const supplierSlice = createSlice({
    name: 'supplier',

    initialState: INITIAL_STATE,

    reducers:{
       
    },

    extraReducers: (builder)=>{

        // builder.addCase(allDataThunk.fulfilled, (state,action)=>{
        //     state.allSuppliers = action.payload.suppliers
        //     console.log("in the slice  ",state.allSuppliers);
        // })
        builder.addCase(allSupplierThunk.fulfilled, (state,action)=>{
            state.allSuppliers = action.payload
            console.log("in the slice  ",state.allSuppliers);
        })

        builder.addCase(getSupplierByNameThunk.fulfilled, (state,action)=>{
        })

        builder.addCase(getSupplierNameByLNumThunk.fulfilled, (state,action)=>{
            console.log(action.payload);
        })
        builder.addCase(addSuppThunk.fulfilled, (state,action)=>{
            console.log(action.payload);
        })
        builder.addCase(addSuppThunk.rejected, (state,action)=>{
            console.log("lui",action.payload);
        })
        

    }
});

 export const{extraReducers} = supplierSlice.actions;