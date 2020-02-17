import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import AnimatedRobot from '../../components/AnimatedRobot/AnimatedRobot'
import * as Actions from "../../store/actions";

import './styles.scss'


const Question1 = props => {
    const dispatch = useDispatch()
    const [selected, setSelected] = useState({
      a:"",
      b:"",
      c:"",
      d:""
    })
    const count = useSelector(state => state.answer.count )

    const questionCompleteHandler = (num) => {
      const updateSelected = { ...setSelected };
      updateSelected[num] = "selected"
      setSelected(updateSelected)

      dispatch(Actions.countingHandler());
    }


    useEffect(() => {
      if(count === 2){
        dispatch(Actions.countingHandler());
        dispatch(Actions.pageChangeHandler(props, '/question2'));
      }
    }, [count]);


    return (
      <div className="question1">
        <div className="question1-question-circle"></div>
        <AnimatedRobot />
        <div className="question1-question">
          <p className="question1-question-title">Q1.</p>
          <p className="question1-question-content">
            您的官方帳號用途是？c
          </p>
        </div>
        <div className="question1-answer">
          <p
            className={selected.a}
            onClick={() => questionCompleteHandler("a")}
          >
            A.短期活動
          </p>
          <p
            className={selected.b}
            onClick={() => questionCompleteHandler("b")}
          >
            B.公司品牌
          </p>
          <p
            className={selected.c}
            onClick={() => questionCompleteHandler("c")}
          >
            C.產品推廣
          </p>
          <p
            className={selected.d}
            onClick={() => questionCompleteHandler("d")}
          >
            D.個人工作室
          </p>
          <div className="question1-answer-blank" />
        </div>
        <div className="bottom-shadow"></div>
      </div>
    );
}


export default Question1