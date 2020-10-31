import React from 'react'
import './index.css'

// Components
import HeadingText from '../../components/HeadingText'
import SolutionText from '../../components/SolutionText'
import QuotedText from '../../components/QuotedText'
import Partners from '../../components/PartnersShowcase'
import Arrow from '../../components/ScrollDownArrow'

export default function index() {
    return (
        <div className='Solutions'>
            <HeadingText/>
            <SolutionText/>
            <SolutionText/>
            <SolutionText/>
            <QuotedText/>
            <Partners/>
            <HeadingText/>
            <Arrow color='white'/>     
        </div>
    )
}
