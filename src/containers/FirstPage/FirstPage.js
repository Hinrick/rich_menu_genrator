import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Background from '../../components/Background/Background'
import * as Actions from '../../store/actions'

import mobileHome from "../../assets/images/mobile-home.svg"
import './styles.scss'


const FirstPage = props => {
    const dispatch = useDispatch()
    const [ status, setStatus ] = useState("")

    useEffect(()=>{
      setTimeout(()=>{
        setStatus("-entry");

      }, 300)

      // setTimeout(() => {
      //   setStatus("-entry-finished");
      // }, 2000);
    },[])






    return (
      <div className="first-page">
        <Background backgroundType={"first-page"} backgroundStatus={status}>
          <div className="first-page-container">
            <div className="first-page-content">
              <div>
                <h1>立即製作</h1>
                <h1>LINE 圖文選單</h1>
              </div>
              <div
                className="first-page-arrow"
                onClick={() => {
                  dispatch(Actions.pageChangeHandler(props, "/question1"));
                }}
              >
                <i className="material-icons">arrow_forward</i>
              </div>
            </div>
            <div className="info-container">
              <p>Powered by Nokimi Design ©2020</p>
              <p
                className="info-container-with-link"
                onClick={() => {
                  dispatch(Actions.pageChangeHandler(props, "/intro"));
                }}
              >
                服務介紹
              </p>
              <p className="info-container-with-link">訂單查詢</p>
            </div>
            <div className="first-page-blue-square" />
            <div className="first-page-mobile">
              <img src={mobileHome} alt="mobile-home" />
            </div>
          </div>
          {/* <h1 >第一頁</h1> */}
        </Background>
      </div>
    );

}


export default FirstPage