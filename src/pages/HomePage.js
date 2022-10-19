import React from 'react'
// import { useNavigate } from 'react-router-dom';
import Home from '../components/Home'
import Base from './Base'

export default function HomePage() {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     switch (JSON.parse(localStorage.getItem("tab"))) {
    //         case 0:
    //             navigate("/about")
    //             break;
    //         case 1:
    //             navigate("/projects")
    //             break;
    //         case 2:
    //             navigate("/skills")
    //             break;

    //         default:
    //             navigate("/")
    //     }
    // }, [])
    
    return (
        <Base>
            <Home />
        </Base>
    )
}
