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
            Commodities <br />
            Trading with <br /> <span> Yume Prime. </span>
        </>
    ),
    description: "Oil, gas, and the markets that move the world economy.",
    image: '/assets/images/forex-img.png',
    primaryBtnText: "Start Trading",
    secondaryBtnText: "Try Demo Free",
};

const contentSectionData = {
    title: (
        <>
            <span> Commodities </span> <br /> TRADING OVERVIEW
        </>
    ),
    description: (
        <>
            Energy and agricultural commodities are driven by global supply, demand, and geopolitics making them a core market for traders looking to diversify beyond currencies
            and equities. Yume Prime offers CFDs on the world’s most-traded commodities.
        </>
    ),
};

const whatIsTradingData = {
    title: "What is Commodities trading?",
    image: '/assets/images/Commodities-trading.png',
    description: (
        <>
            Commodity CFDs let you speculate on the price of raw materials like crude oil or natural gas without taking physical delivery. As with any CFD, you go long if you expect prices to rise or short if you expect them to fall,
            and close the position when your target is reached.
        </>
    ),
    primaryBtnText: "Learn More",
    secondaryBtnText: "Watch Video",
};

const commonCardData = {
    title: (
        <>
            Why Trade <br />Commodities with <span> Yume Prime. </span>
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
    bottomText: "Ready to trade Commodities with transparent, raw pricing?",
    bottomPrimaryBtnText: "Open Live Account",
    bottomSecondaryBtnText: "Try Demo Free",
};

const bestPlatformsData = {
    title: "Best Platforms to Trade Commodities",
    description: "Trade Commodities on MT5, WebTrader, and the Yume Prime mobile app with the same pricing and execution standard across every device.",
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
        'Instrument',
        'Spread From',
        'Typical Leverage',
    ],
    rows: [
        [
            'Crude Oil (WTI)',
            '[0.03] pts',
            'Up to [1:200]',
        ],
        [
            'Brent Crude',
            '[0.03] pts',
            'Up to [1:200]',
        ],
        [
            'Natural Gas',
            '[0.005] pts',
            'Up to [1:100]',
        ],
        [
            '[Agricultural commodities]',
            '[variable]',
            '[X:1]',
        ],
    ],
    noteText: (
        <>
            <span>Trading hours:</span> broadly aligned with global forex sessions, Monday–Friday (server time [GMT+X]).
        </>
    ),
};


export default function Commodities() {
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
                titleMaxWidth="615px"
                imageMaxWidth="680px"
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
                titleMaxWidth="598px"
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
