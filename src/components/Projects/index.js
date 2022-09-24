import React from 'react'
import { Animated } from 'react-animated-css'
import { useWindowSize } from 'react-use'
import ProjectBar1 from '../ProjectColumnLeft'
import ProjectBar2 from '../ProjectColumnRight'
import styles from './index.module.css'


export default function Projects() {

    const { width } = useWindowSize();

    return (
        <div className={styles.projectContainer}>
            <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
                <h1>
                    /<span>My projects</span>
                </h1>
            </Animated>
            {width <= 800 &&
                <p>Over the past few months, I've developed front-end project1s of various sizes and various stages to strengthen my skillset.<br />
                    Here are a few that I feel were the most challenging yet rewarding.
                </p>
            }

            <div className={styles._row}>
                <ProjectBar1 />
                <ProjectBar2 />
            </div>

        </div>
    )
}
