import React from 'react'
import Vector from '../../assets/icons/Vector.svg'
import styles from '../Projects/index.module.css'
import { projectRight } from './data'

export default function ProjectColumnRight() {
    return (
        <div className={styles.ProjectBar2Container}>
            {projectRight.map((p, index) => {
                return (
                    <a key={index} className={styles._project1} href={p.projectLink} target='_blank' rel='noreferrer'>

                        <div className={styles._dr1}>
                            {p.skills.map((skill, i) => <div key={i} className={styles._sk}>{skill}</div>)}
                        </div>

                        <div className={styles._head}>{p.heading}</div>
                        <div className={styles._mr}>{p.description}</div>
                        <div className={styles.skillVideo}>
                            <iframe title={p.heading} src={p.video}></iframe>
                        </div>
                        <div className={styles.view}>
                            <p className={styles._mt}>View Project</p>
                            <div className={styles._fa}>
                                <div className={styles._ln}>
                                    <img width="100%" height="100%" src={Vector} alt="vector" />
                                </div>
                            </div>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}
