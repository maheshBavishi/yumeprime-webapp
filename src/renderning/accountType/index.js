import React from 'react'
import AccountTypeBanner from './accountTypeBanner'
import AccountTypePlan from './accountTypePlan'
import FullComparison from './fullComparison'
import FlexibleFunding from './flexibleFunding'
import VisionSection from '../home/visionSection'

export default function AccountType() {
    return (
        <div>
            <AccountTypeBanner />
            <AccountTypePlan />
            <FullComparison />
            <FlexibleFunding />
            <VisionSection />
        </div>
    )
}
