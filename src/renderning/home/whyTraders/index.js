'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './whyTraders.module.scss';
import ReliableIcon from '@/icons/reliableIcon';
const DolorIcon = '/assets/icons/dolor.svg';
const Execution = '/assets/icons/Execution.svg';
const Trade = '/assets/icons/Trade.svg';
const Instruments = '/assets/icons/Instruments.svg';
const Support = '/assets/icons/Support.svg';

export default function WhyTraders() {
    return (
        <div className={styles.whyTraders}>
            <div className='container-lg'>
                <div className={styles.grid}>
                    <div className={styles.items}>
                        <div className={styles.text}>
                            <motion.h2
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                Why traders
                                choose Yume Prime
                            </motion.h2>
                        </div>
                    </div>
                    <div className={styles.items}>
                        {/* 01 */}
                        <div className={styles.first}>
                            <motion.div
                                className={styles.longline}
                                initial={{ opacity: 0, scaleY: 0 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                style={{ transformOrigin: 'top' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            />
                            <motion.div
                                className={styles.line}
                                initial={{ opacity: 0, scaleY: 0 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                style={{ transformOrigin: 'top' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                            />
                            <div className={styles.boxBorder}>
                                <div>
                                    <motion.div
                                        className={styles.box}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                        whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                    >
                                        <div className={styles.boxHeader}>
                                            <div className={styles.counter}>
                                                01
                                            </div>
                                            <ReliableIcon />
                                        </div>
                                        <h3>
                                            Fast, Reliable <br />
                                            Deposits & Withdrawals
                                        </h3>
                                        <p>
                                            Instant deposits and same-day withdrawal processing across bank transfer,
                                            cards, and e-wallets — your capital moves as fast as your decisions.
                                        </p>
                                    </motion.div>
                                </div>
                                <motion.div
                                    className={styles.firstFill}
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    whileInView={{ opacity: 1, scaleY: 1 }}
                                    style={{ transformOrigin: 'top' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                                />
                            </div>
                        </div>

                        {/* 02 */}
                        <div className={styles.sec}>
                            <motion.div
                                className={styles.line}
                                initial={{ opacity: 0, scaleY: 0 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                style={{ transformOrigin: 'top' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                            />
                            <div>
                                <motion.div
                                    className={styles.box}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                >
                                    <div className={styles.boxHeader}>
                                        <div className={styles.counter}>
                                            02
                                        </div>
                                        <img src={DolorIcon} alt="DolorIcon" />
                                    </div>
                                    <h3>
                                        Tight Spreads, <br />
                                        Transparent Pricing
                                    </h3>
                                    <p>
                                        Spreads from 0.0 pips, with every fee
                                        disclosed upfront. No hidden markups, no surprise charges.

                                    </p>
                                </motion.div>
                            </div>
                            <motion.div
                                className={styles.filltwo}
                                initial={{ opacity: 0, scaleY: 0 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                style={{ transformOrigin: 'top' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                            />
                        </div>

                        {/* 03 */}
                        <div className={styles.fillthree}>
                            <motion.div
                                className={styles.three}
                                initial={{ opacity: 0, scaleY: 0 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                style={{ transformOrigin: 'top' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            />
                            <div>
                                <motion.div
                                    className={styles.box}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                >
                                    <div className={styles.boxHeader}>
                                        <div className={styles.counter}>
                                            03
                                        </div>
                                        <img src={Execution} alt="Execution" />
                                    </div>
                                    <h3>
                                        Execution <br />
                                        Built for Precision
                                    </h3>
                                    <p>
                                        Average order execution from lowest ms across deep liquidity pools, with
                                        no dealing-desk intervention on Plus and Pro accounts.
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* 04 */}
                        <div className={styles.fourStep}>
                            <motion.div
                                className={styles.linefour}
                                initial={{ opacity: 0, scaleY: 0 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                style={{ transformOrigin: 'top' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            />
                            <motion.div
                                className={styles.lineright}
                                initial={{ opacity: 0, scaleY: 0 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                style={{ transformOrigin: 'top' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            />
                            <motion.div
                                className={styles.box}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            >
                                <div className={styles.boxHeader}>
                                    <div className={styles.counter}>
                                        04
                                    </div>
                                    <img src={Trade} alt='Trade' />
                                </div>
                                <h3>
                                    Trade Anywhere
                                </h3>
                                <p>
                                    MT5, WebTrader, and the Yume Prime mobile app, all
                                    synced to one account, one login.
                                </p>
                            </motion.div>
                        </div>

                        {/* 05 */}
                        <div className={styles.five}>
                            <div>
                                <motion.div
                                    className={styles.box}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                >
                                    <div className={styles.boxHeader}>
                                        <div className={styles.counter}>
                                            05
                                        </div>
                                        <img src={Instruments} alt='Instruments' />
                                    </div>
                                    <h3>
                                        Multiple Instruments <br />
                                        Across 6 Markets
                                    </h3>
                                    <p>
                                        Forex, metals, indices, crypto CFDs, commodities, and
                                        stock CFDs, all from a single account.
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* 06 */}
                        <div className={styles.six}>
                            <div>
                                <motion.div
                                    className={styles.box}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                >
                                    <div className={styles.boxHeader}>
                                        <div className={styles.counter}>
                                            06
                                        </div>
                                        <img src={Support} alt='Support' />
                                    </div>
                                    <h3>
                                        Support That <br />
                                        Understands Trading
                                    </h3>
                                    <p>
                                        24/5 multilingual support from a team trained
                                        on the platform, not reading from a script.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
