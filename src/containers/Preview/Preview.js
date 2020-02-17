import React from 'react'

import Background from '../../components/Background/Background'

import './styles.scss'

const Preview = props => {





    return (
      <div className="preview">
        <Background backgroundType={"preview"} backgroundStatus={""}>
          <div>這是一個 preview page</div>
        </Background>
      </div>
    );
}


export default Preview