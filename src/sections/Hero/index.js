import React from 'react'
import './index.css'

// Components 
import Header from '../../components/Header'
import Text from '../../components/AppearingText'
import Carousel from '../../components/Carousel'
import Arrow from '../../components/ScrollDownArrow'

export default function index() {
    return (
        <div className='Hero'>
            <Header/>
            <Text/>
            <Carousel/>
            <Arrow color='white'/> 
        </div>
    )
}
