import logo from './logo.svg';
import './App.css';
import SignIn from './Componentone/SignIn/SignIn';
import Chat from './Componentone/Chat/Chat';
import Container from './Componentone/Container/Container';


import { Route,BrowserRouter,Routes } from 'react-router-dom';



function App() {
  return(<BrowserRouter>
    <Routes>
    <Route path="/" element={<Chat/>} />
  
    </Routes>
    </BrowserRouter>);
}

export default App;
