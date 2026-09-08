'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './header.module.scss';
import Button from '../button';

const Logo = '/assets/logo/logo.svg';

const navLinks = [
    { label: 'Company', href: '/company' },
    { label: 'Contact Us ', href: '/contact' },
    // { label: 'Account Types', href: '#' },
    // { label: 'Trading Platforms', href: '#' },
    // { label: 'IB Programme', href: '#' },
    // { label: 'Trading Solutions', href: '#' },
    // { label: 'Trade & Win 🏆', href: '#', isGold: true },
    // { label: 'Blog', href: '#' },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className={styles.header}>
            {/* Logo */}
            <div className={styles.logo}>
                <a href="/">
                    <img src={Logo} alt='Yume Prime Logo' />
                </a>
            </div>

            {/* Desktop Menu */}
            <nav className={styles.menu}>
                {navLinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.href}
                        className={`${styles.navItem} ${link.isGold ? styles.goldText : ''}`}
                        aria-label={link.label}
                    >
                        <span className={styles.flipWrapper}>
                            <span className={styles.primaryText}>{link.label}</span>
                            <span className={styles.secondaryText}>{link.label}</span>
                        </span>
                    </a>
                ))}
                {/* <Button text="Open Live Account" /> */}
            </nav>

            {/* Mobile / Tablet Hamburger Toggle Button */}
            <button
                className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}
                onClick={toggleMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
            >
                <span className={styles.line} />
                <span className={styles.line} />
                <span className={styles.line} />
            </button>

            {/* Mobile / Tablet Drawer Menu & Backdrop */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Dim Backdrop */}
                        <motion.div
                            className={styles.backdrop}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Slide-out Drawer */}
                        <motion.div
                            className={styles.drawer}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={styles.drawerHeader}>
                                <div className={styles.drawerLogo}>
                                    <img src={Logo} alt='Yume Prime Logo' />
                                </div>
                                <button
                                    className={styles.closeBtn}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    aria-label="Close menu"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <div className={styles.drawerNav}>
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={link.href}
                                        className={link.isGold ? styles.goldText : ''}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.05 + idx * 0.04 }}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>

                            <motion.div
                                className={styles.drawerFooter}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.35 }}
                            >
                                <Button text="Open Live Account" fill />
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}

