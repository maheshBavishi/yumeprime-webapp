import BestPlatforms from '@/components/bestPlatforms';
import CommonBanner from '@/components/commonBanner';
import CommonCardSection from '@/components/commonCardSection';
import ContentSection from '@/components/contentSection';
import HowtoStart from '@/components/howtoStart';
import InstrumentsPricing from '@/components/instrumentsPricing';
import WhatIsTrading from '@/components/whatIsTrading';
import React from 'react';
import VisionSection from '../home/visionSection';

const bannerData = {
    title: (
        <>
            Indices <br />
            Trading with <br /> <span> Yume Prime. </span>
        </>
    ),
    description: "Trade the direction of the world’s biggest markets in a single position.",
    image: '/assets/images/indices-img.png',
    primaryBtnText: "Start Trading",
    secondaryBtnText: "Try Demo Free",
};

const contentSectionData = {
    title: (
        <>
            <span> Indices </span> TRADING OVERVIEW
        </>
    ),
    description: (
        <>
            Stock indices track the combined performance of a market’s leading companies, giving traders a way to speculate on overall market direction rather than a single
            stock. Yume Prime offers CFDs on major US, European, and Asian benchmarks.
        </>
    ),
};

const whatIsTradingData = {
    title: "What is Indices trading?",
    image: '/assets/images/indices-trading.png',
    description: (
        <>
            An index CFD tracks the value of a basket of shares such as the S&P 500 or FTSE 100 as a single tradable instrument. Rather than buying every company in the index individually, you take one position on the index’s overall direction, going long if you
            expect it to rise or short if you expect it to fall.
        </>
    ),
    primaryBtnText: "Learn More",
    secondaryBtnText: "Watch Video",
};

const commonCardData = {
    title: (
        <>
            Why Trade <br />Forex with <span> Yume Prime. </span>
        </>
    ),
    cards: [
        {
            id: 1,
            image: '/assets/images/card1.png',
            title: '55+ Currency Pairs',
            description: 'Majors, minors, and exotics, all from a single account.',
        },
        {
            id: 2,
            image: '/assets/images/card2.png',
            title: 'Spreads From 0.0 Pips',
            description: 'Raw pricing available on our Pro account, with no hidden markups.',
        },
        {
            id: 3,
            image: '/assets/images/card3.png',
            title: 'STP/ECN Execution',
            description: 'Orders routed directly to liquidity, with no dealing-desk conflict.',
        },
        {
            id: 4,
            image: '/assets/images/card4.png',
            title: 'Long & Short Trading',
            description: 'Profit from both rising and falling markets.',
        },
        {
            id: 5,
            image: '/assets/images/card5.png',
            title: '24/5 Global Sessions',
            description: 'Trade continuously from the Sydney open to the New York close.',
        },
        {
            id: 6,

            image: '/assets/images/card6.png',
            title: 'Flexible Leverage',
            description: 'Up to [1:1000] on major pairs, depending on account type and jurisdiction.',
        },
    ],
    bottomText: "Ready to trade Forex with transparent, raw pricing?",
    bottomPrimaryBtnText: "Open Live Account",
    bottomSecondaryBtnText: "Try Demo Free",
};

const bestPlatformsData = {
    title: "Best Platforms to Trade Indices",
    description: "Trade Indices on MT5, WebTrader, and the Yume Prime mobile app with the same pricing and execution standard across every device.",
    image: '/assets/images/trade-forx.png',
    features: [
        "Advanced charting tools and built-in technical indicators",
        "One-click execution and multiple order types (Market, Limit, Stop)",
        "Automated trading via Expert Advisors on MT5",
        "Browser-based WebTrader no download required",
        "Full mobile trading on iOS and Android",
    ],
};

const instrumentsPricingData = {
    title: "Instruments & Pricing",
    headers: [
        'Index',
        'Underlying Market',
        'Spread From',
    ],
    rows: [
        [
            'US500',
            'S&P 500',
            '[0.4] pts',
        ],
        [
            'US30',
            'Dow Jones Industrial Average',
            '[1.5] pts',
        ],
        [
            'NAS100',
            'Nasdaq 100',
            '[1.0] pts',
        ],
        [
            'GER40',
            'DAX (Germany)',
            '[0.8] pts',
        ],
        [
            'UK100',
            'FTSE 100',
            '[0.9] pts',
        ],
    ],
    noteText: (
        <>
            <span>Trading hours:</span> broadly aligned with global forex sessions, Monday–Friday (server time [GMT+X]).
        </>
    ),
};

export default function Indices() {
    return (
        <div>
            <CommonBanner
                title={bannerData.title}
                description={bannerData.description}
                image={bannerData.image}
                primaryBtnText={bannerData.primaryBtnText}
                secondaryBtnText={bannerData.secondaryBtnText}
            />
            <ContentSection
                title={contentSectionData.title}
                description={contentSectionData.description}
            />
            <WhatIsTrading
                title={whatIsTradingData.title}
                image={whatIsTradingData.image}
                description={whatIsTradingData.description}
                primaryBtnText={whatIsTradingData.primaryBtnText}
                secondaryBtnText={whatIsTradingData.secondaryBtnText}
                titleMaxWidth={whatIsTradingData.titleMaxWidth}
                imageMaxWidth={whatIsTradingData.imageMaxWidth}
            />
            <CommonCardSection
                title={commonCardData.title}
                cards={commonCardData.cards}
                bottomText={commonCardData.bottomText}
                bottomPrimaryBtnText={commonCardData.bottomPrimaryBtnText}
                bottomSecondaryBtnText={commonCardData.bottomSecondaryBtnText}
            />
            <BestPlatforms
                title={bestPlatformsData.title}
                description={bestPlatformsData.description}
                image={bestPlatformsData.image}
                features={bestPlatformsData.features}
                titleMaxWidth={bestPlatformsData.titleMaxWidth}
                descriptionMaxWidth={bestPlatformsData.descriptionMaxWidth}
            />
            <InstrumentsPricing
                title={instrumentsPricingData.title}
                headers={instrumentsPricingData.headers}
                rows={instrumentsPricingData.rows}
                noteText={instrumentsPricingData.noteText}
            />
            <HowtoStart />
            <VisionSection />
        </div>
    )
}
