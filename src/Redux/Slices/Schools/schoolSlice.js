
import {createSlice} from '@reduxjs/toolkit'
import {allSchoolsThunk, getDebtOfSchool, getExpendituresOfSchool, getTotalSumOfSchool} from './getSchoolThunk'

const INITIAL_STATE = {
   allSchools : [],
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
        builder.addCase(getTotalSumOfSchool.fulfilled, (state,action)=>{
            console.log("ppp");
            // state.schoolDebt = action.payload
        })

        builder.addCase(getExpendituresOfSchool.fulfilled, (state,action)=>{
            console.log("ppp");
             state.exp = action.payload
        })



    }
});

export const{extraReducers} = schoolSlice.actions;