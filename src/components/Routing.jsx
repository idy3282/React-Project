
// import {Route,Routes} from 'react-router-dom'
// import { Expenditure } from './Expenditures/expenditure'
// import { User } from './User/user'
// import { Supplier } from './supplier/supplier'
// import { Category } from './Categories/categories'
// // import { School } from './schools/handleChangeRowsPerPage'
// import { Home } from './home/home'
// import { CollapsibleTable } from './schools/schools'
// import { Exp } from './Expenditures/exp2'
// import { LogIn } from './logIn/logIn'
// import { Work } from './works/work'
// import { AddExpenditure } from './addExpenditure/addExpenditure'
// import { AddSupplier } from './supplier/addSupplier'
// import { AddCategory } from './Categories/addCategory'
// // import { Exp } from './Expenditures/exp2'
// export const Routing = () =>{

//     return<>

//     <Routes>
//     <Route  path='/' element={<LogIn/>}/>
//     <Route  path='/home' element={<Home/>}/>
//     <Route path='/expenitures' element={<Exp/>} />
//     <Route path='/users' element={<User/>} />
//     <Route path='/suppliers' element={<Supplier/>} />
//     <Route path='/categories' element={<Category/>} />
//     <Route path='/schools' element={<CollapsibleTable/>} />
//     <Route path='/categories' element={<Category/>} />
//     <Route path='/work' element={<Work/>} />
//     <Route path='/addExpenditure' element={<AddExpenditure/>} />
//     <Route path='/addSupplier' element={<AddCategory/>} />

            
            
        
//     </Routes>
   
//     </>
// }
import { Route, Routes } from 'react-router-dom';
import { Expenditure } from './Expenditures/expenditure';
import { User } from './User/user';
import { Supplier } from './supplier/supplier';
import { Category } from './Categories/categories';
import { Home } from './home/home';
import { CollapsibleTable } from './schools/schools';
import { Exp } from './Expenditures/exp2';
import { LogIn } from './logIn/logIn';
import { AddExpenditure } from './addExpenditure/addExpenditure';
import { AddSupplier } from './supplier/addSupplier';
import { AddCategory } from './Categories/addCategory';
import { Main } from './home/main';

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<LogIn />} />
      <Route path='/home' element={<Home />} />
      <Route path='/expenitures' element={<Exp />} />
      <Route path='/users' element={<User />} />
      <Route path='/suppliers' element={<Supplier />} />
      <Route path='/categories' element={<Category />} />
      <Route path='/schools' element={<CollapsibleTable />} />
      <Route path='/work' element={<Main />} />
      <Route path='/addExpenditure' element={<AddExpenditure />} />
      <Route path='/addCategory' element={<AddCategory />} />
      <Route path='/addSupplier' element={<AddSupplier />} />
   
    </Routes>
  );
}