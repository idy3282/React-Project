import {createAsyncThunk} from '@reduxjs/toolkit'



export const addCategoryThunk = createAsyncThunk(

    'addCategoryThunk',
   
      async(category) => {

      console.log(category);
        const response = await fetch(`https://localhost:7222/api/Category/create`,{
        
            
        method:'POST',
        body: JSON.stringify(category),
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