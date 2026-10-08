'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/button';
import styles from './foursteps.module.scss';

const Forex = '/assets/images/forex-card.png';
const Metals = '/assets/images/Metals-card.png';
const Indices = '/assets/images/indices-card.png';
const Crypto = '/assets/images/crypto-card.png';
const Commodities = '/assets/images/commodities-card.png';
const Stock = '/assets/images/stock-card.png';

const marketSlides = [
    {
        id: 'forex',
        title: 'Forex',
        description: 'Deposit instantly via bank transfer, card, or e-wallet, starting from as little as $50.',
        image: Forex,
        link: '/forex',
    },
    {
        id: 'metals',
        title: 'Metals',
        description: 'Diversify your portfolio with popular precious metals like gold and silver.',
        image: Metals,
        link: '/metals',
    },
    {
        id: 'indices',
        title: 'Indices',
        description: 'Trade global indices and market movements across major economies.',
        image: Indices,
        link: '/indices',
    },
    {
        id: 'crypto',
        title: 'Crypto CFDs',
        description: 'Trade cryptocurrencies via CFDs and profit from rising or falling markets.',
        image: Crypto,
        link: '/crypto',
    },
    {
        id: 'stock',
        title: 'Stock CFDs',
        description: 'Trade CFDs on global stocks and gain exposure without owning shares.',
        image: Stock,
        link: '/stock',
    },
    {
        id: 'commodities',
        title: 'Commodities',
        description: 'Trade popular cryptocurrencies via CFDs and profit from rising or falling markets.',
        image: Commodities,
        link: '/commodities',
    },
];

export default function Foursteps() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardStep, setCardStep] = useState(1232);
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const firstBoxRef = useRef(null);
    const dragStartX = useRef(0);
    const isPointerDown = useRef(false);
    const hasMoved = useRef(false);

    useEffect(() => {
        const updateWidth = () => {
            if (firstBoxRef.current) {
                const gap = window.innerWidth <= 568 ? 16 : 32;
                setCardStep(firstBoxRef.current.offsetWidth + gap);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? marketSlides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === marketSlides.length - 1 ? 0 : prev + 1));
    };

    // Mouse / Touch swipe via Pointer Events
    const handlePointerDown = (e) => {
        if (e.button !== undefined && e.button !== 0) return;
        isPointerDown.current = true;
        dragStartX.current = e.clientX;
        hasMoved.current = false;
        setIsDragging(true);
    };

    useEffect(() => {
        const handlePointerMove = (e) => {
            if (!isPointerDown.current) return;
            const rawDiff = e.clientX - dragStartX.current;
            if (Math.abs(rawDiff) > 6) {
                hasMoved.current = true;
            }

            // Elastic resistance when dragging past boundaries
            let diff = rawDiff;
            if (currentIndex === 0 && rawDiff > 0) {
                diff = rawDiff * 0.35;
            } else if (currentIndex === marketSlides.length - 1 && rawDiff < 0) {
                diff = rawDiff * 0.35;
            }

            setDragOffset(diff);
        };

        const handlePointerUp = (e) => {
            if (!isPointerDown.current) return;
            isPointerDown.current = false;
            setIsDragging(false);

            const rawDiff = e.clientX - dragStartX.current;
            const threshold = 60; // minimum swipe distance to change slide

            if (rawDiff < -threshold) {
                // Swiped Left -> go to next
                if (currentIndex < marketSlides.length - 1) {
                    setCurrentIndex((prev) => prev + 1);
                } else {
                    setCurrentIndex(0);
                }
            } else if (rawDiff > threshold) {
                // Swiped Right -> go to prev
                if (currentIndex > 0) {
                    setCurrentIndex((prev) => prev - 1);
                } else {
                    setCurrentIndex(marketSlides.length - 1);
                }
            }

            setDragOffset(0);

            setTimeout(() => {
                hasMoved.current = false;
            }, 60);
        };

        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);
        window.addEventListener('pointercancel', handlePointerUp);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
            window.removeEventListener('pointercancel', handlePointerUp);
        };
    }, [currentIndex, cardStep]);

    // Prevent accidental button clicks if user dragged the slider
    const handleClickCapture = (e) => {
        if (hasMoved.current) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    const targetX = -currentIndex * cardStep + dragOffset;

    return (
        <div className={styles.oneAccount} style={{ overflow: 'hidden' }}>
            <div className={styles.leftAlignment}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    One Account. Six Market.
                </motion.h2>

                <div className={styles.menubar}>
                    {marketSlides.map((slide, index) => (
                        <a
                            key={slide.id}
                            onClick={() => setCurrentIndex(index)}
                            style={{
                                opacity: currentIndex === index ? 1 : 0.6,
                                fontWeight: currentIndex === index ? 600 : 400,
                            }}
                        >
                            {slide.title}
                        </a>
                    ))}
                </div>

                <div
                    style={{
                        overflow: 'visible',
                        width: '100%',
                        cursor: isDragging ? 'grabbing' : 'grab',
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        touchAction: 'pan-y',
                    }}
                    onPointerDown={handlePointerDown}
                    onClickCapture={handleClickCapture}
                    onDragStart={(e) => e.preventDefault()}
                >
                    <motion.div
                        className={styles.sliderAnimation}
                        animate={{ x: targetX }}
                        transition={
                            isDragging
                                ? { duration: 0 }
                                : { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
                        }
                    >
                        {marketSlides.map((slide, index) => (
                            <motion.div
                                key={slide.id}
                                ref={index === 0 ? firstBoxRef : null}
                                className={styles.box}
                                whileHover={isDragging ? {} : { y: -4, transition: { duration: 0.25 } }}
                            >
                                <div className={styles.contentBox}>
                                    <div>
                                        <h3>{slide.title}</h3>
                                        <p>{slide.description}</p>
                                    </div>
                                    <Button fillwhite text="Read more" href={slide.link} />
                                </div>
                                <div className={styles.imageBox}>
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        draggable="false"
                                        style={{ userSelect: 'none', pointerEvents: 'none' }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className={styles.arrowAlignment}>
                    <motion.div
                        className={styles.arrow}
                        onClick={handlePrev}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                            <path d="M5.75781 10.7576L0.757813 5.75757L5.75781 0.757568" stroke="#F7F4EC" strokeWidth="2.14286" strokeLinejoin="bevel" />
                        </svg>
                    </motion.div>
                    <motion.div
                        className={styles.arrow}
                        onClick={handleNext}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                            <path d="M0.757812 10.7576L5.75781 5.75757L0.757812 0.757568" stroke="#F7F4EC" strokeWidth="2.14286" strokeLinejoin="bevel" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
