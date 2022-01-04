import React, { Component } from 'react';
import './homepage.css'
import wplogo from './images/dogs/whatsapplogo.png'
import fblogo from './images/dogs/facebooklogo.png'
import instalogo from './images/dogs/Instagram.png'
import { Link } from 'react-router-dom';

const Home_page = () => {
    return (  
        <>
            
            <div className="home_container">
                <div className="home_header">
                    <h1>Shubham's Pet Point</h1>
                </div>

                <div className="animal_options">
                    <Link to="/dogs">
                        <div className="single_opt">
                    
                            <img src={require(`${'./images/dogs/dogs.jpg'}`)}  className='opt_img'/>
                            <h1>Dogs</h1>
                        </div>
                        
                    </Link>
                    

                    <Link to="/cats">
                        <div className="single_opt">
                            <img src={require(`${'./images/dogs/catimg.jpg'}`)}  className='opt_img'/>
                            <h1>Cats</h1>
                        </div>
                    </Link>
                    

                    <Link to="/birds">
                        <div className="single_opt">
                            <img src={require(`${'./images/dogs/lovebirds.jpg'}`)}  className='opt_img'/>
                            <h1>Birds</h1>
                        </div>
                    </Link>
                   
                    {/* <img src={require(`${'./images/dogs/post5.jpg'}`)}  className='opt_img'/> */}
                    {/* <img src={require(`${'./images/dogs/catimg.jpg'}`)} className='opt_img' />
                    <img src={require(`${'./images/dogs/lovebirds.jpg'}`)}  className='opt_img'/> */}
                </div>

                <h4>ONLY PURE BREEDS & LEGAL PETS WILL BE SOLD</h4>
                <h3>CONTACT US : </h3>
                <div className="contact_footer">
                    
                    <div className="single_contact">
                        {/* <a href="https://wa.me/9373167117"> */}
                        <img src={wplogo} alt="" />
                        {/* </a>  */}
                    </div>
                    <div className="single_contact">
                        {/* <a href="https://www.facebook.com/profile.php?id=100009459517788"> */}
                        <img src={fblogo} alt="" />

                        {/* </a> */}
                    </div>
                    <div className="single_contact">
                        {/* <a href="https://www.facebook.com/profile.php?id=100009459517788"> */}
                        <img src={instalogo} alt="" />

                        {/* </a> */}
                    </div>
                </div>
            </div>
        
        
        </>
    );
}
 
export default Home_page;