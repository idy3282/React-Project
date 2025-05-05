import {createAsyncThunk} from '@reduxjs/toolkit'

export const addExpThunk = createAsyncThunk(

    'addExpThunk',
   
      async(exp) => {

    
        const response = await fetch("https://localhost:7222/api/Expenditures/create"
        ,{
            
        method:'POST',
        body: JSON.stringify(exp),
        headers: {
            'Content-Type': 'application/json'}
        });

       
           if(response.ok){
   
               const data= await response.json();
               console.log(data+" new user");
              return data;
           }
   
           else throw new Error('failed')
           
   
   
    }
   )
  //  export const addUserThunk = createAsyncThunk(

  //   'addUserThunk',
   
  //     async(user) => {

  //     console.log(user);
  //       const response = await fetch("https://localhost:7222/api/User/create",{
            
  //       method:'POST',
  //       body: JSON.stringify(user),
  //       headers: {
  //           'Content-Type': 'application/json'}
  //       });

       
  //          if(response.ok){
   
  //              const data= await response.json();
  //              console.log(data+" new user");
  //             return data;
  //          }
   
  //          else throw new Error('failed')
           
   
   
  //   }
  //  )

   
