'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './header.module.scss';
import Button from '../button';

const Logo = '/assets/logo/logo.svg';
const MotionLink = motion(Link);

// Market Submenu SVG Icons
const ForexIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
);

const MetalsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 12L2 9z" />
        <path d="M11 3 8 9l4 12 4-12-3-6" />
        <path d="M2 9h20" />
    </svg>
);

const IndicesIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
    </svg>
);

const CryptoIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8h4a2 2 0 0 1 0 4H9h5a2 2 0 0 1 0 4h-4" />
        <path d="M12 6v2m0 8v2" />
    </svg>
);

const CommoditiesIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
);

const StockIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
    </svg>
);

const ChevronDown = () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const marketItems = [
    { label: 'Forex', href: '/forex', description: 'Trade 60+ Major, Minor & Exotic Currency Pairs', icon: <ForexIcon /> },
    { label: 'Metals', href: '/metals', description: 'Gold, Silver & Platinum with Competitive Spreads', icon: <MetalsIcon /> },
    { label: 'Indices', href: '/indices', description: 'US500, NASDAQ, GER40 & Global Benchmarks', icon: <IndicesIcon /> },
    { label: 'Crypto', href: '/crypto', description: 'Bitcoin, Ethereum & Leading Cryptocurrencies', icon: <CryptoIcon /> },
    { label: 'Commodities', href: '/commodities', description: 'Crude Oil, Brent, Natural Gas & Energy', icon: <CommoditiesIcon /> },
    { label: 'Stock', href: '/stock', description: 'CFDs on Top Global US, EU & Asian Shares', icon: <StockIcon /> },
];

const navLinks = [
    { label: 'Company', href: '/company' },
    { label: 'Markets', href: '/markets' },
    { label: 'Account Types', href: '/account-type' },
    { label: 'Trading Platforms', href: '/trading-platforms' },
    { label: 'Trading Solutions', href: '/trading-solutions' },
    { label: 'Trade & Win 🏆', href: '/trade-win' },
    { label: 'Blog', href: '/blog' },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMarketsHovered, setIsMarketsHovered] = useState(false);
    const [isMobileMarketsOpen, setIsMobileMarketsOpen] = useState(false);
    const pathname = usePathname();
    const isDarkHeader = pathname === '/account-type' || pathname?.startsWith('/account-type')
        || pathname === '/trading-platforms' || pathname?.startsWith('/trading-platforms')
        || pathname === '/blog' || pathname?.startsWith('/blog')
        || pathname === '/blog-details' || pathname?.startsWith('/blog-details')
        || pathname === '/mobileapp' || pathname?.startsWith('/mobileapp')
        || pathname === '/webtrader' || pathname?.startsWith('/webtrader')
        || pathname === '/faq' || pathname?.startsWith('/faq');

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
                setIsMarketsHovered(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className={`${styles.header} ${isDarkHeader ? styles.darkHeader : ''}`}>
            {/* Logo */}
            <div className={styles.logo}>
                <Link href="/">
                    <img src={Logo} alt='Yume Prime Logo' />
                </Link>
            </div>

            {/* Desktop Menu */}
            <nav className={styles.menu}>
                {navLinks.map((link, idx) => {
                    if (link.label === 'Markets') {
                        return (
                            <div
                                key={idx}
                                className={styles.dropdownWrapper}
                                onMouseEnter={() => setIsMarketsHovered(true)}
                                onMouseLeave={() => setIsMarketsHovered(false)}
                            >
                                <Link
                                    href={link.href}
                                    className={`${styles.navItem} ${styles.hasDropdown}`}
                                    aria-label={link.label}
                                >
                                    <span className={styles.flipWrapper}>
                                        <span className={styles.primaryText}>
                                            {link.label}
                                            <motion.span
                                                className={styles.chevron}
                                                animate={{ rotate: isMarketsHovered ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDown />
                                            </motion.span>
                                        </span>
                                        <span className={styles.secondaryText}>
                                            {link.label}
                                            <motion.span
                                                className={styles.chevron}
                                                animate={{ rotate: isMarketsHovered ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDown />
                                            </motion.span>
                                        </span>
                                    </span>
                                </Link>

                                <AnimatePresence>
                                    {isMarketsHovered && (
                                        <motion.div
                                            className={styles.dropdownMenu}
                                            initial={{ opacity: 0, y: 12, scale: 0.97 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <div className={styles.dropdownHeader}>
                                                <span>Trading Markets</span>
                                            </div>
                                            <div className={styles.dropdownGrid}>
                                                {marketItems.map((item, mIdx) => (
                                                    <Link
                                                        key={mIdx}
                                                        href={item.href}
                                                        className={styles.dropdownItem}
                                                        onClick={() => setIsMarketsHovered(false)}
                                                    >
                                                        <div className={styles.dropdownIcon}>
                                                            {item.icon}
                                                        </div>
                                                        <div className={styles.dropdownInfo}>
                                                            <span className={styles.dropdownLabel}>{item.label}</span>
                                                            <span className={styles.dropdownDesc}>{item.description}</span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    }

                    return (
                        <Link
                            key={idx}
                            href={link.href}
                            className={`${styles.navItem} ${link.isGold ? styles.goldText : ''}`}
                            aria-label={link.label}
                        >
                            <span className={styles.flipWrapper}>
                                <span className={styles.primaryText}>{link.label}</span>
                                <span className={styles.secondaryText}>{link.label}</span>
                            </span>
                        </Link>
                    );
                })}
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
                                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                        <img src={Logo} alt='Yume Prime Logo' />
                                    </Link>
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
                                {navLinks.map((link, idx) => {
                                    if (link.label === 'Markets') {
                                        return (
                                            <div key={idx} className={styles.mobileAccordion}>
                                                <div
                                                    className={styles.mobileAccordionHeader}
                                                    onClick={() => setIsMobileMarketsOpen((prev) => !prev)}
                                                >
                                                    <span>{link.label}</span>
                                                    <motion.span
                                                        animate={{ rotate: isMobileMarketsOpen ? 180 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className={styles.accordionChevron}
                                                    >
                                                        <ChevronDown />
                                                    </motion.span>
                                                </div>

                                                <AnimatePresence>
                                                    {isMobileMarketsOpen && (
                                                        <motion.div
                                                            className={styles.mobileSubmenu}
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                        >
                                                            {marketItems.map((sub, sIdx) => (
                                                                <Link
                                                                    key={sIdx}
                                                                    href={sub.href}
                                                                    className={styles.mobileSubItem}
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    <span className={styles.subIcon}>{sub.icon}</span>
                                                                    <span>{sub.label}</span>
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    }

                                    return (
                                        <MotionLink
                                            key={idx}
                                            href={link.href}
                                            className={link.isGold ? styles.goldText : ''}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.05 + idx * 0.04 }}
                                        >
                                            {link.label}
                                        </MotionLink>
                                    );
                                })}
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



