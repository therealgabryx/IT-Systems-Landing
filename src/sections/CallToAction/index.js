import React from 'react'
import './index.css'

// Components
import Heading from '../../components/HeadingText'
import Subheading from '../../components/SubheadingText'
import Button from '../../components/CTAButton'

export default function index() {
    return (
        <div className='CallToAction'>
            <Heading/>
            <Subheading/>
            <Button/>
        </div>
    )
}
