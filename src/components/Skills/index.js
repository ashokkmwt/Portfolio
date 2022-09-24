import React from 'react'
import styles from './index.module.css'
import ContactBar from '../Reusable/ContactBar'
import { skills } from './data'
import { useWindowSize } from 'react-use'

export default function Skills() {

    const { width } = useWindowSize();

    return (
        <div className={styles.container}>

            <h1 className={styles.pageName}>
                <span> /</span>My Skills
            </h1>

            <div className={styles.skillsSection}>
                <div>
                    {skills.map((skill, index) => <span key={index}>{skill}</span>)}
                </div>
                <p>P.s. working on adding more to this list ++++</p>
            </div>

            <div className={styles.contactSection}>
                <ContactBar style={
                    {
                        justifyContent: width <= 800 ? "flex-start" : "flex-end",
                        marginTop: width <= 800 && "10%"
                    }
                } />
            </div>
        </div>
    )
}
