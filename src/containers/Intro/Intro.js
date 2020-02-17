import React from 'react'
import { useDispatch } from 'react-redux'

import IntroBackground from '../../components/IntroBackground/IntroBackground'
import * as Actions from '../../store/actions'

import './styles.scss'

const Intro = props => {
      const dispatch = useDispatch();

      const questionCompleteHandler = (props, type) => {
        dispatch(Actions.pageChangeHandler(props, type));
      };


    return (
      <div className="intro">
        <IntroBackground>
          <div className="intro-content">
            <h2 className="intro-content-title"> 服務介紹</h2>
            <div className="intro-content-description">
              <p>一、內容摘要</p>
              <p>
                本服務人工智能創新行銷素材設計系統開發完成後，除可節省業主與設計公司討論溝通之時間成本之外，由
                AI
                根據業主喜好挑選合成產生設計物，也可大幅降低設計公司人力成本，提升營運績效。
              </p>
              <p>二、服務目的</p>
              <p>
                為解決業主與設計公司所面臨之問題，諾米創意設計透過人工智慧與機器學習，
                建構創新行銷素材設計系統，產出 LINE
                官方帳號圖文選單設計檔。不僅可大幅降低業主與設計公司溝通成本，也可讓更多企業受益。
              </p>
              <p>三、產出與計費方法</p>
              <p>
                透過人工智慧與機器學習，建構創新行銷素材設計系統，產出 LINE
                官方帳號圖文選單，每張新台幣199元透過線上第三方支付收款。
              </p>
            </div>
            <div className="intro-content-footer">
              <p>Powered by Nokimi Design ©2020</p>
              <p
                className="back-to-home"
                onClick={() => questionCompleteHandler(props, "/home")}
              >
                回首頁
              </p>
            </div>
          </div>
        </IntroBackground>
      </div>
    );
}


export default Intro