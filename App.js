// import './App.css';
//import { Link } from "react-router-dom";
// import Link from '@mui/material/Link';
// import Button from '@mui/material/Button';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Add from './Add';
import TableData from './Table_View';

//const [data, setData]=useState();
function App() {
  // const handleAdd=()=>{
    
  // }
 
  return (
   <>
     

<BrowserRouter>
{/* <nav>
<Link to='/Add'>Add</Link>
</nav> */}

<Routes>
  <Route path='/Add' element={<Add />} >Adddgf</Route>
</Routes>

</BrowserRouter>


    <Add />
      <TableData/>
      </>
  
  );
}

export default App;
