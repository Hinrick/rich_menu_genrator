import React from 'react'
import { useDispatch } from "react-redux";

import AnimatedRobot from "../../components/AnimatedRobot/AnimatedRobot";
import * as Actions from "../../store/actions";

import "./styles.scss";


const Question7 = props => {
    const dispatch = useDispatch();

    const questionCompleteHandler = (props, type) => {
      dispatch(Actions.pageChangeHandler(props, type));
    };

    return (
      <div className="question7">
        <AnimatedRobot />
        <div className="question7-question-symbol">
          <div className="question7-question-symbol-1" />
          <div className="question7-question-symbol-2" />
        </div>
        <div className="question7-question">
          <p className="question7-question-title">Q7.</p>
          <p className="question7-question-content">
            哪組詞彙適合形容您的品牌？
          </p>
        </div>
        <div className="question7-answer">
          <p onClick={() => questionCompleteHandler(props, "/question8")}>
            A.真誠-實在-自然
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question8")}>
            B.活力-富想像力-大膽
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question8")}>
            C.專業-智能-可靠
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question8")}>
            D.優雅-精緻-溫和
          </p>
        </div>
      </div>
    );
}


export default Question7