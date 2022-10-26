import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
            >
            <Link to='/home'>
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                    </span>
                </Navbar.Brand>
            </Link>
            <div className="flex md:order-2">
                <NavLink to='/login'>
                    <Navbar.Link>
                    login
                    </Navbar.Link>
                </NavLink>   
                <Dropdown
                arrowIcon={false}
                inline={true}
                label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
                >
                <Dropdown.Header>
                    <span className="block text-sm">
                    Bonnie Green
                    </span>
                    <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                    </span>
                </Dropdown.Header>
                <Dropdown.Item>
                    Dashboard
                </Dropdown.Item>
                <Dropdown.Item>
                    Settings
                </Dropdown.Item>
                <Dropdown.Item>
                    Earnings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    Sign out
                </Dropdown.Item>
                </Dropdown>
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
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;