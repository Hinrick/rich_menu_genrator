import React from 'react'
import { useDispatch } from "react-redux";

import AnimatedRobot from "../../components/AnimatedRobot/AnimatedRobot";
import * as Actions from "../../store/actions";

import "./styles.scss";


const Question8 = props => {
    const dispatch = useDispatch();

    const questionCompleteHandler = (props, type) => {
      dispatch(Actions.pageChangeHandler(props, type));
    };

    return (
      <div className="question8">
        <AnimatedRobot />
        <div className="question8-question-symbol">
          <div className="question8-question-symbol-1" />
          <div className="question8-question-symbol-2" />
          <div className="question8-question-symbol-3" />
        </div>
        <div className="question8-question">
          <p className="question8-question-title">Q8.</p>
          <p className="question8-question-content">哪個顏色適合您的品牌？</p>
        </div>
        <div className="question8-answer">
          <div>
            <div
              className="question8-answer-1"
              onClick={() => questionCompleteHandler(props, "/question9")}
            />
            <div
              className="question8-answer-2"
              onClick={() => questionCompleteHandler(props, "/question9")}
            />
            <div
              className="question8-answer-3"
              onClick={() => questionCompleteHandler(props, "/question9")}
            />
            <div
              className="question8-answer-4"
              onClick={() => questionCompleteHandler(props, "/question9")}
            />
            <div
              className="question8-answer-5"
              onClick={() => questionCompleteHandler(props, "/question9")}
            />
          </div>
          <div>
            <div
              className="question8-answer-6"
              onClick={() => questionCompleteHandler(props, "/question9")}
            />
            <div
              className="question8-answer-7"
              onClick={() => questionCompleteHandler(props, "/question9")}
            />
          </div>
        </div>
      </div>
    );
}


export default Question8