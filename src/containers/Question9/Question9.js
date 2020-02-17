import React from 'react'
import { useDispatch } from "react-redux";

import AnimatedRobot from "../../components/AnimatedRobot/AnimatedRobot";
import * as Actions from "../../store/actions";

import "./styles.scss";


const Question9 = props => {
    const dispatch = useDispatch();

    const questionCompleteHandler = (props, type) => {
      dispatch(Actions.pageChangeHandler(props, type));
    };

    return (
      <div className="question9">
        <AnimatedRobot />
        <div className="question9-question-symbol">
          <div className="question9-question-symbol-1" />
          <div className="question9-question-symbol-2" />
        </div>
        <div className="question9-question">
          <p className="question9-question-title">Q9.</p>
          <p className="question9-question-content">
            哪個字體適合用於您的品牌？
          </p>
        </div>
        <div className="question9-answer">
          <p onClick={() => questionCompleteHandler(props, "/question10")}>
            A.經典
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question10")}>
            B.現代
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question10")}>
            C.圓滑
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question10")}>
            D.力量
          </p>
        </div>
      </div>
    );
}


export default Question9