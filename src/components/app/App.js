// import './App.css';
// import {Routing} from '../Routing'
// import { Route, Router, Routes, useNavigate } from 'react-router-dom';
// import Layout from '../Layout';
// import { Work } from '../works/work';


// function App() {
//   const navigate = useNavigate()
//   return (
//     <Router>
//       <Layout>
//       <Routing/>

//       </Layout>
//     </Router>
//   );
// }
// export default App;
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routing } from '../Routing';
import Layout from '../Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routing />
      </Layout>
    </Router>
  );
}

export default App;