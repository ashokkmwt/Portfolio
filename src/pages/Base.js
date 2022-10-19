import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import styles from './index.module.css'

// Here Base is a higher-order component which takes a component and returns another component.
export default function Base({ children }) {

    const navigate = useNavigate();

    useEffect(() => {
        switch (JSON.parse(localStorage.getItem("tab"))) {
            case 0:
                navigate("/about")
                break;
            case 1:
                navigate("/projects")
                break;
            case 2:
                navigate("/skills")
                break;
            default:
                navigate("/")
        }
    }, [navigate])

    return (
        <div className={styles.headerContainer}>

            <Header />

            {children}

        </div>
    )
}
