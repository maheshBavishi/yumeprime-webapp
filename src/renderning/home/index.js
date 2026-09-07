import React from 'react'
import Herobanner from './herobanner'
import SliderAnimation from './sliderAnimation'
import WhyTraders from './whyTraders'
import Foursteps from './foursteps'
import AccountStage from './accountStage'
import TradeTerms from './tradeTerms'
import CardSection from './cardSection'
import FeaturedSection from './featuredSection'
import Trustedby from './trustedby'
import MarketInsights from './marketInsights'
import FaqSection from './faqSection'
import VisionSection from './visionSection'

export default function HomePage() {
    return (
        <div>
            <Herobanner />
            <SliderAnimation />
            <WhyTraders />
            <Foursteps />
            <AccountStage />
            <TradeTerms />
            <CardSection />
            <FeaturedSection />
            {/* <Trustedby /> */}
            <MarketInsights />
            {/* <FaqSection /> */}
            <VisionSection />
        </div>
    )
}
