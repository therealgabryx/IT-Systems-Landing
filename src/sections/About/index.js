import React from 'react'
import './index.css'

// Components
import AboutContent from '../../components/AboutContent'
import QuotedText from '../../components/QuotedText'
import ScrollArrow from '../../components/ScrollDownArrow'

export default function index() {
    return (
        <div className='About'>
            <AboutContent/>
            <QuotedText/>
            <ScrollArrow color='white'/> 
        </div> 
    )
}
