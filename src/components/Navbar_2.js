import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './Navbar.css'


const Navbar_2 = () => {
    const [color, setcolor] = React.useState(false)
    const changecolor = () => {
        if (window.scrollY >= 90) {
            setcolor(true)
        } else {
            setcolor(false)
        }
    }

    window.addEventListener("scroll", changecolor)

    const [click, setClick] = React.useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)


    return (
        <>
            <div className={color ? 'header header-bg bg-[rgb(87,18,23)]' : "header"}>
                <nav className='navbar xl:px-5 h-full xl:h-[100%] items-center flex justify-between '>
                    <div className='flex justify-center items-center '>
                        <div className=''>
                            <h1 className='text-left uppercase font-extrabold text-sm mx-5 xl:mx-20 text-[rgb(87,18,23)] bg-white px-3 space-x-2'>
                                <span>
                                    a l s h i f a
                                </span>
                                <span className=''>
                                    m e h n d i
                                </span>
                            </h1>

                        </div>
                        <div className='hamburger absolute right-4 top-4 md:hidden  xl:hidden t' onClick={handleClick}>
                            {click ? null
                                : (<FaBars className='text-2xl' style={{ color: '#ffffff' }} />)}

                        </div>

                    </div>
                    <ul className={click ? "nav-menu active " : "nav-menu"}>
                        <div className='text-white text-4xl flex justify-end m-5 md:hidden lg:hidden xl:hidden' onClick={closeMenu}>
                            <FaTimes />
                        </div>
                        <li className="nav-item px-3   ">
                            <Link className='Link' to="/" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>
                                <h1 className='relative px-1 font-semibold text-white hover:cursor-pointer text-2xl md:text-lg xl:text-base'>
                                    Home
                                </h1>
                            </Link>
                        </li>
                        <li className="nav-item  px-3  ">
                            <Link className='Link' to="Card" spy={true} smooth={true} offset={-70} duration={500} >
                                <h1 className='relative px-1 font-semibold text-white hover:cursor-pointer text-2xl md:text-lg xl:text-base'>
                                    Services
                                </h1>
                            </Link>
                        </li>
                        <li className="nav-item  px-3  ">
                            <Link className='Link' to="Aboutus" spy={true} smooth={true} offset={-15} duration={500} >
                                <h1 className='relative px-1 font-semibold text-white hover:cursor-pointer text-2xl md:text-lg xl:text-base'>
                                    About Us
                                </h1>
                            </Link>
                        </li>
                        <li className="nav-item  px-3 ">
                            <Link className='Link' to="Galary" spy={true} smooth={true} offset={-35} duration={500} >
                                <h1 className='relative px-1 font-semibold text-white hover:cursor-pointer text-2xl md:text-lg xl:text-base'>
                                    My Work
                                </h1>
                            </Link>
                        </li>
                        <li className="nav-item  px-3  ">
                            <Link className='Link' to="Project" spy={true} smooth={true} offset={-30} duration={500} >
                                <h1 className='relative px-1 font-semibold text-white hover:cursor-pointer text-2xl md:text-lg xl:text-base'>
                                    Testimonials
                                </h1>
                            </Link>
                        </li>
                        
                        <li className="nav-item  px-3  ">
                            <Link className='Link' to="Contact" spy={true} smooth={true} offset={-45} duration={500} >
                                <h1 className='relative px-1 font-semibold text-white hover:cursor-pointer text-2xl md:text-lg xl:text-base'>
                                    Contact Us
                                </h1>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* <div className="">
                <nav>
                    <ul className="xl:flex w-full justify-between items-center h-20 px-4 absolute z-10  py-5 bg-white">
                        <div>
                            <li className="mr-6">
                                <NavLink className="nav-link" activeclassname="active" to="/">Logo</NavLink>
                            </li>
                        </div>

                        <div className='xl:flex justify-end items-end text-right space-x-5 pr-5 '>
                            <li className="text-center font-medium">
                                <NavLink className="nav-link relative group " activeclassname="active" to="/" >
                                    <h1 className=' text-[#571217] font-bold cursor-pointer '>
                                        Home
                                    </h1>
                                    <div className='absolute  w-12 h-[2px] bg-[#571217] scale-x-0 group-hover:scale-x-100 transition-all duration-500'></div>
                                </NavLink>
                            </li>
                            <li className="text-center font-medium">
                                <Link activeClass="active" to="Services" spy={true} smooth={true} offset={7} duration={500} >
                                    <h1 className=' text-[#571217] font-bold cursor-pointer '>
                                        Services
                                    </h1>
                                    <div className='absolute  w-16 h-[2px] bg-[#571217] scale-x-0 group-hover:scale-x-100 transition-all duration-500'></div>
                                </Link>
                            </li>



                            <li className="text-center font-medium">
                                <NavLink className="nav-link relative group " activeclassname="active" to="Aboutus" >
                                    <h1 className=' text-[#571217] font-bold cursor-pointer '>
                                        About Us
                                    </h1>
                                    <div className='absolute  w-[75px] h-[2px] bg-[#571217] scale-x-0 group-hover:scale-x-100 transition-all duration-500'></div>
                                </NavLink>
                            </li>
                            <li className="text-center font-medium">
                                <NavLink className="nav-link relative group " activeclassname="active" to="Galary" >
                                    <h1 className=' text-[#571217] font-bold cursor-pointer '>
                                        Work
                                    </h1>
                                    <div className='absolute  w-12 h-[2px] bg-[#571217] scale-x-0 group-hover:scale-x-100 transition-all duration-500'></div>
                                </NavLink>
                            </li>
                            <li className="text-center font-medium">
                                <NavLink className="nav-link relative group " activeclassname="active" to="Contact" >
                                    <h1 className=' text-[#571217] font-bold cursor-pointer '>
                                        Contact Us
                                    </h1>
                                    <div className='absolute  w-20 h-[2px] bg-[#571217] scale-x-0 group-hover:scale-x-100 transition-all duration-500'></div>
                                </NavLink>
                            </li>
                        </div>

                    </ul>
                </nav>
            </div> */}

        </>
    )
}




export default Navbar_2