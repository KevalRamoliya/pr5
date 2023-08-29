import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import Layout from './Layout';
import Dashboard from './Dashboard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/forget' element={<Layout />}></Route>
        <Route path='/dash' element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
