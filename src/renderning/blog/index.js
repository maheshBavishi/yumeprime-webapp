import React from 'react'
import Blogbanner from './blogbanner'
import AllBlog from './allBlog'
import Newsletter from './newsletter'
import VisionSection from '../home/visionSection'

export default function Blog() {
    return (
        <div>
            <Blogbanner />
            <AllBlog />
            <Newsletter />
            <VisionSection />
        </div>
    )
}
