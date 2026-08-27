'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './foursteps.module.scss';
import Button from '@/components/button';

const MobileImage = '/assets/images/mobile.png';

export default function Foursteps() {
    return (
        <div className={styles.foursteps}>
            <div className='container'>
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Four Steps <br />
                            to Start trading
                        </motion.h2>
                    </div>
                    <motion.div
                        className={styles.buttonAlignment}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Button fill text="Register now" />
                        <Button lightButton text="Open a Free Demo Account" />
                    </motion.div>
                </div>

                {/* 3-Column Grid */}
                <div className={styles.grid}>
                    {/* Left Column (Step 01 & Step 03) */}
                    <div className={styles.items}>
                        <motion.div
                            className={styles.textBox}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ x: 6, transition: { duration: 0.2 } }}
                        >
                            <h3>
                                Register
                            </h3>
                            <p>
                                Create your Yume Prime account in minutes with
                                your email and basic details.
                            </p>
                        </motion.div>
                        <div className={styles.box}></div>
                        <motion.div
                            className={styles.textBox}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ x: 6, transition: { duration: 0.2 } }}
                        >
                            <h3>
                                Fund
                            </h3>
                            <p>
                                Deposit instantly via bank transfer, card, or e-wallet, starting from as little as $50.
                            </p>
                        </motion.div>
                        <div className={styles.box}></div>
                    </div>

                    {/* Center Column (Mobile Mockup with Smooth, Glitch-Free Floating Animation) */}
                    <div className={styles.items}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}
                        >
                            <motion.div
                                animate={{ y: [0, -10] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    duration: 3,
                                    ease: 'easeInOut'
                                }}
                                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                                style={{ willChange: 'transform' }}
                            >
                                <img
                                    src={MobileImage}
                                    alt="Mobile Mockup"
                                    draggable={false}
                                    style={{
                                        display: 'block',
                                        maxWidth: '360px',
                                        userSelect: 'none',
                                        backfaceVisibility: 'hidden'
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column (Step 02 & Step 04) */}
                    <div className={styles.items}>
                        <div className={styles.box}></div>
                        <motion.div
                            className={styles.textBox}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ x: -6, transition: { duration: 0.2 } }}
                        >
                            <h3>
                                Verify
                            </h3>
                            <p>
                                Complete quick identity verification (KYC) by uploading a valid
                                ID and proof of address.
                            </p>
                        </motion.div>
                        <div className={styles.box}></div>
                        <motion.div
                            className={styles.textBox}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ x: -6, transition: { duration: 0.2 } }}
                        >
                            <h3>
                                Trade
                            </h3>
                            <p>
                                Launch MT5, WebTrader, or the mobile app
                                and place your first trade.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
