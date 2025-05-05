import * as React from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { allUsersThunk } from '../../Redux/Slices/Users/getUsersThunk';
import { Button, Input, InputAdornment, InputBase, OutlinedInput } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { addUserThunk } from '../../Redux/Slices/Users/usersThunk';
import { allSchoolsThunk } from '../../Redux/Slices/Schools/getSchoolThunk';
import './user.css'


export const User = () => {

  const [showInput, setShowInput] = useState(false)
  const [id, setId] = useState('')
  const [UserName, setUserName] = useState('')
  const [sSymbol, setSsymbol] = useState('')

  const userFromServer = useSelector(s => s.user.allUsers)
  const users = [...userFromServer];
  const currUser = useSelector(s => s.user.currUser)

  const schools = useSelector(s => s.school.allSchools)
  
  const dispatch = useDispatch()

  const getData = async () => {
    await dispatch(allUsersThunk())
  }
  const addUser = async () => {
    // setShowInput(false);
   debugger
    await dispatch(addUserThunk({ id: id, UserName: UserName, schoolSymbol: sSymbol }));
    
    setId('');
    setUserName('');
    setSsymbol('');
    getData();
  }
  const getSchools = async () => {
    await dispatch(allSchoolsThunk());
    
  }
const sorting=()=>{
  
}
  // useEffect(() => {
  //   users.sort((a,b)=>a.schoolSymbol-b.schoolSymbol)
  //  // getSchools()
  // }, [users])

useEffect(()=>{
  if(users.length>0){
    getSchools()
  }
},[users])


  return <>


    {

      
      <TableContainer component={Paper} sx={{ width: "40%", height:"850px"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{position:'sticky',scrollbarColor:"blue"}}>
            <TableRow>
            <TableCell align="right"> שם משתמש</TableCell>
              <TableCell>  ססמת משתמש</TableCell>   
              <TableCell align="right"> שם מוסד</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((sc) => (
             (sc.schoolSymbol == currUser.schoolSymbol||currUser.schoolSymbol==0)&&<TableRow
                key={sc.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{sc.userName}</TableCell>
                <TableCell component="th" scope="row">
                  {sc.id}
                </TableCell>
                
                <TableCell align="right">{sc.schoolSymbol}</TableCell>
              
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      }
      
       {currUser.schoolSymbol==0 && !showInput && <button className='button' onClick={() => { debugger; setShowInput(true) ; getSchools()}}>להוספת משתמש</button>}

            {showInput &&
              <div id="addUser">
                <Input value={id} onChange={(i) => setId(i.target.value)} placeholder='Id' />
                <Input value={UserName} onChange={(n) => setUserName(n.target.value)} placeholder='User Name' />
              {/* ======================================= */}

              
            {/* --------------- */}
              <Box sx={{ minWidth: 120 }}>
                 <FormControl fullWidth>
                 <InputLabel id="demo-simple-select-label">סמל מוסד</InputLabel>
               <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={sSymbol}
            // label="schoolSymbol"
                    onChange={ (n)=>setSsymbol(n.target.value)}>      
                    {schools?.map((s,index)=>{
                     return <MenuItem value={schools[index].schoolSymbol}>{s.schoolSymbol}</MenuItem>
                    })}

                  </Select>
                </FormControl>
              </Box>




              {/* ======================================= */}
              <button className='button' onClick={() => {addUser();setShowInput(false)}}>לאישור</button>

              </div>}
       


  </>}

  // export default function BasicSelect() {
  //   const [schoolSymbol, setSchoolSymbol] = React.useState('');
  
  //   const handleChange = (event) => {
  //     setSchoolSymbol(event.target.value);
  //   };
  
  //   return (
  //     <Box sx={{ minWidth: 120 }}>
  //       <FormControl fullWidth>
  //         <InputLabel id="demo-simple-select-label">Age</InputLabel>
  //         <Select
  //           labelId="demo-simple-select-label"
  //           id="demo-simple-select"
  //           value={schoolSymbol}
  //           label="schoolSymbol"
  //           onChange={handleChange}
  //         >
  //           <MenuItem value={10}>Ten</MenuItem>
  //           <MenuItem value={20}>Twenty</MenuItem>
  //           <MenuItem value={30}>Thirty</MenuItem>
  //         </Select>
  //       </FormControl>
  //     </Box>
  //   );
  // }
