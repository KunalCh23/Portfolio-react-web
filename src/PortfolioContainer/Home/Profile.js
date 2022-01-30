import React from 'react';
import {FaFacebookSquare,FaGooglePlusSquare,FaInstagramSquare,FaLinkedin} from 'react-icons/fa';
import {BsCodeSlash} from 'react-icons/bs';
import {Link} from 'react-scroll';
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='profile-picture'>
                    <div className='profile-picture-background' ></div>
                </div>
                <div className='colz'>
                    <div className='colz-icons' style={{padding :"8px"}}>
                        <a href='https://www.facebook.com/myselfkunalkumar'>
                            <FaFacebookSquare className='faicon'/>
                        </a>
                        <a href='#'>
                            <FaGooglePlusSquare className='faicon' />
                        </a>
                        <a href='#'>
                            <FaInstagramSquare className='faicon'/>
                        </a>
                        <a href='#'>
                            <FaLinkedin className='faicon'/>
                        </a>
                    </div>
                </div>

                <div className='profile-details-name'>
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text">Kunal Chaudahry</span>
                    </span>
                </div>
                <div className='profile-details-role'> 
                    {" "}
                    <h1>Frontend Developer <BsCodeSlash /></h1>
                </div>
                <div className='profile-options'>
                    <Link className='btn hireme btn' to="contact" smooth={true} duration={1000}  >
                        {/* <button className="btn primary-btn" >Hire me</button> */}
                        Hire me
                    </Link>
                    <a href="Kunal_resume.pdf" download="Kunal Chaudhary_resume">
                        <button className='btn highlighted-btn'>My Resume</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
