import React from 'react'
import { useDispatch } from "react-redux";

import * as Actions from "../../store/actions";
import AnimatedRobot from "../../components/AnimatedRobot/AnimatedRobot";


import "./styles.scss";


const Question4 = props => {
    const dispatch = useDispatch();

    const questionCompleteHandler = (props, type) => {
      dispatch(Actions.pageChangeHandler(props, type));
    };

    return (
      <div className="question4">
        <AnimatedRobot />
        <div className="question4-question-symbol">
        </div>
        <div className="question4-question">
          <p className="question4-question-title">Q4.</p>
          <p className="question4-question-content">您是何種服務型態？</p>
        </div>
        <div className="question4-answer">
          <p onClick={() => questionCompleteHandler(props, "/question5")}>
            A.數位
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question5")}>
            B.僅實體
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question5")}>
            C.實體結合線上
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question5")}>
            D.商業貿易
          </p>
        </div>
      </div>
    );
}



export default Question4