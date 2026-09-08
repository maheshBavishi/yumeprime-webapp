import React from 'react'
import MarketsHero from './marketsHero'
import StopSwitching from './stopSwitching'
import YourTrade from './yourTrade'
import WhyChoose from './whyChoose'
import VisionSection from '../home/visionSection'

export default function Markets() {
    return (
        <div>
            <MarketsHero />
            <StopSwitching />
            <YourTrade />
            <WhyChoose />
            <VisionSection />
        </div>
    )
}
