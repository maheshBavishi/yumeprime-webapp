'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './footer.module.scss';
import classNames from 'classnames';

const Logo = '/assets/logo/footer-logo.svg';

// Social Media Icons
const FacebookIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
);

const XIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0-.02-3.3 1.65 1.65 0 0 0 .02 3.3M7.86 18.5V10.13H5.07V18.5h2.79z" />
    </svg>
);

const TelegramIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
);

const YouTubeIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

// Contact Info Icons
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18.3333 8.83333C16.5838 8.83333 15.1667 7.41625 15.1667 5.66667C15.1667 3.91708 16.5838 2.5 18.3333 2.5C20.0829 2.5 21.5 3.91708 21.5 5.66667C21.5 7.41625 20.0829 8.83333 18.3333 8.83333ZM12 14.7075C12.6096 14.7075 13.2192 14.4779 13.6783 14.0108L17.3754 10.3138C15.2142 9.87042 13.5833 7.95458 13.5833 5.65875C13.5833 5.38958 13.615 5.12833 13.6546 4.86708H6.45833C5.02542 4.86708 3.7825 5.635 3.08583 6.775L10.3217 14.0188C10.7808 14.4779 11.3904 14.7154 12 14.7154V14.7075ZM19.7267 10.2029L14.7946 15.135C14.0267 15.9029 13.0054 16.2908 11.9921 16.2908C10.9788 16.2908 9.96542 15.9029 9.18958 15.135L2.53958 8.46917C2.53167 8.58792 2.5 8.70667 2.5 8.83333V17.5417C2.5 19.7267 4.27333 21.5 6.45833 21.5H17.5417C19.7267 21.5 21.5 19.7267 21.5 17.5417L21.4842 9.20542C20.9775 9.65667 20.3838 9.99708 19.7267 10.2029Z" fill="white" />
    </svg>
);

