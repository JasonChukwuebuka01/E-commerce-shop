import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png"
import { AuthContext } from '../contexts/AuthProvider';
import ProfileDisplay from './ProfileDisplay';

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    const { user, email } = useContext(AuthContext);
    //console.log("Email:",email)

    //addevent listener

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true)
        } else {
            setHeaderFixed(false);
        }
    })



    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
            {/*hEADER TOP START */}
            <div className={`header-top d-md-none  ${socialToggle ? "open" : ""}`}>
                <div className='container'>
                    <div className='header-top-area'>
                        <Link to="/signup" className='lab-btn me-3'><span>Create Acount</span></Link>
                        <Link to="/login"><span>Log in</span></Link>
                    </div>
                </div>
            </div>

            {/*HEADER BOTTOM*/}
            <div className='header-bottom'>
                <div className='container'>
                    <div className='header-wrapper'>
                        {/*LOGO*/}
                        <div className="logo-search-acte">
                            <div className='logo'>
                                <Link to={"/"}>
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                        </div>

                        {/*MENU AREA*/}
                        <div className='menu-area'>
                            <div className='menu'>
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li><Link to={"/shop"}>Shop</Link></li>
                                    <li><Link to={"/blog"}>Blog</Link></li>
                                    <li><Link to={"/about"}>About</Link></li>
                                    <li><Link to={"/contact"}>Contact</Link></li>
                                </ul>
                            </div>

                            {/* SIGN IN && LOG IN */}
                            {email === null &&
                                <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                            }
                            {email === null &&
                                <Link to="/login" className='d-none d-md-block'>Log In</Link>
                            }
                            {
                                email !== null &&
                                <ProfileDisplay />
                            }

                            {/* MENU - TOGGLER*/}
                            <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            {/*SOCIAL TOGGLEr*/}
                            {
                                email === null &&
                                <div className='ellepsis-bar d-md-none'
                                    onClick={() => setSocialToggle(!socialToggle)}>
                                    <i className="icofont-info"></i>
                                </div>
                            }

                        </div>

                    </div>

                </div>
            </div>
        </header>
    )
}

export default NavItems