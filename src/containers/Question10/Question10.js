import React from 'react'
import { useDispatch } from "react-redux";

import AnimatedRobot from "../../components/AnimatedRobot/AnimatedRobot";
import * as Actions from "../../store/actions";

import "./styles.scss";


const Question10 = props => {
    const dispatch = useDispatch();

    const questionCompleteHandler = (props, type) => {
      dispatch(Actions.pageChangeHandler(props, type));
    };

    return (
      <div className="question10">
        <AnimatedRobot />
        <div className="question10-question-symbol">
          <div className="question10-question-symbol-1" />
          <div className="question10-question-symbol-2" />
        </div>
        <div className="question10-question">
          <p className="question10-question-title">Q10.</p>
          <p className="question10-question-content">您的選單需要什麼功能？</p>
        </div>
        <div className="question10-answer">
          <div>
            <div className="question10-answer-selection-question">
              <div>
                <label className="question10-answer-label">
                  最新消息
                  <i className="material-icons">keyboard_arrow_down</i>
                </label>
              </div>
              <div className="question10-answer-option">
                <p>最新消息</p>
                <p>關於</p>
                <p>加入會員</p>
                <p>最新消息</p>
                <p>關於</p>
                <p>加入會員</p>
                <p>最新消息</p>
                <p>關於</p>
                <p>加入會員</p>
              </div>

              {/* <select lassName="question10-answer-select">
                <option>最新消息</option>
                <option>最新消息</option>
                <option>最新消息</option>
              </select> */}
            </div>
            <div className="question10-answer-selection-question">
              <div>
                <label className="question10-answer-label">最新消息</label>
              </div>
              <select lassName="question10-answer-select">
                <option>最新消息</option>
                <option>最新消息</option>
                <option>最新消息</option>
              </select>
            </div>
            <div lassName="question10-answer-selection-question">
              <div>
                <label className="question10-answer-label">最新消息</label>
              </div>
              <select lassName="question10-answer-select">
                <option>最新消息</option>
                <option>最新消息</option>
                <option>最新消息</option>
              </select>
            </div>
          </div>
          <div>
            <div lassName="question10-answer-selection-question">
              <label className="question10-answer-label">最新消息</label>
              <select lassName="question10-answer-select">
                <option>最新消息</option>
                <option>最新消息</option>
                <option>最新消息</option>
              </select>
            </div>
            <div lassName="question10-answer-selection-question">
              <label className="question10-answer-label">最新消息</label>
              <select lassName="question10-answer-select">
                <option>最新消息</option>
                <option>最新消息</option>
                <option>最新消息</option>
              </select>
            </div>
            <div lassName="question10-answer-selection-question">
              <label className="question10-answer-label">最新消息</label>
              <select lassName="question10-answer-select">
                <option>最新消息</option>
                <option>最新消息</option>
                <option>最新消息</option>
              </select>
            </div>
          </div>
          {/* <p onClick={() => questionCompleteHandler(props, "/question10")}>
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
          </p> */}
        </div>
        <div className="analysis">
          <p onClick={() => questionCompleteHandler(props, "/loading")}>
            進行分析
          </p>
          <i className="material-icons">arrow_forward</i>
        </div>
      </div>
    );
}


export default Question10