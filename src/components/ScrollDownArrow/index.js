import React from 'react'
import './index.css'

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function index(props) {
    return (
        <div className='ScrollDownArrow'>
            <FontAwesomeIcon icon={faChevronDown} color={props.color}/>
        </div>
    )
}
