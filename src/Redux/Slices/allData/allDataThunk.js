
// // function App() {
// //     const [ response , setResponse ] = useState();
// //     const [ btnText , setbtnText ] = useState('Get Data');
// //     const [ details , setDetails ] = useState();
    
//   export const allDataThunk =createAsyncThunk(
//     'allDataThunk',
//    async()=>{
//     try {
//       await fetch('url hidden' , {
//         method: 'POST',
//         header: {'Content-Type': 'application/json'},
//       }).then(res => res.json())
//         .then(res => setResponse(res))
  
//       await fetch('url hidden' , {
//         method: 'POST',
//         header: {'Content-Type': 'application/json'},
//       }).then(res => res.json())
//         .then(res => setDetails(res))
  
//     } catch (error) {
//       console.log(error);
//     };
//   }
//     console.log(response)
  
//     return (
//       <div className="container">
//         <header className='header'>
//           <button onClick={fetchData}>{btnText}</button>
//         </header>
//         <Summary response={response} details={details} />
//       </div>
//     );
//       )

// //   export const allCategoriesThunk = createAsyncThunk(

// //     'allCategoriesThunk',
   
// //       async() => {
       
// //        const response = await fetch(`https://localhost:7222/api/Category/GetAllCategories`);
// //            if(response.ok){
   
// //                const data= await response.json();
// //                console.log(data);
// //               return data;
// //            }
   
// //            else throw new Error('failed')
           
   
   
// //     }
// //    );