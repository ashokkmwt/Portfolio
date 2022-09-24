import React from 'react'
import Vector from '../../assets/icons/Vector.svg'
import styles from '../Projects/index.module.css'
import { projectLeft } from './data'

export default function ProjectColumnLeft() {
    return (
        <div className={styles.ProjectBar1Container}>
            {projectLeft.map((p, index) => {
                return (
                    <div key={index} className={styles._project1}>
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
                                <a className={styles._ln} href={p.projectLink} target='_blank' rel='noreferrer'>
                                    <img width="100%" height="100%" src={Vector} alt="vector" />
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
