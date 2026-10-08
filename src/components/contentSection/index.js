'use client';
import { motion } from 'framer-motion';
import styles from './contentSection.module.scss';

// Animation variants
const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

const badgeVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
};

const gridContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.3,
        },
    },
};

const gridItem = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

const countVariant = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function ContentSection({
    badgeText = 'OVERVIEW',
    description = 'The forex market is the most liquid financial market, trading trillions daily across global sessions. Yume Prime uses direct execution to deep liquidity, so you trade the real market price.',
    stats = [
        { value: '$9.6T+', label: 'Daily FX Trading Volume' },
        { value: '89%',    label: 'Trades Involve USD' },
        { value: '$3T+',   label: 'Daily Spot FX Volume' },
    ],
}) {
    return (
        <div className={styles.contentSection}>
            <div className='container-xl'>

                {/* Badge */}
                <motion.div
                    className={styles.centerButton}
                    variants={badgeVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <button>{badgeText}</button>
                </motion.div>

                {/* Description */}
                <motion.h3
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {description}
                </motion.h3>

                {/* Stats grid */}
                <motion.div
                    className={styles.colGrid}
                    variants={gridContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className={styles.items}
                            variants={gridItem}
                            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                        >
                            <motion.h3 variants={countVariant}>
                                {stat.value}
                            </motion.h3>
                            <p>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}
