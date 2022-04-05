import './App.css';
import Chat from './Componentone/Chat/Chat';

import { Route,BrowserRouter,Routes } from 'react-router-dom';
import SignInPage from './Componentone/SignInPage/SignInPage';



function App() {
  return(<BrowserRouter>
    <Routes>
    <Route path="/" element={<SignInPage/>} />
    <Route path="/chat" element={<Chat/>} />

    </Routes>
    </BrowserRouter>);
}

export default App;
