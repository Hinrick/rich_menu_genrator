import React from 'react'
import { useDispatch } from "react-redux";

import * as Actions from "../../store/actions";
import AnimatedRobot from "../../components/AnimatedRobot/AnimatedRobot";


import './styles.scss'


const Question2 = props => {
    const dispatch = useDispatch();

    const questionCompleteHandler = (props, type) => {
      dispatch(Actions.pageChangeHandler(props, type));
    };

    return (
      <div className="question2">
        <div className="question2-question-symbol">
          <div className="question2-question-symbol-1" />
          <div className="question2-question-symbol-2" />
        </div>
        <AnimatedRobot />
        <div className="question2-question">
          <p className="question2-question-title">Q2.</p>
          <p className="question2-question-content">您的目標族群身份？</p>
        </div>
        <div className="question2-answer">
          <p onClick={() => questionCompleteHandler(props, "/question3")}>
            A.學生
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question3")}>
            B.未婚青年
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question3")}>
            C.一般工作者
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question3")}>
            D.財務自由者
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question3")}>
            A.學生
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question3")}>
            B.未婚青年
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question3")}>
            C.一般工作者
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question3")}>
            D.財務自由者
          </p>
        </div>
        <div className="bottom-shadow"></div>
      </div>
    );
}


export default Question2