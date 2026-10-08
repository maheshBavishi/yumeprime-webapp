'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../button';
import styles from './commonCardSection.module.scss';

const Spreads = '/assets/images/spreads-card.png';
const Execution = '/assets/images/Execution.png';
const ShortTrading = '/assets/images/ShortTrading.png';
const Precision = '/assets/images/Precision.png';
const FlexibleLeverage = '/assets/images/FlexibleLeverage.png';

const defaultCards = [
    {
        id: 1,
        title: (
            <>
                Forex, Metals,Indices, <br /> Commodities and stock CFD
            </>
        ),
        description: 'Majors, minors, and exotics, all from a single account.',
        image: FlexibleLeverage,
    },
    {
        id: 2,
        title: 'Spreads From 0.0 Pips',
        description: 'Raw pricing available on our Pro account, with no hidden markups.',
        image: Spreads,
    },
    {
        id: 3,
        title: 'STP/ECN Execution',
        description: 'Orders routed directly to liquidity, with no dealing-desk conflict.',
        image: Execution,
    },
    {
        id: 4,
        title: 'Long & Short Trading',
        description: 'Average order execution from lowest ms across deep liquidity pools, with no dealing-desk intervention on Plus and Pro accounts.',
        image: ShortTrading,
    },
    {
        id: 5,
        title: (
            <>
                Execution <br /> Built for Precision
            </>
        ),
        description: 'Trade continuously from the Sydney open to the New York close.',
        image: Precision,
    },
    {
        id: 6,
        title: 'Flexible Leverage',
        description: 'Up to [1:1000] on major pairs, depending on account type and jurisdiction.',
        image: FlexibleLeverage,
    },
];

// Easing curve
const easeCurve = [0.16, 1, 0.3, 1];

// Title animation
const titleVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: easeCurve,
        },
    },
};

// Staggered grid container
const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

// Card item animation
const cardVariants = {
    hidden: { opacity: 0, y: 45 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: easeCurve,
        },
    },
};

// Bottom CTA animation
const bottomVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: easeCurve,
        },
    },
};

export default function CommonCardSection({
    title = (
        <>
            Why Trade <br /> with Yume Prime.
        </>
    ),
    cards = defaultCards,
    bottomText = 'Ready to trade Forex with transparent, raw pricing?',
    bottomPrimaryBtnText = 'Open Live Account',
    bottomSecondaryBtnText = 'Try Demo Free',
    onBottomPrimaryClick,
    onBottomSecondaryClick,
    bottomPrimaryHref,
    bottomSecondaryHref,
}) {
    return (
        <div className={styles.commonCardSection}>
            <div className='container-xl'>
                {/* Title entrance */}
                <motion.div
                    className={styles.title}
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2>{title}</h2>
                </motion.div>

                {/* Staggered cards grid */}
                <motion.div
                    className={styles.grid}
                    variants={gridContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {cards.map((item, index) => (
                        <motion.div
                            key={item.id || index}
                            className={styles.items}
                            variants={cardVariants}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.35, ease: easeCurve },
                            }}
                        >
                            <div className={styles.text}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className={styles.image}>
                                <motion.img
                                    src={item.image}
                                    alt={typeof item.title === 'string' ? item.title : 'Card item'}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.35, ease: easeCurve }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA section */}
                <motion.div
                    className={styles.bottomContent}
                    variants={bottomVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p>{bottomText}</p>
                    <div className={styles.btnAlign}>
                        {bottomPrimaryBtnText && (
                            <Button
                                text={bottomPrimaryBtnText}
                                fill
                                onClick={onBottomPrimaryClick}
                                href={bottomPrimaryHref}
                            />
                        )}
                        {bottomSecondaryBtnText && (
                            <Button
                                text={bottomSecondaryBtnText}
                                outlinePrimary
                                onClick={onBottomSecondaryClick}
                                href={bottomSecondaryHref}
                            />
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
