
import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { allExpendituresThunk } from '../../Redux/Slices/Expenditures/getExpendituresThunk';
import { TableBody } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid'
export const Expenditure = ()=>{


const columns = [
  
];
const expenditures = useSelector(e => e.expenditure.allExpenditures)



const dispatch=useDispatch()

const getData=async()=>{
       await dispatch(allExpendituresThunk())
      
    }
    
useEffect(()=>{
    getData()
    
},[])


const paginationModel = { page: 0, pageSize: 5 };


  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <TableBody
        rows={expenditures}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}