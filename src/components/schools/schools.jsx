import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import useAutocomplete from '@mui/material/useAutocomplete';
// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { allSchoolsThunk } from '../../Redux/Slices/Schools/getSchoolThunk';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getDebtOfSchool } from '../../Redux/Slices/Schools/getSchoolThunk';
import { getTotalSumOfSchool } from '../../Redux/Slices/Schools/getSchoolThunk';

// export const S = (prop) => {
//   const { school } = prop;
//   const [open, setOpen] = React.useState(false);
  


//   //const exp = useSelector(s => s.school.exp)


//   console.log("school  --", school);


 

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' }, height: "auto" }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             // show data
//             onClick={() => { setOpen(!open) }}
//           >
//             {/* {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}🔹
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row"></TableCell>
//         <TableCell align="right">{school.schoolSymbol}</TableCell>
//         <TableCell align="right">{school.schoolName}</TableCell>
//         <TableCell align="right">{school.budget}</TableCell>
//         {/* <TableCell align="right">{schools.protein}</TableCell> */}
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             {/* טבלה שנפתחת בלחיצה */}
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 הוצאות בית ספר
//               </Typography>

//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>תאריך הזמנה </TableCell>
//                     <TableCell>סכום הוצאה</TableCell>
//                     <TableCell>קטגוריה</TableCell>
//                     <TableCell align="right">בית ספר</TableCell>
//                     <TableCell align="right">שם  מבצע ההזמנה</TableCell>
//                     <TableCell align="right">קוד ספק</TableCell>
//                     <TableCell>האם אושר?</TableCell>


//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {school.expenditures.map((exp) => (
//                     <TableRow >
//                       <TableCell> {exp.date}</TableCell>
//                       <TableCell component="th" scope="row">
//                         {exp.expenditureSum}
//                       </TableCell>


//                       <TableCell> {exp.categorId}</TableCell>
//                       <TableCell> {exp.schoolSymbol}</TableCell>
//                       <TableCell> {exp.ordererName}</TableCell>
//                       <TableCell>{exp?.supplierNum}</TableCell>
//                       <TableCell align="right">{exp?.isAccepted}</TableCell>
//                       {/* <TableCell align="right">
//                         {Math.round(historyRow.amount * exp.price * 100) / 100}
//                       </TableCell> */}
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// ==================




export  function CollapsibleTable() {

  
  const schools = useSelector(s => s.school.allSchools)
  const dispatch = useDispatch()

  const getSchoolDebt = async (name) => {
    debugger
    await dispatch(getDebtOfSchool(name))
  }

  const getSchoolTotalSum = async (name) => {
    debugger
    await dispatch(getTotalSumOfSchool(name))
  }

  

  const getData = async () => {
    await dispatch(allSchoolsThunk())
  }
  React.useEffect(() => {
    getData()
  }, [])
  return <>
    {/* <TableContainer component={Paper}>
      <Table aria-label="collapsible table" sx={{ width: '40%' }}>
        <TableHead >
          <TableRow style={{ color: 'rgba(29, 77, 132, 0.987)', border: "1px blue solid" }}>

            <TableCell sx={{ width: '200px' }} >שם מוסד</TableCell>
            <TableCell sx={{ width: '500px' }} >סמל מוסד</TableCell>
            <TableCell sx={{ width: '500px' }}>תקציב כולל</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          
          {schools.map((row) => (
            
            <S school={row} />)
          )}
        </TableBody>
      </Table>
    </TableContainer> */}



    {/* {showInput &&
  <div>
    <Input value={name} onChange={(n) => setName(n.target.value)} placeholder='שם מוסד' />
    <button onClick={() => getSchoolDebt(name)}> לאישור</button>
   
  </div>} */}
    {/*  */}
    {/* 
{showInput2 &&
  <div>
    <Input value={name} onChange={(n) => setName(n.target.value)} placeholder='שם מוסד' />
    <button onClick={() => getSchoolTotalSum(name)}> לאישור</button>
    
  </div>} */}


    {
      // <Box sx={{ minWidth: 120 }}>
      //   <FormControl fullWidth>
      //     <InputLabel id="demo-simple-select-label">סמל מוסד</InputLabel>
      //     <Select
      //       labelId="demo-simple-select-label"
      //       id="demo-simple-select"
      //       value={name}
      //       onChange={(n) => setName(n.target.value)}>
      //       {schools?.map((s, index) => {
      //         return <MenuItem value={schools[index].schoolName}>{s.schoolName}</MenuItem>
      //       })}

      //     </Select>
      //   </FormControl>
      // </Box> 
    
      // <CustomizedHook/>
      <CustomizedHook school={schools}/>
    }

    {/* {name &&<div>
      <button onClick={() => { debugger; setShowInput(true)}}>לקבלת חוב</button> 
      <button onClick={() => { debugger; setShowInput2(true) }}>לקבלת הוצאות מוסד</button></div>
    } */}

  </>
}











