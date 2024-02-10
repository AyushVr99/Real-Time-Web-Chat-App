import logo from './logo.svg';
import './App.css';
import './style.scss';
import Homepage from './Pages/Homepage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) =>{
    if(!currentUser)
    {
      return <Navigate to="/login/"/>
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element = {<ProtectedRoute>
              <Homepage/>
          </ProtectedRoute>}/>
          <Route path="login" element = {<Login/>}/>
          <Route path="register" element = {<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