const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_6571_1432)">
            <path d="M22 10.0067C22 8.02891 21.4134 6.09554 20.3146 4.45107C19.2158 2.80661 17.654 1.5249 15.8268 0.768037C13.9996 0.0111724 11.9889 -0.186861 10.0491 0.19898C8.10932 0.584821 6.3275 1.53721 4.92898 2.9357C3.99989 3.86494 3.26305 4.96818 2.76058 6.18235C2.25811 7.39653 1.99987 8.69783 2.00061 10.0119C2.00135 11.3259 2.26107 12.6269 2.76491 13.8405C3.26875 15.0541 4.00684 16.1565 4.93698 17.0847L9.96198 21.9997H4.99998V23.9997H19V21.9997H14.038L19.071 17.0767C20.0025 16.1505 20.741 15.0487 21.2438 13.8351C21.7465 12.6216 22.0036 11.3203 22 10.0067ZM16 9.4997C16 10.8173 15.3212 12.0419 14.2039 12.7402L14.12 12.7927C12.8229 13.6034 11.1771 13.6034 9.87998 12.7927L9.79604 12.7402C8.67873 12.0419 7.99998 10.8173 7.99998 9.4997C7.99998 8.18213 8.67873 6.95748 9.79604 6.25917L9.87998 6.2067C11.1771 5.39603 12.8229 5.39603 14.12 6.2067L14.2039 6.25917C15.3212 6.95748 16 8.18213 16 9.4997Z" fill="#F0F4F7" />
        </g>
        <defs>
            <clipPath id="clip0_6571_1432">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim()) {
            alert('Thank you for subscribing!');
            setEmail('');
        }
    };

    return (
        <footer className={styles.footer}>
            <div className='container'>
                {/* Top Section: Brand + Newsletter */}
                <div className={styles.topSection}>
                    {/* Left: Brand info & Socials */}
                    <div className={styles.brandCol}>
                        <div className={styles.logo}>
                            <a href="/">
                                <img src={Logo} alt='Yume Prime Logo' />
                            </a>
                        </div>
                        <h3 className={styles.brandTitle}>
                            Your Dream, Executed with Prime Precision.
                        </h3>
                        <p className={styles.brandDesc}>
                            Yume Prime is a global forex and CFD broker offering transparent pricing, fast execution, and reliable support for serious traders.
                        </p>

                        <div className={styles.socialRow}>
                            <span className={styles.socialLabel}>SOCIAL MEDIA</span>
                            <span className={styles.dividerPipe}>|</span>
                            <div className={styles.socialIcons}>
                                <a href="#" aria-label="Facebook"><FacebookIcon /></a>
                                <a href="#" aria-label="Instagram"><InstagramIcon /></a>
                                <a href="#" aria-label="X"><XIcon /></a>
                                <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
                                <a href="#" aria-label="Telegram"><TelegramIcon /></a>
                                <a href="#" aria-label="YouTube"><YouTubeIcon /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Newsletter Signup */}
                    <div className={styles.newsletterCol}>
                        <h2>Stay Ahead of <br /> the Market</h2>
                        <p className={styles.newsletterSub}>
                            Get market insights and platform updates, <br /> monthly. No spam.
                        </p>
                        <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>

                <div className={styles.separator} />

                {/* Middle Navigation Columns (4 Columns) */}
                <div className={styles.navGrid}>
                    {/* Column 1: Company */}
                    <div className={styles.navCol}>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Why Yume Prime</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Trading */}
                    <div className={styles.navCol}>
                        <h4>Trading</h4>
                        <ul>
                            <li><a href="#">Markets</a></li>
                            <li><a href="#">Account Types</a></li>
                            <li><a href="#">Trading Platforms</a></li>
                            <li><a href="#">Trading Solutions</a></li>
                            <li><a href="#">Trade & Win</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Legal */}
                    <div className={styles.navCol}>
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Risk Disclosure</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Client Agreement</a></li>
                            <li><a href="#">AML/KYC Policy</a></li>
                            <li><a href="#">Restricted Countries</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Details */}
                    <div className={`${styles.navCol} ${styles.contactCol}`}>
                        <h4>Contact Details</h4>
                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}><MailIcon /></span>
                                <span className={styles.pipe}>|</span>
                                <a href="mailto:support@yumeprime.com">support@yumeprime.com</a>
                            </div>

                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}><LocationIcon /></span>
                                <span className={styles.pipe}>|</span>
                                <span>Office no 33, 21 Rodney Bay Gardens, Rodney Bay, Gros Islet, Saint Lucia.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.separator} />

                {/* Legal & Regulatory Disclaimers */}
                <div className={styles.disclaimersSection}>
                    <div className={styles.disclaimerBlock}>
                        <h5>Legal</h5>
                        <p>
                            YUME PRIME FINANCIAL LTD, operating as Yume Prime, is a company incorporated in Saint Lucia. Registration No: 2026-00632. The registered office of YUME PRIME FINANCIAL LTD is at office no 33, 21 Rodney Bay Gardens, Rodney Bay, Gros Islet, Saint Lucia.
                        </p>
                    </div>

                    <div className={styles.disclaimerBlock}>
                        <h5>Risk Warning</h5>
                        <p>
                            Trading forex and other leveraged financial products involves a high level of risk and may not be suitable for all individuals. These products can produce both gains and losses, and you may lose the entire amount you deposit. It is important to understand the risks fully before trading. Independent professional advice should be sought where necessary.
                        </p>
                    </div>

                    <div className={styles.disclaimerBlock}>
                        <h5>Restricted Regions</h5>
                        <p>
                            YUME PRIME FINANCIAL LTD does not offer services to residents or citizens of [Restricted jurisdictions commonly include the United States, Canada, Japan, North Korea (DPRK), Iran, Syria, Cuba, and other countries or territories where applicable laws, sanctions, regulatory requirements, licensing restrictions, or YUME PRIME’s internal risk policies prohibit the provision of services.], or to persons in any other jurisdiction where such services would contravene local laws or regulations. The Yume Prime platform is not intended for use by any person in a country where the offering of our services would conflict with applicable legal or regulatory requirements.
                        </p>
                    </div>
                </div>

                <div className={classNames(styles.separator, styles.remove)} />

                {/* Bottom Copyright Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        Copyright © {new Date().getFullYear()} Yume Prime. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