// ===============================================



//אופציות לבחירה
const Root = styled('div')(({ theme }) => ({
  color: 'rgba(0,0,0,0.85)',
  fontSize: '14px',
  ...theme.applyStyles('dark', {
    color: 'rgba(255,255,255,0.65)',
  }),
}));
// input
const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;
//input
const InputWrapper = styled('div')(({ theme }) => ({
  width: '300px',
  border: '1px solid #d9d9d9',
  backgroundColor: '#fff',
  borderRadius: '4px',
  padding: '1px',
  display: 'flex',
  flexWrap: 'wrap',
  ...theme.applyStyles('dark', {
    borderColor: '#434343',
    backgroundColor: '#141414',
  }),
  '&:hover': {
    borderColor: '#40a9ff',
    ...theme.applyStyles('dark', {
      borderColor: '#177ddc',
    }),
  },
  '&.focused': {
    borderColor: '#40a9ff',
    boxShadow: '0 0 0 2px rgb(24 144 255 / 0.2)',
    ...theme.applyStyles('dark', {
      borderColor: '#177ddc',
    }),
  },
  '& input': {
    backgroundColor: '#fff',
    color: 'rgba(0,0,0,.85)',
    height: '30px',
    boxSizing: 'border-box',
    padding: '4px 6px',
    width: '0',
    minWidth: '30px',
    flexGrow: 1,
    border: 0,
    margin: 0,
    outline: 0,
    ...theme.applyStyles('dark', {
      color: 'rgba(255,255,255,0.65)',
      backgroundColor: '#141414',
    }),
  },
}));

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      {/* <CloseIcon onClick={onDelete} /> */}
      <span onClick={onDelete} style={{ cursor: 'pointer', marginLeft: '8px' }}>❌</span>
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '24px',
  margin: '2px',
  lineHeight: '22px',
  backgroundColor: '#fafafa',
  border: `1px solid #e8e8e8`,
  borderRadius: '2px',
  boxSizing: 'content-box',
  padding: '0 4px 0 10px',
  outline: 0,
  overflow: 'hidden',
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderColor: '#303030',
  }),
  '&:focus': {
    borderColor: '#40a9ff',
    backgroundColor: '#e6f7ff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#003b57',
      borderColor: '#177ddc',
    }),
  },
  '& span': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  '& span:last-child': {
    overflow: 'visible',
    cursor: 'pointer',
    padding: '0 4px',
  },
}));

const Listbox = styled('ul')(({ theme }) => ({
  width: '300px',
  margin: '2px 0 0',
  padding: 0,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: '#fff',
  overflow: 'auto',
  maxHeight: '250px',
  borderRadius: '4px',
  boxShadow: '0 2px 8px rgb(0 0 0 / 0.15)',
  zIndex: 1,
  ...theme.applyStyles('dark', {
    backgroundColor: '#141414',
  }),
  '& li': {
    padding: '5px 12px',
    display: 'flex',
    '& span': {
      flexGrow: 1,
    },
    '& svg': {
      color: 'transparent',
    },
  },
  "& li[aria-selected='true']": {
    backgroundColor: '#fafafa',
    fontWeight: 600,
    ...theme.applyStyles('dark', {
      backgroundColor: '#2b2b2b',
    }),
    '& svg': {
      color: '#1890ff',
    },
  },
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: '#e6f7ff',
    cursor: 'pointer',
    ...theme.applyStyles('dark', {
      backgroundColor: '#003b57',
    }),
    '& svg': {
      color: 'currentColor',
    },
  },
}));

// ================

// ====================

