import {createAsyncThunk} from '@reduxjs/toolkit'



export const addSuppThunk = createAsyncThunk(

    'addSuppThunk',
   
      async(supp) => {

      console.log(supp);
        const response = await fetch(`https://localhost:7086/api/Supplier`,{
            
        method:'POST',
        body: JSON.stringify(supp),
        headers: {
            'Content-Type': 'application/json'}
        });

       
           if(response.ok){
   
               const data= await response.json();
               console.log(data+" new supp");
              return data;
           }
   
           else throw new Error('failed')
           
   
   
    }
   )