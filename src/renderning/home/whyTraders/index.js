'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './whyTraders.module.scss';
const Reliable = '/assets/images/Reliable.png';
const Transparent = '/assets/images/Transparent.png';
const Execution = '/assets/images/Execution.png';
const Across = '/assets/images/across.png';
const Support = '/assets/images/support.png';
const TradeSystem = '/assets/images/trade-system.png';

const cardHover = {
    y: -6,
    scale: 1.01,
    boxShadow: '0 20px 40px rgba(11, 22, 56, 0.08)',
    transition: { duration: 0.25, ease: 'easeOut' },
};

export default function WhyTraders() {
    return (
        <>
            <div className={styles.whyTraders}>
                <div className='container-xl'>
                    <div className={styles.title}>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Why traders choose Yume Prime
                        </motion.h2>
                    </div>
                    <motion.div
                        className={styles.fullBox}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={cardHover}
                    >
                        <div className={styles.text}>
                            <h3>
                                Fast, Reliable <br />
                                Deposits & Withdrawals
                            </h3>
                            <p>
                                Instant deposits and same-day withdrawal processing across bank transfer, cards,
                                and e-wallets your capital moves as fast as your decisions.
                            </p>
                        </div>
                        <div className={styles.image}>
                            <img src={Reliable} alt="Reliable" />
                        </div>
                    </motion.div>
                    <div className={styles.twocol}>
                        <div>
                            <motion.div
                                className={styles.box}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={cardHover}
                            >
                                <div className={styles.text}>
                                    <h3>
                                        Tight Spreads, <br />
                                        Transparent Pricing
                                    </h3>
                                    <p>
                                        Spreads from 0.0
                                        pips, with every fee disclosed upfront. No hidden markups, no surprise charges.
                                    </p>
                                </div>
                                <div className={styles.mobile}>
                                    <img src={Transparent} alt='Transparent' />
                                </div>
                            </motion.div>
                            <motion.div
                                className={styles.box}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={cardHover}
                            >
                                <div className={styles.text}>
                                    <h3>
                                        Execution <br />
                                        Built for Precision
                                    </h3>
                                    <p>
                                        Average order execution from lowest ms across deep liquidity pools, with
                                        no dealing-desk intervention on Plus and Pro accounts.
                                    </p>
                                </div>
                                <div className={styles.execution}>
                                    <img src={Execution} alt='Execution' />
                                </div>
                            </motion.div>
                        </div>
                        <div>
                            <motion.div
                                className={styles.box}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={cardHover}
                            >
                                <div className={styles.text}>
                                    <h3>
                                        Multiple Instruments <br />
                                        Across 6 Markets
                                    </h3>
                                    <p>
                                        Forex, metals, indices, crypto CFDs,
                                        commodities, and stock CFDs, all from a single account.
                                    </p>
                                </div>
                                <div className={styles.across}>
                                    <img src={Across} alt='Across' />
                                </div>
                            </motion.div>
                            <motion.div
                                className={styles.box}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={cardHover}
                            >
                                <div className={styles.text}>
                                    <h3>
                                        Support That <br />
                                        Understands Trading
                                    </h3>
                                    <p>
                                        24/5 multilingual support from a team trained
                                        on the platform, not reading from a script.
                                    </p>
                                </div>
                                <div className={styles.support}>
                                    <img src={Support} alt='Support' />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        className={styles.lastBox}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={cardHover}
                    >
                        <div className={styles.image}>
                            <img src={TradeSystem} alt='TradeSystem' />
                        </div>
                        <div className={styles.text}>
                            <h3>
                                Trade <br /> Anywhere, Anytime
                            </h3>
                            <p>
                                MT5, WebTrader, and the Yume Prime mobile app,
                                all synced to one account, one login.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
