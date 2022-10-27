import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div className="py-5 px-5">
            <Navbar
            fluid={true}
            rounded={true}
            >
            <Link to='/home'>
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                    src="https://cdn-icons-png.flaticon.com/512/456/456016.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">                   
                    IT-Learner
                    </span>
                </Navbar.Brand>
            </Link>
            <div className="flex md:order-2">

                <div className="mr-6 border border-gray-700 rounded-md p-2">
                <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-800">
                    <span>Light</span>
                    <span className="relative">
                        <input id="Toggle1" type="checkbox" className="hidden peer" />
                        <div className="w-10 h-6 rounded-full shadow-inner bg-gray-600 peer-checked:bg-cyan-600"></div>
                        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                    </span>
                    <span>Dark</span>
                </label>       
                </div>  
                {
                    user?.uid? 
                    <>
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img={user?.photoURL
                        } rounded={true}/>}
                        >
                        <Dropdown.Header>
                            <span className="block text-sm">
                            {user?.displayName}
                            </span>
                            <span className="block truncate text-sm font-medium">
                            {user?.email}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            <Link to='/login'>Log out</Link>
                        </Dropdown.Item>
                    </Dropdown>
                    
                    </>
                    :
                    <div className="text-xl font-bold">
                        <NavLink to='/login'>                  
                        Login                  
                        </NavLink>
                    </div>
                }
                 
                 <Navbar.Toggle />
                
            </div>
            <Navbar.Collapse>
                <NavLink to='/home'>
                    <Navbar.Link>
                    Home
                    </Navbar.Link>
                </NavLink>               
                <NavLink to='/courses'>
                    <Navbar.Link>
                    Courses
                    </Navbar.Link>
                </NavLink>               
                <NavLink to='/faq'>
                    <Navbar.Link>
                    FAQ
                    </Navbar.Link>
                </NavLink>               
                <NavLink to='/Blog'>
                    <Navbar.Link>
                      Blog
                    </Navbar.Link>
                </NavLink>               
                <NavLink to='/about'>
                    <Navbar.Link>
                      About us
                    </Navbar.Link>
                </NavLink>                 
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default Header;