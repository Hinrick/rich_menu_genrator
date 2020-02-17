import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import AnimatedRobot from "../../components/AnimatedRobot/AnimatedRobot";
import * as Actions from "../../store/actions";


import "./styles.scss";


const Question3 = props => {
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
        dispatch(Actions.pageChangeHandler(props, '/question4'));
      }
    }, [count]);
  

    return (
      <div className="question3">
        <AnimatedRobot />
        <div className="question3-question-symbol">
          <div className="question3-question-symbol-1" />
          <div className="question3-question-symbol-2" />
          <div className="question3-question-symbol-3" />
        </div>
        <div className="question3-question">
          <p className="question3-question-title">Q3.</p>
          <p className="question3-question-content">
            目標族群的消費屬性？(擇二)
          </p>
        </div>
        <div className="question3-answer">
          <p
            className={selected.a}
            onClick={() => questionCompleteHandler("a")}
          >
            A.充裕的
          </p>
          <p
            className={selected.b}
            onClick={() => questionCompleteHandler("b")}
          >
            B.無計劃的
          </p>
          <p
            className={selected.c}
            onClick={() => questionCompleteHandler("c")}
          >
            C.拮据的
          </p>
          <p
            className={selected.d}
            onClick={() => questionCompleteHandler("d")}
          >
            D.有規劃的
          </p>
          <div className="question3-answer-blank" />
        </div>
        <div className="bottom-shadow"></div>
      </div>
    );
}


export default Question3