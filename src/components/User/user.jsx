// import * as React from 'react';

// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { allUsersThunk } from '../../Redux/Slices/Users/getUsersThunk';
// import { Button, Input, InputAdornment, InputBase, OutlinedInput } from '@mui/material';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { useState } from 'react';
// import { addUserThunk } from '../../Redux/Slices/Users/usersThunk';
// import { allSchoolsThunk } from '../../Redux/Slices/Schools/getSchoolThunk';
// import './user.css'


// export const User = () => {

//   const [showInput, setShowInput] = useState(false)
//   const [id, setId] = useState('')
//   const [UserName, setUserName] = useState('')
//   const [sSymbol, setSsymbol] = useState('')

//   const userFromServer = useSelector(s => s.user.allUsers)
//   const users = [...userFromServer];
//   const currUser = useSelector(s => s.user.currUser)

//   const schools = useSelector(s => s.school.allSchools)
  
//   const dispatch = useDispatch()

//   const getData = async () => {
//     await dispatch(allUsersThunk())
//   }
//   const addUser = async () => {
//     // setShowInput(false);
//    debugger
//     await dispatch(addUserThunk({ id: id, UserName: UserName, schoolSymbol: sSymbol }));
    
//     setId('');
//     setUserName('');
//     setSsymbol('');
//     getData();
//   }
//   const getSchools = async () => {
//     await dispatch(allSchoolsThunk());
    
//   }
// const sorting=()=>{
  
// }
//   // useEffect(() => {
//   //   users.sort((a,b)=>a.schoolSymbol-b.schoolSymbol)
//   //  // getSchools()
//   // }, [users])

// useEffect(()=>{
//   if(users.length>0){
//     getSchools()
//   }
// },[users])


//   return <>


//     {

      
//       <TableContainer component={Paper} sx={{ width: "40%", height:"850px"}}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead sx={{position:'sticky',scrollbarColor:"blue"}}>
//             <TableRow>
//             <TableCell align="right"> שם משתמש</TableCell>
//               <TableCell>  ססמת משתמש</TableCell>   
//               <TableCell align="right"> שם מוסד</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((sc) => (
//              (sc.schoolSymbol == currUser.schoolSymbol||currUser.schoolSymbol==0)&&<TableRow
//                 key={sc.id}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell align="right">{sc.userName}</TableCell>
//                 <TableCell component="th" scope="row">
//                   {sc.id}
//                 </TableCell>
                
//                 <TableCell align="right">{sc.schoolSymbol}</TableCell>
              
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       }
      
//        {currUser.schoolSymbol==0 && !showInput && <button className='button' onClick={() => { debugger; setShowInput(true) ; getSchools()}}>להוספת משתמש</button>}

//             {showInput &&
//               <div id="addUser">
//                 <Input value={id} onChange={(i) => setId(i.target.value)} placeholder='Id' />
//                 <Input value={UserName} onChange={(n) => setUserName(n.target.value)} placeholder='User Name' />
//               {/* ======================================= */}

              
//             {/* --------------- */}
//               <Box sx={{ minWidth: 120 }}>
//                  <FormControl fullWidth>
//                  <InputLabel id="demo-simple-select-label">סמל מוסד</InputLabel>
//                <Select
//                  labelId="demo-simple-select-label"
//                  id="demo-simple-select"
//                  value={sSymbol}
//             // label="schoolSymbol"
//                     onChange={ (n)=>setSsymbol(n.target.value)}>      
//                     {schools?.map((s,index)=>{
//                      return <MenuItem value={schools[index].schoolSymbol}>{s.schoolSymbol}</MenuItem>
//                     })}

//                   </Select>
//                 </FormControl>
//               </Box>




//               {/* ======================================= */}
//               <button className='button' onClick={() => {addUser();setShowInput(false)}}>לאישור</button>

//               </div>}
       


