
import {createSlice} from '@reduxjs/toolkit'
import {allSchoolsThunk, getDebtOfSchool, getExpendituresOfSchool, getSchoolBySsymbolThunk, getTotalSumOfSchool} from './getSchoolThunk'
import { addSchoolThunk } from './schoolThunk';
import { allDataThunk } from '../AllData/allDataThunk';

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
          
            state.allSchools = action.payload 
             console.log("ssssssss ", state.schools);
        })
        // builder.addCase(allDataThunk.fulfilled, (state,action)=>{
          
        //     state.allSchools = action.payload.schools 
        //      console.log("ssssssss ", state.schools);
        // })

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