
import {createSlice} from '@reduxjs/toolkit'
import { allUsersThunk, getUserById } from './getUsersThunk';
import { addUserThunk } from './usersThunk';




const INITIAL_STATE = {
   allUsers : [],
   newUser : {},
   currUser :{},

//    שומר קוד משתמש נוכחי
//    checkUser : null
   
}

export const userSlice = createSlice({
    name: 'user',

    initialState: INITIAL_STATE,

    reducers:{
       
    },

    extraReducers: (builder)=>{

        builder.addCase(allUsersThunk.fulfilled, (state,action)=>{
            state.allUsers = action.payload
        })
        builder.addCase(addUserThunk.fulfilled, (state,action)=>{
            state.newUser = action.payload
        })
        builder.addCase(getUserById.fulfilled, (state,action)=>{
            // state.checkUser = action.payload
             
            // if(action.status==204){
            // state.currUser ='not' 

            // }
            // if(action.status == 200)
             state.currUser = action.payload
            // if(state.checkUser.schoolSymbol == 0000)
                 
        })
        builder.addCase(getUserById.rejected, (state,action)=>{
            state.currUser = undefined
        })
    }
});

 export const{extraReducers} = userSlice.actions;