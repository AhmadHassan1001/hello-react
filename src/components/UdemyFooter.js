import React from 'react'
import { Link } from 'react-router-dom'

function UdemyFooter() {
    return (
        <footer>
            <div className='d-flex justify-content-between'>
                <div className='footer-links w-50 justify-content-between'>
                    <ul className='footer-links-group'>
                        <li>Udemy Business</li>
                        <li>Teach on Udemy</li>
                        <li>Get the app</li>
                        <li>About us</li>
                        <li>Contact us</li>
                    </ul>
                    <ul className='footer-links-group'>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Help and Support</li>
                        <li>Affiliate</li>
                        <li>Investors</li>
                    </ul>
                    <ul className='footer-links-group'>
                        <li>Terms</li>
                        <li>Privacy policy</li>
                        <li>Cookie settings</li>
                        <li>Sitemap</li>
                        <li>Accessibility statment</li>
                    </ul>
                </div>
                <button>English</button>
            </div>

            <div className='d-flex justify-content-between mt-5'>
                <Link to='/'>
                    <img className="nav-logo nav-el" src="/images/logo.png" alt="logo"
                    />
                </Link>
                <span>© 2022 Udemy, Inc.</span>
            </div>

        </footer>
    )
}

export default UdemyFooter