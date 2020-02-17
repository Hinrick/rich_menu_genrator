import React from 'react'

import Background from '../../components/Background/Background'

import './styles.scss'

const Complete = props => {



    return (
      <div className="complete">
        <Background 
            backgroundType={"complete"} 
            backgroundStatus={""}>
          <div>這是一個完成頁面</div>
        </Background>
      </div>
    );
}


export default Complete