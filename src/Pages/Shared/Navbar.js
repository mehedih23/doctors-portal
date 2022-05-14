import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const menuText = <>
        <li className='mx-2'><Link to='/'>Home</Link></li>
        {user && <li className='mx-2'><Link to='/dashboard'>Dashboard</Link></li>}
        <li className='mx-2'><Link to='/about'>About</Link></li>
        <li className='mx-2'><Link to='/appointment'>Appointment</Link></li>
        <li className='mx-2'><Link to='/reviews'>Reviews</Link></li>
        <li className='mx-2'><Link to='/contactus'>Contact Us</Link></li>
        {
            user ? <li className='mx-2'><Link onClick={() => signOut(auth)} to='/'>Log out</Link></li> : <li className='mx-2'><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div
            className="navbar bg-base-100"
        >
            <div
                className="navbar-start w-1/4"
            >
                <div
                    className="dropdown"
                >
                    <label
                        tabIndex="0"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuText}
                    </ul>
                </div>
                <Link
                    to='/'
                    className="btn btn-ghost normal-case text-xl"
                >
                    Doctors Portal
                </Link>
            </div>
            <div
                className="navbar-end w-3/4 hidden lg:flex"
            >
                <ul
                    className="menu menu-horizontal p-0"
                >
                    {menuText}
                </ul>
            </div>
        </div>
    )
}

export default Navbar