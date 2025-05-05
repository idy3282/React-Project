
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { allSupplierThunk } from '../../Redux/Slices/Suplliers/getSupplierThunk';
import { Dialog } from '@mui/material';
import { AddSupplier } from './addSupplier';
export const Supplier = () =>{
const schools = useSelector(s => s.supplier.allSuppliers)
console.log("school  --",schools);
const dispatch=useDispatch()
const [addSupp,setAddSupp]=React.useState(false)
const [flag,setFlag]=React.useState(false)

const getData=async()=>{
       await dispatch(allSupplierThunk())
    }
    
useEffect(()=>{
    getData()
},[])

    return <>


   {
    
    // schools?.map((e)=>{
    //     return <div key ={e} style={{color:"blue",width:"3080px",height:"850px"}}>
    //         {e.schoolName}
            <TableContainer component={Paper} sx={{width:"50%",height:"auto"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>מספר עסק מורשה</TableCell>
            <TableCell align="right">שם ספק</TableCell>
            <TableCell align="right">פרטי בנק</TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell> */}
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {schools.map((sc) => (
            <TableRow
              key={sc.licensedNum}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {sc.licensedNum}
              </TableCell>
               <TableCell align="right">{sc.supplierName}</TableCell>
              <TableCell align="right">{sc.bankCode}</TableCell>
              {/* <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}
 
       {  <button className='button' onClick={() => { setAddSupp(true); debugger; }}>להוספת ספק לרשימה</button>}
          
       {addSupp && <Dialog open><AddSupplier setAddSupp={setAddSupp}/></Dialog>}
 
    </>
}