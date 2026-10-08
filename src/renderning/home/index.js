import React from 'react'
import Herobanner from './herobanner'
import SliderAnimation from './sliderAnimation'
import WhyTraders from './whyTraders'
import Foursteps from './foursteps'
import AccountStage from './accountStage'
import TradeTerms from './tradeTerms'
import CardSection from './cardSection'
import FeaturedSection from './featuredSection'
import FaqSection from './faqSection'
import VisionSection from './visionSection'

export default function HomePage() {
    return (
        <div style={{ overflowX: 'clip' }}>
            <Herobanner />
            <WhyTraders />
            <Foursteps />
            <AccountStage />
            <TradeTerms />
            <CardSection cardhide />
            <FeaturedSection />
            <FaqSection />
            <VisionSection />
        </div>
    )
}
