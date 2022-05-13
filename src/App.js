import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import ForgotPassword from './Pages/Login/ForgotPassword';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import VerifyEmail from './Pages/Login/VerifyEmail';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <>
      <Toaster></Toaster>
      <div className='max-w-7xl mx-auto md:px-12'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/appointment' element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='signup' element={<Signup></Signup>}></Route>
          <Route path='forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
          <Route path='/verifyemail' element={<VerifyEmail></VerifyEmail>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
