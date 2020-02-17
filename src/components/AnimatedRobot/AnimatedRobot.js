import React, { useState } from 'react'


import robotHead from '../../assets/images/robot-head.svg'
import robotBoy from "../../assets/images/robot-body.svg"

import './styles.scss'


const AnimatedRobot = props => {    
    const [ count, setCount ] = useState("-left")

    setInterval(() => {
    if (Math.floor((new Date().getTime() / 1000) % 2) === 0) {
       setCount("-left")     

    } else if (Math.floor((new Date().getTime() / 1000) % 2) === 1) {
       setCount("-right")     
         
    }
    }, 1000);


    return (
      <div className="robot">
        <img className={"robot-head"+count} alt="robot-head" src={robotHead} />
        <img className="robot-body" alt="robot-body" src={robotBoy} />
      </div>
    );
}


export default AnimatedRobot