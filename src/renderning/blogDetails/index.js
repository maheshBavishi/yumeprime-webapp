import React from 'react';
import Link from 'next/link';
import styles from './blogDetails.module.scss';
import VisionSection from '../home/visionSection';
import Button from '@/components/button';
import Insights from './insights';

const Banner = '/assets/images/blog-banner.png';

export default function BlogDetails() {
    return (
        <div>
            <div className={styles.blogDetails}>
                <div className="container-sm">
                    {/* Meta info */}
                    <div className={styles.metaInfo}>
                        <span className={styles.author}>Yume Prime Team</span>
                        <span className={styles.dot}>•</span>
                        <span className={styles.readTime}>4 min read</span>
                        <span className={styles.dot}>•</span>
                        <span className={styles.category}>Education</span>
                    </div>

                    {/* Blog Title */}
                    <h1 className={styles.title}>
                        Leverage, explained<br />
                        without the scare tactics
                    </h1>

                    {/* Hero Banner Image */}
                    <div className={styles.bannerWrapper}>
                        <img
                            src={Banner}
                            alt="Leverage, explained without the scare tactics"
                            className={styles.bannerImage}
                        />
                    </div>

                    {/* Article Body Content */}
                    <div className={styles.contentWrapper}>
                        <p className={styles.introParagraph}>
                            Most new traders check the price of a currency pair and stop there. But the price you see and the price you trade at are two different numbers — and the gap between them, the spread, is one of the biggest hidden costs in trading if you don't understand it.
                        </p>

                        <section className={styles.section}>
                            <h2>What a Spread Actually Is</h2>
                            <p>
                                This isn't a fee added on top of your trade. It's built directly into the price. The moment you open a position, you're already at a small loss equal to the spread, because you bought at the higher ask and would have to sell back at the lower bid to close immediately. Your position needs to move in your favor by at least the spread amount just to break even.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>Fixed vs. Variable Spreads</h2>
                            <p>
                                Spreads come in two forms. A fixed spread stays the same regardless of market conditions, useful for predictability, but it usually means the broker is pricing in a buffer for volatile moments. A variable (or floating) spread moves with live market liquidity: it narrows when the market is calm and liquid, and widens during news events, session opens, or thin overnight trading.
                            </p>
                            <p>
                                Yume Prime uses variable spreads across all account types, sourced directly from our liquidity providers. That means during normal trading hours, spreads on majors like EUR/USD are typically at their tightest; but you should expect them to widen briefly around high-impact news releases, which is true of any broker's variable pricing, not a platform issue.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>A quick way to think about it</h2>
                            <ul className={styles.bulletList}>
                                <li>Tighter spread → lower cost to enter and exit a position</li>
                                <li>Wider spread → more room needed before a trade is profitable</li>
                                <li>Spreads change throughout the day — check them before placing size, not after</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>How Spread Interacts With Commission</h2>
                            <p>
                                This is where account types start to matter. On a Standard account, there's no separate commission; the spread itself is slightly wider, and that's how the cost of the trade is built in. On Plus and Pro accounts, spreads are tighter (down to raw, near-zero on Pro), but a small commission is charged per lot, per side, on top.
                            </p>
                            <p>
                                Neither model is objectively cheaper; it depends on your trading style. A trader holding positions for hours or days barely notices the spread once a trade is in profit. A scalper making dozens of trades a day, however, pays that cost every single time they enter and exit, which is why raw spread plus commission pricing tends to work out cheaper at high frequency.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>Choosing the Right Account Type for Your Spread Sensitivity</h2>
                            <p>
                                If you're new to trading, hold positions for longer periods, or trade infrequently, the Standard account's spread-only model is simpler to track: one number, no separate commission line to calculate. If you trade actively, scalp short-term moves, or run automated strategies, the Plus or Pro account's raw spread plus commission model will almost always be cheaper over a large number of trades, even after accounting for the commission.
                            </p>
                            <p>
                                The only way to know for certain is to look at your own trade frequency and holding time. As a rule of thumb: the more trades you place per day, the more the spread compounds and the more a tighter-spread account type pays for itself.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>Key takeaways</h2>
                            <ul className={styles.bulletList}>
                                <li>The spread is the gap between the bid and ask price; it's built into the trade, not charged separately</li>
                                <li>Variable spreads move with market liquidity and typically widen around major news events</li>
                                <li>Standard accounts price the spread wider with no commission; Plus and Pro accounts offer tighter spreads plus a per-lot commission</li>
                                <li>Frequent traders generally benefit more from raw spread plus commission pricing; occasional traders may prefer the simplicity of spread-only pricing</li>
                            </ul>
                        </section>

                        {/* CTA Card Box */}
                        <div className={styles.ctaBox}>
                            <h3>Not sure which account fits your trading style?</h3>
                            <p>Compare Standard, Plus, and Pro side by side.</p>
                            <div className={styles.center}>
                                <Button text="Compare Yume Prime Account Types" fill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Insights />
            <VisionSection />
        </div>
    );
}