//  export const CustomizedHook=(props) =>{
//   const {school} = props;
//   const [name, setName] = useState(false);
//   const [showInput, setShowInput] = useState(false);
//   const [showInput2, setShowInput2] = useState(false);
//   const [totalDebt, setTotalDebt] = React.useState(0);

  
// // const getTotalDebt =()=>{
// //   value.map(s=>{ s.expenditures.map(e=> setTotalDebt(totalDebt+e.remainToPay))})
// //  }
//  const getTotalDebt = () => {
//   let total = 0;
//   value.forEach(s => {
//     s.expenditures.forEach(e => {
//       total += e.remainToPay;
//     });
//   });
//   setTotalDebt(total);
// }
//   const {
//     getRootProps,
//     getInputLabelProps,
//     getInputProps,
//     getTagProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//     value,
//     focused,
//     setAnchorEl,
//   } = useAutocomplete({
//     id: 'customized-hook-demo',
//     // defaultValue: undefined,
//     multiple: true,
//     options: school,
//     getOptionLabel: (option) => option?.schoolName,
//   });
    

//   return (
//     <Root>
//       <div {...getRootProps()}>
//         <Label {...getInputLabelProps()}>Customized hook</Label>
//         <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
//           {/*המוסדות הנבחרים  */}
//           {value.map((option, index) => {
//             console.log(value);
//             console.log(option.schoolName+"❤❤");
//             const { key, ...tagProps } = getTagProps({ index });
//             index>=0?setName(true):setName(false);
//             return <StyledTag key={key} {...tagProps} label={option?.schoolName} />;
            
//           })}
//           <input {...getInputProps()}/>
//         </InputWrapper>
//       </div>
//       {groupedOptions.length > 0 ? (
//         <Listbox {...getListboxProps()}>
//           {groupedOptions.map((option, index) => {
//             const { key, ...optionProps } = getOptionProps({ option, index });
//             return (
//               <li key={key} {...optionProps}>
//                 <span>{option.schoolName}</span>
//                 {/* <CheckIcon fontSize="small" /> */}
//               </li>
//             );
//           })}
//         </Listbox>
//       ) : null}
//       {name &&<div>
//       <button onClick={() => { debugger; setShowInput(true)}}>לקבלת חוב</button> 
//       <button onClick={() => { debugger; setShowInput2(true) }}>לקבלת הוצאות מוסד</button></div>
//     }
//     {/* {name && <div style={{ marginTop: '16px', display: 'flex' }}>
//   <StyledButton primary onClick={() => { setShowInput(true) }}>לקבלת חוב</StyledButton>
//   <StyledButton onClick={() => { setShowInput2(true) }}>לקבלת הוצאות מוסד</StyledButton>
// </div>} */}
//     </Root>
//   );
// }
export const CustomizedHook = (props) => {
  const { school } = props;
  const [name, setName] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showInput2, setShowInput2] = useState(false);
  const [totalDebt, setTotalDebt] = React.useState(0);

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    multiple: true,
    options: school || [],
    getOptionLabel: (option) => option?.schoolName || '',
  });
  
  // Use useEffect to update the name state when value changes
  React.useEffect(() => {
    setName(value.length > 0);
  }, [value]);

  const getTotalDebt = () => {
    let total = 0;
    value.forEach(s => {
      if (s.expenditures) {
        s.expenditures.forEach(e => {
          total += e.remainToPay || 0;
        });
      }
    });
    setTotalDebt(total);
  }

  return (
    <Root>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>בחר מוסד</Label>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option, index) => {
            const tagProps = getTagProps({ index });
            return (
              <StyledTag 
                key={`tag-${index}`} 
                {...tagProps} 
                label={option?.schoolName || ''} 
                onDelete={tagProps.onDelete}
              />
            );
          })}
          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })} key={`option-${index}`}>
              <span>{option.schoolName}</span>
            </li>
          ))}
        </Listbox>
      ) : null}
      
      {name && (
        <div style={{ marginTop: '16px' }}>
          <button onClick={() => { setShowInput(true); }}>לקבלת חוב</button> 
          <button onClick={() => { setShowInput2(true); }}>לקבלת הוצאות מוסד</button>
          <button onClick={getTotalDebt}>חשב סך חובות</button>
          {totalDebt > 0 && <div>סך החובות: {totalDebt}</div>}
        </div>
      )}
    </Root>
  );
}