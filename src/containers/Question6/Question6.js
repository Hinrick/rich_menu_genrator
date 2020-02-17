import React from 'react'
import { useDispatch } from "react-redux";

import AnimatedRobot from "../../components/AnimatedRobot/AnimatedRobot";
import * as Actions from "../../store/actions";

import "./styles.scss";


const Question6 = props => {
    const dispatch = useDispatch();

    const questionCompleteHandler = (props, type) => {
      dispatch(Actions.pageChangeHandler(props, type));
    };

    return (
      <div className="question6">
        <AnimatedRobot />
        <div className="question6-question-symbol">
          <div className="question6-question-symbol-1" />
          <div className="question6-question-symbol-2" />
        </div>
        <div className="question6-question">
          <p className="question6-question-title">Q6.</p>
          <p className="question6-question-content">
            您的品牌適用何種設計風格？
          </p>
        </div>
        <div className="question6-answer">
          <p onClick={() => questionCompleteHandler(props, "/question7")}>
            A.簡潔的
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question7")}>
            B.活潑的
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question7")}>
            C.成熟的
          </p>
        </div>
      </div>
    );
}


export default Question6