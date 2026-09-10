import React from 'react'
import styles from './tradingType.module.scss';
import Button from '@/components/button';
import ArrowIcon from '@/icons/arrowIcon';
const SocialTrading = '/assets/images/SocialTrading.png';
export default function TradingType() {
    return (
        <div className={styles.tradingType}>
            <div className='container-xl'>
                <div className={styles.allBox}>
                    <div className={styles.box}>
                        <div className={styles.left}>
                            <div>
                                <h2>
                                    Social Trading
                                </h2>
                                <p>
                                    Copy the trades of experienced strategy providers automatically, in real time, proportional
                                    to your account size. No manual execution required.
                                </p>
                            </div>
                            <div className={styles.btn}>
                                <Button text="Explore Social Trading" fill />
                            </div>
                        </div>
                        <div className={styles.center}>
                            <img src={SocialTrading} alt='SocialTrading' />
                        </div>
                        <div className={styles.right}>
                            <div>
                                <div className={styles.iconText}>
                                    <ArrowIcon />
                                    <span>
                                        Ranked leaderboard of strategy providers
                                    </span>
                                </div>
                                <div className={styles.iconText}>
                                    <ArrowIcon />
                                    <span>
                                        Trades copied automatically and proportionally
                                    </span>
                                </div>
                                <div className={styles.iconText}>
                                    <ArrowIcon />
                                    <span>
                                        Stop copying or adjust allocation any time
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.left}>
                            <div>
                                <h2>
                                    PAMM Trading
                                </h2>
                                <p>
                                    PAMM lets investors allocate capital to professional money managers, who trade a pooled
                                    account on their behalf profits and losses distributed proportionally.
                                </p>
                            </div>
                            <div className={styles.btn}>
                                <Button text="Explore PAMM" fill />
                            </div>
                        </div>
                        <div className={styles.center}>
                            <img src={SocialTrading} alt='SocialTrading' />
                        </div>
                        <div className={styles.right}>
                            <div>
                                <div className={styles.iconText}>
                                    <ArrowIcon />
                                    <span>
                                        Browse verified managers by track record
                                    </span>
                                </div>
                                <div className={styles.iconText}>
                                    <ArrowIcon />
                                    <span>
                                        Allocate capital without trading yourself
                                    </span>
                                </div>
                                <div className={styles.iconText}>
                                    <ArrowIcon />
                                    <span>
                                        Funds remain in your own segregated account
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
