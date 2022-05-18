import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import AllUser from './Pages/Dashboard/AllUser';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyHistory from './Pages/Dashboard/MyHistory';
import MyReviews from './Pages/Dashboard/MyReviews';
import Payment from './Pages/Dashboard/Payment';
import Home from './Pages/Home/Home';
import ForgotPassword from './Pages/Login/ForgotPassword';
import Login from './Pages/Login/Login';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
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
          <Route path='dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
            <Route index element={<MyAppointments></MyAppointments>}></Route>
            <Route path='/dashboard/reviews' element={<MyReviews></MyReviews>}></Route>
            <Route path='/dashboard/history' element={<MyHistory></MyHistory>}></Route>
            <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>
            <Route path='/dashboard/users' element={<RequireAdmin><AllUser></AllUser></RequireAdmin>}></Route>
            <Route path='/dashboard/add-doctor' element={<RequireAdmin>
              <AddDoctor></AddDoctor>
            </RequireAdmin>}></Route>
            <Route path='/dashboard/manage-doctor' element={<RequireAdmin>
              <ManageDoctors></ManageDoctors>
            </RequireAdmin>}></Route>
          </Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
