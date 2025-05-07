
// import { useEffect, useState } from 'react';
// import {useSelector,useDispatch} from 'react-redux'
// import { allCategoriesThunk, getDebtCategoryThunk } from '../../Redux/Slices/Categories/getCategoriesThunk';
// import { Dialog, Input } from '@mui/material';
// import { AddCategory } from './addCategory';

// export const Category = () =>{
//     const [name,setName]=useState('')
//     const [showInput,setShowInput]=useState(false)
//     const [addCtgr,setAddCtgr]=useState(false)
   
    
// const categories = useSelector(c => c.category.allCategories)
// const dispatch=useDispatch()

// // const getData=async()=>{
// //        await dispatch(allCategoriesThunk())
// //     }
// const getDebt= async()=>{
//       await dispatch(getDebtCategoryThunk())
// }    
// // useEffect(()=>{
// //     getData()
// // },[])

//     return <>


//    {
    
//     categories?.map((c)=>{
//         return <div key ={c} style={{color:"red",width:"80px",height:"50px"}}>
//             {c.categoryName}
       
//             </div>
          
//     }
       
            

//     )
//    }
//        {  <button className='button' onClick={() => { setAddCtgr(true); debugger; }}>להוספת קטגוריה</button>}
//        {addCtgr && <Dialog open><AddCategory setAddCtgr = {setAddCtgr}/></Dialog>}

// <button onClick={()=>{debugger;setShowInput(true)}}>לקבלת סכום חוב לפי קטגוריה</button>
         
//          {showInput && 
//         <div>
//              <Input value={name} onChange={(n)=>setName(n.target.value)} placeholder='שם קטגוריה'/>
//              <button onClick={()=>getDebt()}> לאישור</button>
//              {/* {schoolDebt && <span>{schoolDebt}</span>} */}
//          </div>}
//     </>
// }







import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allCategoriesThunk, getDebtCategoryThunk } from '../../Redux/Slices/Categories/getCategoriesThunk';
import { Dialog, Input, Paper, Typography, Button, Grid, Box, IconButton, Chip } from '@mui/material';
import { AddCategory } from './addCategory';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

export const Category = () => {
    const [name, setName] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [addCtgr, setAddCtgr] = useState(false);
    
    const categories = useSelector(c => c.category.allCategories);
    const dispatch = useDispatch();

    const getDebt = async () => {
        await dispatch(getDebtCategoryThunk());
    };

    useEffect(() => {
        dispatch(allCategoriesThunk());
    }, [dispatch]);

    return (
        <Paper 
            elevation={3} 
            sx={{ 
                width: '400px', 
                padding: 3, 
                borderRadius: 2,
                margin: '20px auto',
                backgroundColor: '#f8f9fa',
                direction: 'rtl'
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
                    קטגוריות
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    startIcon={<AddCircleIcon />}
                    onClick={() => setAddCtgr(true)}
                    sx={{ 
                        borderRadius: 8,
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 8px rgba(0,0,0,0.15)' }
                    }}
                >
                    הוסף קטגוריה
                </Button>
            </Box>

            <Grid container spacing={2} sx={{ mb: 3, maxHeight: '200px', overflowY: 'auto' }}>
                {categories?.length > 0 ? (
                    categories.map((c) => (
                        <Grid item key={c.id || c.categoryName}>
                            <Chip 
                                label={c.categoryName}
                                sx={{ 
                                    backgroundColor: '#e3f2fd', 
                                    color: '#0d47a1',
                                    fontWeight: 'medium',
                                    padding: '10px 5px',
                                    '&:hover': { backgroundColor: '#bbdefb' }
                                }}
                            />
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12}>
                        <Typography variant="body2" color="textSecondary" align="center">
                            אין קטגוריות להצגה
                        </Typography>
                    </Grid>
                )}
            </Grid>

            <Box sx={{ mt: 2, borderTop: '1px solid #e0e0e0', pt: 2 }}>
                <Button 
                    variant="outlined" 
                    color="secondary"
                    startIcon={<SearchIcon />}
                    onClick={() => setShowInput(true)}
                    sx={{ width: '100%', mb: 2 }}
                >
                    חיפוש חוב לפי קטגוריה
                </Button>
                
                {showInput && (
                    <Paper elevation={1} sx={{ p: 2, mb: 2, position: 'relative' }}>
                        <IconButton 
                            size="small" 
                            sx={{ position: 'absolute', top: 5, left: 5 }}
                            onClick={() => setShowInput(false)}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <Input 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                placeholder='שם קטגוריה'
                                fullWidth
                                sx={{ ml: 1 }}
                            />
                            <Button 
                                variant="contained" 
                                color="primary" 
                                size="small"
                                onClick={getDebt}
                            >
                                אישור
                            </Button>
                        </Box>
                    </Paper>
                )}
            </Box>

            {addCtgr && (
                <Dialog 
                    open={true} 
                    onClose={() => setAddCtgr(false)}
                    PaperProps={{
                        sx: { borderRadius: 2, p: 1 }
                    }}
                >
                    <AddCategory setAddCtgr={setAddCtgr} />
                </Dialog>
            )}
        </Paper>
    );
};