//   </>}















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










  import * as React from 'react';
  import { useEffect } from 'react';
  import { useSelector, useDispatch } from 'react-redux';
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TableRow from '@mui/material/TableRow';
  import Paper from '@mui/material/Paper';
  import { allUsersThunk } from '../../Redux/Slices/Users/getUsersThunk';
  import { 
    Button, Input, Box, Typography, IconButton, 
    FormControl, InputLabel, MenuItem, Select, 
    Tooltip, Dialog, DialogTitle, DialogContent, DialogActions
  } from '@mui/material';
  import SortIcon from '@mui/icons-material/Sort';
  import AddCircleIcon from '@mui/icons-material/AddCircle';
  import PersonAddIcon from '@mui/icons-material/PersonAdd';
  import { useState } from 'react';
  import { addUserThunk } from '../../Redux/Slices/Users/usersThunk';
  import { allSchoolsThunk } from '../../Redux/Slices/Schools/getSchoolThunk';
  import './user.css';
  
  export const User = () => {
    const [showInput, setShowInput] = useState(false);
    const [id, setId] = useState('');
    const [UserName, setUserName] = useState('');
    const [sSymbol, setSsymbol] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
  
    const userFromServer = useSelector(s => s.user.allUsers);
    const users = [...userFromServer];
    const currUser = useSelector(s => s.user.currUser);
    const schools = useSelector(s => s.school.allSchools);
    
    const dispatch = useDispatch();
  
    const getData = async () => {
      await dispatch(allUsersThunk());
    };
  
    const addUser = async () => {
      await dispatch(addUserThunk({ id: id, UserName: UserName, schoolSymbol: sSymbol }));
      setId('');
      setUserName('');
      setSsymbol('');
      getData();
    };
  
    const getSchools = async () => {
      await dispatch(allSchoolsThunk());
    };
  
    const handleSort = (field) => {
      if (sortBy === field) {
        // Toggle direction if same field
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        // New field, default to ascending
        setSortBy(field);
        setSortDirection('asc');
      }
    };
  
    const getSortedUsers = () => {
      if (!sortBy) return users;
  
      return [...users].sort((a, b) => {
        let valueA, valueB;
  
        if (sortBy === 'userName') {
          valueA = a.userName || '';
          valueB = b.userName || '';
        } else if (sortBy === 'schoolSymbol') {
          valueA = a.schoolSymbol || 0;
          valueB = b.schoolSymbol || 0;
          // For numeric values
          return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
        } else {
          valueA = a[sortBy] || '';
          valueB = b[sortBy] || '';
        }
  
        // For string values
        if (sortDirection === 'asc') {
          return valueA.localeCompare(valueB, 'he');
        } else {
          return valueB.localeCompare(valueA, 'he');
        }
      });
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    useEffect(() => {
      if (users.length > 0) {
        getSchools();
      }
    }, [users]);
  
    const sortedUsers = getSortedUsers();
  
    return (
      <Box sx={{ padding: 3, direction: 'rtl' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
            ניהול משתמשים
          </Typography>
          
          {currUser.schoolSymbol === 0 && !showInput && (
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<PersonAddIcon />}
              onClick={() => { setShowInput(true); getSchools(); }}
              sx={{ 
                borderRadius: 8,
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 8px rgba(0,0,0,0.15)' }
              }}
            >
              הוסף משתמש
            </Button>
          )}
        </Box>
  
        <TableContainer 
          component={Paper} 
          sx={{ 
            width: "100%", 
            maxWidth: 1000,
            height: "auto", 
            maxHeight: "650px",
            mb: 3,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderRadius: 2
          }}
        >
          <Table stickyHeader aria-label="users table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell align="right">
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>שם משתמש</Typography>
                    <Tooltip title="מיון לפי שם משתמש">
                      <IconButton size="small" onClick={() => handleSort('userName')}>
                        <SortIcon 
                          fontSize="small" 
                          color={sortBy === 'userName' ? 'primary' : 'action'}
                          sx={{ 
                            transform: sortBy === 'userName' && sortDirection === 'desc' ? 'rotate(180deg)' : 'none'
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontWeight: 'bold' }}>ססמת משתמש</Typography>
                </TableCell>
                <TableCell align="right">
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>סמל מוסד</Typography>
                    {currUser.schoolSymbol === 0 && (
                      <Tooltip title="מיון לפי סמל מוסד">
                        <IconButton size="small" onClick={() => handleSort('schoolSymbol')}>
                          <SortIcon 
                            fontSize="small" 
                            color={sortBy === 'schoolSymbol' ? 'primary' : 'action'}
                            sx={{ 
                              transform: sortBy === 'schoolSymbol' && sortDirection === 'desc' ? 'rotate(180deg)' : 'none'
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedUsers.map((sc) => (
                (sc.schoolSymbol === currUser.schoolSymbol || currUser.schoolSymbol === 0) && (
                  <TableRow
                    key={sc.id}
                    sx={{ 
                      '&:last-child td, &:last-child th': { border: 0 },
                      '&:hover': { backgroundColor: '#f1f8fe' }
                    }}
                  >
                    <TableCell align="right">{sc.userName}</TableCell>
                    <TableCell component="th" scope="row">{sc.id}</TableCell>
                    <TableCell align="right">{sc.schoolSymbol}</TableCell>
                  </TableRow>
                )
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  
        <Dialog 
          open={showInput} 
          onClose={() => setShowInput(false)}
          PaperProps={{
            sx: { borderRadius: 2, p: 1, minWidth: '400px', direction: 'rtl' }
          }}
        >
          <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            הוספת משתמש חדש
          </DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
              <Input 
                value={id} 
                onChange={(i) => setId(i.target.value)} 
                placeholder='מזהה משתמש' 
                fullWidth
                sx={{ mb: 2 }}
              />
              <Input 
                value={UserName} 
                onChange={(n) => setUserName(n.target.value)} 
                placeholder='שם משתמש' 
                fullWidth
                sx={{ mb: 2 }}
              />
              <FormControl fullWidth>
                <InputLabel id="school-symbol-label">סמל מוסד</InputLabel>
                <Select
                  labelId="school-symbol-label"
                  id="school-symbol-select"
                  value={sSymbol}
                  onChange={(n) => setSsymbol(n.target.value)}
                >
                  {schools?.map((s, index) => (
                    <MenuItem key={s.schoolSymbol} value={s.schoolSymbol}>
                      {s.schoolSymbol} - {s.schoolName || ''}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center', p: 2 }}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => { addUser(); setShowInput(false); }}
              sx={{ 
                borderRadius: 8,
                minWidth: '120px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 8px rgba(0,0,0,0.15)' }
              }}
            >
              אישור
            </Button>
            <Button 
              variant="outlined" 
              onClick={() => setShowInput(false)}
              sx={{ 
                borderRadius: 8,
                minWidth: '120px'
              }}
            >
              ביטול
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  };
  
  
  