'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './winrewards.module.scss';

const GiftImage = '/assets/images/gift.png';

export default function Winrewards() {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const updateWidth = () => {
            if (carouselRef.current) {
                const scrollWidth = carouselRef.current.scrollWidth;
                const offsetWidth = carouselRef.current.offsetWidth;
                setWidth(Math.max(0, scrollWidth - offsetWidth));
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (
        <div className={styles.winrewards}>
            <div className={styles.leftAlignment}>
                <motion.div
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2>Win rewards with every trade</h2>
                    <p>
                        Trade eligible instruments across forex and CFDs. Accumulate closed-lot volume. Unlock rewards as you hit each milestone no cap on how far you can go.
                    </p>
                </motion.div>

                {/* Framer Motion Drag Slider Container */}
                <div className={styles.allBoxWrapper} ref={carouselRef}>
                    <motion.div
                        className={styles.allBox}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        dragElastic={0.08}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
                        whileTap={{ cursor: "grabbing" }}
                    >
                        {[...Array(15)].map((_, index) => (
                            <motion.div
                                key={index}
                                className={styles.box}
                                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                            >
                                <img src={GiftImage} alt="GiftImage" draggable={false} />
                                <p>Welcome Gift Pack</p>
                                <div className={styles.center}>
                                    <button type="button">50 Lots</button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

