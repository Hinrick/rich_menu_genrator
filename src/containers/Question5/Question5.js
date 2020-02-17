import React from 'react'
import { useDispatch } from "react-redux";

import AnimatedRobot from "../../components/AnimatedRobot/AnimatedRobot";
import * as Actions from "../../store/actions";

import "./styles.scss";


const Question5 = props => {
    const dispatch = useDispatch();

    const questionCompleteHandler = (props, type) => {
      dispatch(Actions.pageChangeHandler(props, type));
    };

    return (
      <div className="question5">
        <AnimatedRobot  />
        <div className="question5-question-symbol"></div>
        <div className="question5-question">
          <p className="question5-question-title">Q5.</p>
          <p className="question5-question-content">您是何種服務內容？</p>
        </div>
        <div className="question5-answer">
          <p onClick={() => questionCompleteHandler(props, "/question6")}>
            A.餐飲
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question6")}>
            B.保健美容
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question6")}>
            C.教育金融
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question6")}>
            D. 零售
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question6")}>
            A.餐飲
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question6")}>
            B.保健美容
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question6")}>
            C.教育金融
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question6")}>
            D. 零售
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question6")}>
            A.餐飲
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question6")}>
            B.保健美容
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question6")}>
            C.教育金融
          </p>
          <p onClick={() => questionCompleteHandler(props, "/question6")}>
            D. 零售
          </p>
        </div>
        <div className="bottom-shadow"></div>
      </div>
    );
}


export default Question5