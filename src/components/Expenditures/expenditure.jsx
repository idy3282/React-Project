
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
  // { field: 'id', headerName: 'ID', width: 70 },
  // { field: 'school Symbol', headerName: 'School Symbol', width: 130 },
  // { field: 'categoryId', headerName: 'CategoryId', width: 130 },
  // {
  //   field: 'supplierNum',
  //   headerName: 'SupplierNum',
  //   type: 'number',
  //   width: 90,
  // },
  // {
  //   field: 'ExpenditureSum',
  //   headerName: 'סכום הוצאה',
  //   type: 'money',
  //   width: 90,
  // },
  // {
  //   field: 'date',
  //   headerName: 'Date',
  //   type: 'date',
  //   width: 150,
  // },
  // {
  //   field: 'ordererName',
  //   headerName: 'Orderer Name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  // },
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