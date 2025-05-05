
import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { allCategoriesThunk, getDebtCategoryThunk } from '../../Redux/Slices/Categories/getCategoriesThunk';
import { Dialog, Input } from '@mui/material';
import { AddCategory } from './addCategory';

export const Category = () =>{
    const [name,setName]=useState('')
    const [showInput,setShowInput]=useState(false)
    const [addCtgr,setAddCtgr]=useState(false)
   
    
const categories = useSelector(c => c.category.allCategories)
const dispatch=useDispatch()

// const getData=async()=>{
//        await dispatch(allCategoriesThunk())
//     }
const getDebt= async()=>{
      await dispatch(getDebtCategoryThunk())
}    
// useEffect(()=>{
//     getData()
// },[])

    return <>


   {
    
    categories?.map((c)=>{
        return <div key ={c} style={{color:"red",width:"80px",height:"50px"}}>
            {c.categoryName}
       
            </div>
          
    }
       
            

    )
   }
       {  <button className='button' onClick={() => { setAddCtgr(true); debugger; }}>להוספת קטגוריה</button>}
       {addCtgr && <Dialog open><AddCategory setAddCtgr = {setAddCtgr}/></Dialog>}

<button onClick={()=>{debugger;setShowInput(true)}}>לקבלת סכום חוב לפי קטגוריה</button>
         
         {showInput && 
        <div>
             <Input value={name} onChange={(n)=>setName(n.target.value)} placeholder='שם קטגוריה'/>
             <button onClick={()=>getDebt()}> לאישור</button>
             {/* {schoolDebt && <span>{schoolDebt}</span>} */}
         </div>}
    </>
}