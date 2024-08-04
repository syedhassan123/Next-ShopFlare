import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}


const date=new Date()
const year=date.getFullYear()


const Footer = () => {
    return (
        <>

            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles['logo-details']}>
                            {/*<i className={footerStyles.fab fa-slack]></i>*/}
                            <span className={footerStyles.logo_name}>Shop<span className={footerStyles.ft_span}>Flare</span></span>
                        </div>
                        <div className={footerStyles[`media-icons`]}>
                            <Link href="https://www.facebook.com" target="_blank"><i > <FaFacebookF/> </i></Link>
                            <Link href="https://www.twitter.com" target="_blank"><i > <FaTwitter/> </i> </Link>
                            <Link href="https://www.instagram.com" target="_blank"><i > <FaInstagram/>  </i></Link>
                            <Link href="https://www.linkedin.com" target="_blank"><i > <FaLinkedinIn /> </i></Link>
                            <Link href="https://www.youtube.com" target="_blank" ><i > <FaYoutube />  </i></Link>
                        </div>
                    </div>
                    <div className={footerStyles['link-boxes']}>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Company</li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/contact">Contact us</a></li>
                            <li><a href="/product">About us</a></li>
                            <li><a href="/">Get started</a></li>
                        </ul>
                       
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Account</li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Prefrences</a></li>
                        </ul>
                        <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                            <li className={footerStyles.link_name}>Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                    </div>
                </div>
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © {year}
                            <Link href="/>"> ShopFlare.</Link> All rights reserved </span>
                        <span className={footerStyles.policy_terms}>
                          <Link href="/">Privacy policy</Link>
                          <Link href="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;