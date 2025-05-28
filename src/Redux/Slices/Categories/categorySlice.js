
import {createSlice} from '@reduxjs/toolkit'
import { getDebtCategoryThunk, allCategoriesThunk, getCategoryByNameThunk } from './getCategoriesThunk';
import { addCategoryThunk } from './categoryThunk';


const INITIAL_STATE = {
   allCategories : []
}

export const categorySlice = createSlice({
    name: 'category',

    initialState: INITIAL_STATE,

    reducers:{
       
    },

    extraReducers: (builder)=>{

        builder.addCase(allCategoriesThunk.fulfilled, (state,action)=>{
            state.allCategories = action.payload
        })
        builder.addCase(getDebtCategoryThunk.fulfilled, (state,action)=>{
            // state.allCategories = action.payload
        })
        builder.addCase(getCategoryByNameThunk.fulfilled, (state,action)=>{
            // state.allCategories = action.payload
        })
        builder.addCase(addCategoryThunk.fulfilled, (state,action)=>{
            
        })
    }
});

 export const{extraReducers} = categorySlice.actions;