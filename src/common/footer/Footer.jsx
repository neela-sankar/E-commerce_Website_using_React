import React from 'react'
import './Footer.css'
import logo from '../assets/img/logo.jpg'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="container grid2">
                <div className="box">
                    <img src={logo} alt="" />
                    <p>GadgetGalaxy.com is your one-stop destination for all things electronic and tech-related. Explore a vast universe of cutting-edge gadgets, gizmos, and devices that cater to your every tech need.</p>
                    <div className="icon d_flex">
                        <div className="img d_flex">
                            <i className='fa-brands fa-google-play'></i>
                            <span>Google Play</span>
                        </div>
                        <div className="img d_flex">
                            <i className='fa-brands fa-app-store-ios'></i>
                            <span>App Store</span>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <h2>About Us</h2>
                    <ul>
                        <li>Careers</li>
                        <li>Our Stores</li>
                        <li>Service Centres</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Customer Care</h2>
                    <ul>
                        <li>Help Center</li>
                        <li>How to Buy</li>
                        <li>Track Your Order</li>
                        <li>Corporate & Bulk Purchasing</li>
                        <li>Returns & Refunds</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>123, Dunlop St, Singapore, 147123</li>
                        <li>Email: mailus@gmail.com</li>
                        <li>Phone: 9874 5632</li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer