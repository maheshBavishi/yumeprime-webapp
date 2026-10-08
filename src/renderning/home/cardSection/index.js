'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/button';
import styles from './cardSection.module.scss';

const Yume = '/assets/images/yume.svg';
const Prime = '/assets/images/prime.svg';

const Account = '/assets/images/account.png';
const Verify = '/assets/images/Verify.png';
const Fund = '/assets/images/Fund.png';
const Trade = '/assets/images/Trade-p.png';

const TradingImg = '/assets/images/Solutions.png';
const IntroducingImg = '/assets/images/Programme-card.png';
const TradeWinImg = '/assets/images/win-card.png';

const steps = [
    {
        id: 1,
        step: 'STEP 1',
        title: 'Register',
        desc: 'Create your Yume Prime account in minutes with your email and basic details.',
        image: Account,
        alt: 'Step 1 - Register',
    },
    {
        id: 2,
        step: 'STEP 2',
        title: 'Verify',
        desc: 'Complete quick identity verification (KYC) by uploading a valid ID and proof of address.',
        image: Verify,
        alt: 'Step 2 - Verify',
    },
    {
        id: 3,
        step: 'STEP 3',
        title: 'Fund',
        desc: 'Deposit instantly via bank transfer, card, or e-wallet, starting from as little as $50.',
        image: Fund,
        alt: 'Step 3 - Fund',
    },
    {
        id: 4,
        step: 'STEP 4',
        title: 'Trade',
        desc: 'Launch MT5, WebTrader, or the mobile app and place your first trade.',
        image: Trade,
        alt: 'Step 4 - Trade',
    },
];

const hoverCards = [
    {
        id: 'trading-solutions',
        title: 'Trading Solutions',
        description: 'Copy top-performing strategies with Social Trading, or invest passively through PAMM.',
        buttonText: 'EXPLORE TRADING SOLUTIONS',
        link: '/trading-solutions',
        image: TradingImg,
        alt: 'Trading Solutions',
    },
    {
        id: 'introducing-broker',
        title: 'Introducing Broker Programme',
        description: 'Earn up to 80% commission rebate share with instant IB activation and instant withdrawals.',
        buttonText: 'Become an IB',
        link: '/introducing-broker',
        image: IntroducingImg,
        alt: 'Introducing Broker Programme',
    },
    {
        id: 'trade-win',
        title: 'Trade & Win',
        description: 'Trade & Win',
        buttonText: 'View Rewards',
        link: '/trade-win',
        image: TradeWinImg,
        alt: 'Trade & Win',
    },
];

const imageVariants = {
    enter: (dir) => ({
        opacity: 0,
        y: dir >= 0 ? 25 : -25,
        scale: 0.96,
    }),
    center: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: (dir) => ({
        opacity: 0,
        y: dir >= 0 ? -25 : 25,
        scale: 0.96,
        transition: {
            duration: 0.25,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

export default function CardSection({ cardhide }) {
    const [activeStep, setActiveStep] = useState(0);
    const [direction, setDirection] = useState(1);
    const [activeCard, setActiveCard] = useState(0);

    // Preload images for instantaneous switching without lag
    useEffect(() => {
        [...steps, ...hoverCards].forEach((item) => {
            const img = new Image();
            img.src = item.image;
        });
    }, []);

    // Autoplay: cycles through step 1 to step 4 every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [activeStep]);

    // Handle manual click on step cards (resets timer via activeStep change)
    const handleStepClick = (index) => {
        if (index === activeStep) return;
        setDirection(index > activeStep ? 1 : -1);
        setActiveStep(index);
    };

    return (
        <>
            <div className={styles.cardSection}>
                <div className='container-xl'>
                    <div className={styles.sectionHeader}>
                        <motion.h2
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Four Steps <br />
                            to Start trading
                        </motion.h2>
                        <motion.div
                            className={styles.buttonAlignment}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Button text="Register now" fill />
                            <Button text="Open a Free Demo Account" outlinePrimary />
                        </motion.div>
                    </div>

                    <motion.div
                        className={styles.mainBox}
                        initial={{ opacity: 0, y: 45, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            className={styles.left}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <img src={Yume} alt='Yume' />
                        </motion.div>
                        <div className={styles.img}>
                            <AnimatePresence mode="wait" custom={direction} initial={false}>
                                <motion.img
                                    key={activeStep}
                                    src={steps[activeStep].image}
                                    alt={steps[activeStep].alt}
                                    custom={direction}
                                    variants={imageVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                />
                            </AnimatePresence>
                        </div>
                        <motion.div
                            className={styles.right}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <img src={Prime} alt='Prime' />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className={styles.stepGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.1,
                                },
                            },
                        }}
                    >
                        {steps.map((item, index) => {
                            const isActive = activeStep === index;
                            return (
                                <motion.div
                                    key={item.id}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                                        },
                                    }}
                                    className={`${styles.items} ${isActive ? styles.active : ''}`}
                                    onClick={() => handleStepClick(index)}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                >
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleStepClick(index);
                                        }}
                                    >
                                        {item.step}
                                    </button>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
            {
                cardhide && (
                    <div className={styles.cardhoverAnimation}>
                        <div className='container-xl'>
                            <motion.div
                                className={styles.cardsWrapper}
                                onMouseLeave={() => setActiveCard(0)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.14,
                                            delayChildren: 0.1,
                                        },
                                    },
                                }}
                            >
                                {hoverCards.map((card, index) => {
                                    const isActive = activeCard === index;
                                    return (
                                        <motion.div
                                            key={card.id}
                                            variants={{
                                                hidden: { opacity: 0, y: 40, scale: 0.98 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1,
                                                    transition: {
                                                        duration: 0.75,
                                                        ease: [0.16, 1, 0.3, 1],
                                                    },
                                                },
                                            }}
                                            className={`${styles.hoverCard} ${isActive ? styles.expanded : styles.collapsed}`}
                                            onMouseEnter={() => setActiveCard(index)}
                                            onClick={() => setActiveCard(index)}
                                        >
                                            {/* Persistent background image - ZERO blank delay */}
                                            <div className={styles.imageCol}>
                                                <img src={card.image} alt={card.alt} />
                                            </div>

                                            {/* Collapsed vertical title bar */}
                                            <motion.div
                                                className={styles.collapsedBar}
                                                initial={false}
                                                animate={{
                                                    opacity: isActive ? 0 : 1,
                                                }}
                                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                                style={{ pointerEvents: isActive ? 'none' : 'auto' }}
                                            >
                                                <span className={styles.verticalText}>
                                                    {card.title}
                                                </span>
                                            </motion.div>

                                            {/* Expanded right-aligned content */}
                                            <motion.div
                                                className={styles.cardContent}
                                                initial={false}
                                                animate={{
                                                    opacity: isActive ? 1 : 0,
                                                    x: isActive ? 0 : 20,
                                                }}
                                                transition={{
                                                    duration: 0.35,
                                                    delay: isActive ? 0.08 : 0,
                                                    ease: [0.16, 1, 0.3, 1],
                                                }}
                                                style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                                            >
                                                <div className={styles.textCol}>
                                                    <h3>{card.title}</h3>
                                                    <p>{card.description}</p>
                                                    <Link href={card.link} className={styles.exploreBtn}>
                                                        {card.buttonText}
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>
                )
            }

        </>
    );
}
