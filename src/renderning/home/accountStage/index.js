import React from 'react';
import styles from './accountStage.module.scss';
import Button from '@/components/button';
import CheckIcon from '@/icons/checkIcon';


export default function AccountStage() {

    return (
        <section className={styles.accountStage}>
            <div className='container-xl'>
                <div className={styles.sectionHeader}>
                    <h2>
                        An account
                        for every stage
                    </h2>
                    <Button text="Compare all accounts" fill />
                </div>
                <div className={styles.grid}>
                    <div className={styles.items}>
                        <div className={styles.cardHeader}>
                            <h4>
                                Standard
                            </h4>
                            <h3>
                                $50/ <span> Deposit </span>
                            </h3>
                            <p>
                                For new traders. Simple spread-only pricing
                                with no commission.
                            </p>
                            <Button text="Get started" fill />
                        </div>
                        <div className={styles.cardbody}>
                            <p>
                                features
                            </p>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Min Deposit- 50$</span>
                            </div>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Spread from- 2pip</span>
                            </div>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Commission- Zero</span>
                            </div>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Leverage- Upto 500</span>
                            </div>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Execution- STP</span>
                            </div>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Best for- Scalper's,Algorithmic trader's,High volume professionsl's</span>
                            </div>

                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.cardHeader}>
                            <h4>
                                Plus Account
                            </h4>
                            <h3>
                                $250/ <span> Deposit </span>
                            </h3>
                            <p>
                                Our popular account offers tighter spreads with a small commission.
                            </p>
                            <Button text="Get started" fill />
                        </div>
                        <div className={styles.cardbody}>
                            <p>
                                features
                            </p>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Min Deposit- 250$</span>
                            </div>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Spread from- 1.5pip</span>
                            </div>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Commission- Zero</span>
                            </div>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Leverage- Upto 500</span>
                            </div>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Execution- STP</span>
                            </div>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Best for- Active Day trader's,Intermediate <br /> strategies</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.cardHeader}>
                            <div className={styles.btnAlignment}>
                                Most Popular
                            </div>
                            <h4>
                                Pro Account
                            </h4>
                            <h3>
                                $500/ <span> Deposit </span>
                            </h3>
                            <p>
                                Institutional pricing for professionals
                                and high-volume traders.
                            </p>
                            <Button text="Get started" />
                        </div>
                        <div className={styles.cardbody}>
                            <p>
                                features
                            </p>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Min Deposit- 500$</span>
                            </div>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Spread from- 1pip</span>
                            </div>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Commission- Zero</span>
                            </div>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Leverage- Upto 500</span>
                            </div>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Execution- STP</span>
                            </div>
                            <div className={styles.iconText}>
                                <CheckIcon />
                                <span>Best for- New Trader's,Swing Trader's,Positional Trader's</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

