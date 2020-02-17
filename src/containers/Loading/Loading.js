import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


import Background from '../../components/Background/Background'
import LoadingSmileFace from '../../components/LoadingSmileFace/LoadingSmileFace'
import * as Actions from '../../store/actions'

import './styles.scss'

const Loading = props => {
    const dispatch = useDispatch();
    const [eyeClass, setEyeClass] = useState("");
    const [dartClass, setDartClass] = useState("");
    const [dartClass2, setDartClass2] = useState("");
    const [backgroundStatus, setBackgroundStatus] = useState("");

    const count = Math.floor(Math.random() * (10 - 5)) + 5;

    const questionCompleteHandler = (props, type) => {
      dispatch(Actions.pageChangeHandler(props, type));
    };

    setTimeout(()=>{
      questionCompleteHandler(props, "/preview")
    }, count*1000)

    const animationHandler = () => {
      setInterval(() => {
        if (Math.floor((new Date().getTime() / 1000) % 2) === 0) {
          setEyeClass("")
          setBackgroundStatus("")
        } else {
          setEyeClass("-closed");
          setBackgroundStatus("-after")
        }
      }, 1000);

      setInterval(() => {
        if (Math.floor((new Date().getTime() / 1000) % 3) === 0) {
          setDartClass("");
          setDartClass2("");
        } else if (Math.floor((new Date().getTime() / 1000) % 3) === 1) {
          setDartClass("-after");
          setDartClass2("-after");
        } else if (Math.floor((new Date().getTime() / 1000) % 3) === 2) {
          setDartClass2("-end");
        }
      }, 1000);
    };

    animationHandler();


    return (
      <div className="loading-page">
        <Background
          backgroundType={"loading"}
          backgroundStatus={backgroundStatus}
        >
          <LoadingSmileFace
            eyeClass={eyeClass}
            dartClass={dartClass}
            dartClass2={dartClass2}
          />
        </Background>
      </div>
    );
}



export default Loading