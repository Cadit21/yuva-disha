
import './App.css';
import Dashboard from './Components/Dasboard';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import SignIn from './Components/SignIn';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  
  return (
   

    
    <BrowserRouter>
    <Navbar/>
    <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={ <SignIn/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
    </Routes>
   
    </BrowserRouter>
    
   
  );
}

export default App;
