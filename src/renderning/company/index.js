import React from 'react'
import CompanyHero from './companyHero'
import OurStory from './ourStory'
import WhyYumePrime from './whyYumePrime'
import OurValues from './ourValues'
import RegulatoryStatement from './regulatoryStatement'
import VisionSection from '../home/visionSection'

export default function Company() {
    return (
        <div>
            <CompanyHero />
            <OurStory />
            <WhyYumePrime />
            <OurValues />
            <RegulatoryStatement />
            <VisionSection />
        </div>
    )
}
