'use client';
import { motion } from 'framer-motion';
import styles from './fullComparison.module.scss';
import Button from '@/components/button';
const Mobile = '/assets/images/mobile-dark.png';

export default function FullComparison() {
    return (
        <div className={styles.fullComparison}>
            <div className='container-xl'>
                <div className={styles.title}>
                    <h2>
                        Full comparison
                    </h2>
                </div>
                <div className={styles.tableWrapper}>
                    <div className={styles.grid}>
                        <div className={styles.items}>
                            <div className={styles.header}></div>
                            <div className={styles.text}>
                                <p>
                                    Minimum deposit
                                </p>
                            </div>
                            <div className={styles.text}>
                                <p>
                                    Spreads from
                                </p>
                            </div>
                            <div className={styles.text}>
                                <p>
                                    Commission
                                </p>
                            </div>
                            <div className={styles.text}>
                                <p>
                                    Leverage
                                </p>
                            </div>
                            <div className={styles.text}>
                                <p>
                                    Execution Model
                                </p>
                            </div>
                            <div className={styles.text}>
                                <p>
                                    Minimum Trade Size
                                </p>
                            </div>
                            <div className={styles.text}>
                                <p>
                                    Platforms
                                </p>
                            </div>
                            <div className={styles.text}>
                                <p>
                                    Dedicated Manager
                                </p>
                            </div>
                            <div className={styles.text}>
                                <p>
                                    Islamic (Swap-Free)
                                </p>
                            </div>
                        </div>
                        <div className={styles.items}>
                            <div className={styles.header}>
                                <h3>
                                    Standard
                                </h3>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    [$50]
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    [1.2] pips
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    None
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    Up to [1:1000]
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    Market execution
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    0.01 lot
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    MT5, WebTrader, App
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    —
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    Available on request
                                </p>
                            </div>
                        </div>
                        <div className={styles.items}>
                            <div className={styles.header}>
                                <h3>
                                    Plus
                                </h3>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    [$250]
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    [0.6] pips
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    [$3] per lot per side
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    Up to [1:500]
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    STP
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    0.01 lot
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    MT5, WebTrader, App
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    —
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    Available on request
                                </p>
                            </div>
                        </div>
                        <div className={styles.items}>
                            <div className={styles.header}>
                                <h3>
                                    Pro Account
                                </h3>
                                <button>
                                    <span>
                                        Most Popular
                                    </span>
                                </button>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    [$1,000]
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    [0.0] pips (raw)
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    [$3.5] per lot per side
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    Up to [1:200]
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    ECN
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    0.01 lot
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    MT5, WebTrader, App
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    Yes
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    Available on request
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.howtoGet}>
                    <h2>
                        How to get started
                    </h2>
                    <div className={styles.gridSec}>
                        {/* Left Column (Step 1 & Step 2) */}
                        <div className={styles.items}>
                            <motion.div
                                className={styles.text}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                            >
                                <h3>Register</h3>
                                <p>
                                    Create your Yume Prime account with your email
                                    and basic details. Takes under two minutes.
                                </p>
                            </motion.div>
                            <div className={styles.empty}></div>
                            <motion.div
                                className={styles.text}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                            >
                                <h3>Fund</h3>
                                <p>
                                    Deposit using bank transfer, debit/credit card, or e-wallet. Deposits
                                    are processed instantly on most methods.
                                </p>
                            </motion.div>
                            <div className={styles.empty}></div>
                        </div>

                        {/* Center Column (Mobile mockup with smooth, glitch-free float animation) */}
                        <div className={styles.items}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
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
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        willChange: 'transform'
                                    }}
                                >
                                    <img
                                        src={Mobile}
                                        alt='Mobile'
                                        draggable={false}
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            userSelect: 'none',
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden'
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Column (Step 3 & Step 4) */}
                        <div className={styles.items}>
                            <div className={styles.empty}></div>
                            <motion.div
                                className={styles.text}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ x: -6, transition: { duration: 0.2 } }}
                            >
                                <h3>Verify</h3>
                                <p>
                                    Complete identity verification (KYC) by uploading a valid ID and proof of address. Most accounts
                                    are verified within [X] hours.
                                </p>
                            </motion.div>
                            <div className={styles.empty}></div>
                            <motion.div
                                className={styles.text}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ x: -6, transition: { duration: 0.2 } }}
                            >
                                <h3>Trade</h3>
                                <p>
                                    Launch MT5, WebTrader, or the mobile app and place
                                    your first trade across any of our six markets.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className={styles.center}>
                    <Button text="Open a Live Account" />
                </div>
                <div className={styles.lastContent}>
                    <span> Not ready yet? </span>
                    <div className={styles.line}></div>
                    <p> Open a Free Demo Account</p>
                </div>
            </div>
        </div>
    )
}
