// components/Header.js

"use client"
import React, { useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
     
        <header>
            <div className="container">
                <nav className={styles.mainnav}>
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-6">
                            <div className="imgdiv">
                                <img src="/images/logo.png" alt="Logo" className={styles.logo} />
                            </div>
                        </div>
                        <div className="col-6 d-lg-none text-end">
                            <button className={styles.icondivmenu} onClick={toggleMenu}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 12H21M3 6H21M3 18H21" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                      
                            <div className={"col-lg-10 " +(isMenuOpen ? styles.mobilemenu + ' ' +styles.show : styles.mobilemenu) }>
                                <div className="row align-items-center">
                                    <div className="col-xl-8 col-lg-7">
                                        <ul className={styles.megamenu}>
                                            <li><Link href="/">Browse</Link></li>
                                            <li className={styles.dropdownmain}><Link href="/">Categories</Link>
                                                <span>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 7.5L10 12.5L15 7.5" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                <ol className={styles.dropdownList}>
                                                    <li className={styles.dropdown}>
                                                        <Link href="/">Categories 1</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Categories 1</Link>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li><Link href="/">Help Center</Link></li>
                                            <li><Link href="/">My Campaign</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-4 col-lg-5">
                                        <ul className={styles.megamenu}>
                                            <li className={styles.searchicon}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </li>
                                            <li className={styles.logindiv}>
                                                <Link href='/'>Log in</Link>
                                            </li>
                                            <li className={styles.createcampaign}>
                                                <Link href='/'>Create Campaign</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                      
                    </div>
                </nav>
            </div>
        </header>
        </>
    );
};

export default Header;
