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
            Stock CFDs <br />
            Trading with <br /> <span> Yume Prime. </span>
        </>
    ),
    description: "Trade the world’s leading companies — without owning a single share.",
    image: '/assets/images/stock-img.png',
    primaryBtnText: "Start Trading",
    secondaryBtnText: "Try Demo Free",
};

const contentSectionData = {
    title: (
        <>
            <span> Stock </span> CFDs <br /> TRADING OVERVIEW
        </>
    ),
    description: (
        <>
            Stock CFDs let traders speculate on the price movement of individual, globally listed companies without the cost or complexity of direct share ownership or custody. Yume
            Prime offers CFDs across major US, European, and Asian equities.
        </>
    ),
};

const whatIsTradingData = {
    title: "What is Stock CFD trading?",
    image: '/assets/images/stock-trading.png',
    description: (
        <>
            A stock CFD tracks the price of a single listed company’s shares. Instead of buying and holding the actual stock, you open a position on its price direction long if you expect it to rise, short if you expect it to fall
            and close it when your target is reached.
        </>
    ),
    primaryBtnText: "Learn More",
    secondaryBtnText: "Watch Video",
};

const commonCardData = {
    title: (
        <>
            Why Trade <br />Stock CFD with <span> Yume Prime. </span>
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
    bottomText: "Ready to trade Stock CFDs with transparent, raw pricing?",
    bottomPrimaryBtnText: "Open Live Account",
    bottomSecondaryBtnText: "Try Demo Free",
};

const bestPlatformsData = {
    title: "Best Platforms to Trade Stock CFDs",
    description: "Trade Stock CFDs on MT5, WebTrader, and the Yume Prime mobile app with the same pricing and execution standard across every device.",
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
        'Category',
        'Examples',
        'Spread From',
        'Typical Leverage',
    ],
    rows: [
        [
            'US Tech',
            'Apple, Microsoft, Tesla, Nvidia',
            '[variable]',
            'Up to [1:20]',
        ],
        [
            'US Blue-Chip',
            'Coca-Cola, JPMorgan, Disney',
            '[variable]',
            'Up to [1:20]',
        ],
        [
            'European Shares',
            '[list per licensing]',
            '[variable]',
            'Up to [1:20]',
        ],
    ],
    noteText: (
        <>
            <span>Trading hours:</span> broadly aligned with global forex sessions, Monday–Friday (server time [GMT+X]).
        </>
    ),
};

export default function Stock() {
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
                titleMaxWidth="457px"
                imageMaxWidth="790px"
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
                titleMaxWidth="508px"
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
