import React, { useState } from 'react'
import Header from '../components/Header'
import styles from './index.module.css'

// Here Base is a higher-order component which takes a component and returns another component
export default function Base({ children }) {

    const [popup, setPopup] = useState(false);

    return (
        <div className={styles.headerContainer}>

            <Header popup={popup} setPopup={setPopup} />

            {children}

        </div>
    )
}
