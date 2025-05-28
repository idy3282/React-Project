
import {createSlice} from '@reduxjs/toolkit'
import {allSchoolsThunk, getDebtOfSchool, getExpendituresOfSchool, getSchoolBySsymbolThunk, getTotalSumOfSchool} from './getSchoolThunk'
import { addSchoolThunk } from './schoolThunk';

const INITIAL_STATE = {
   allSchools : [],
   currSchool:{},
   exp : []
//    schoolDebt :Number
}

export const schoolSlice = createSlice({
    name: 'school',

    initialState: INITIAL_STATE,

    reducers:{
       
    },

    extraReducers: (builder)=>{
//מוסיף את התנק שהוא קריאת שרת וכך יכול למלא נתונים 
        builder.addCase(allSchoolsThunk.fulfilled, (state,action)=>{
            console.log("gggg");
            state.allSchools = action.payload
        })

        builder.addCase(getDebtOfSchool.fulfilled, (state,action)=>{
            console.log("ppp");
            // state.schoolDebt = action.payload
        })
        builder.addCase(getSchoolBySsymbolThunk.fulfilled, (state,action)=>{
           
            state.currSchool = action.payload
        })
        builder.addCase(getTotalSumOfSchool.fulfilled, (state,action)=>{
            console.log("ppp");
            // state.schoolDebt = action.payload
        })

        builder.addCase(getExpendituresOfSchool.fulfilled, (state,action)=>{
            console.log("ppp");
             state.exp = action.payload
        })
        builder.addCase(addSchoolThunk.fulfilled, (state,action)=>{
        })


    }
});

export const{extraReducers} = schoolSlice.actions;