import logo from './logo.svg';
import './App.css';
import SignIn from './Componentone/SignIn/SignIn';


import { Route,BrowserRouter,Routes } from 'react-router-dom';



function App() {
  return(<BrowserRouter>
    <Routes>
    <Route path="/" element={<SignIn/>} />
  
    </Routes>
    </BrowserRouter>);
}

export default App;
