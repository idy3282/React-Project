
import {createAsyncThunk} from '@reduxjs/toolkit'

export const allCategoriesThunk = createAsyncThunk(

 'allCategoriesThunk',

   async() => {
    
    const response = await fetch(`https://localhost:7222/api/Category/GetAllCategories`);
        if(response.ok){

            const data= await response.json();
           return data;
        }

        else throw new Error('failed')
        


 }
);
export const getCategoryByNameThunk = createAsyncThunk(

  'getCategoryByNameThunk',
 
    async(name) => {
     
     const response = await fetch(`https://localhost:7222/api/Category/GetCategoryByName/${name}`);
     
         if(response.ok){
 
             const data= await response.json();
             console.log(data);
            return data;
         }
 
         else throw new Error('failed')
         
 
 
  }
 );
export const getDebtCategoryThunk = createAsyncThunk(

  'getDebtCategoryThunk',
 
    async(name) => {
     
     const response = await fetch(`https://localhost:7222/api/Category/GetDebtSum/${name}`);
         if(response.ok){
 
             const data= await response.json();
             console.log(data);
            return data;
         }
 
         else throw new Error('failed')
         
 
 
  }
 )