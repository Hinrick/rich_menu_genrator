import React from 'react'

import './styles.scss'

const LoadingSmileFace = props => {
    const { eyeClass, dartClass, dartClass2 } = props
    

    return (
      <div className="loading-smile-face">
        <div className="face">
          <div className={`face-left-eye${eyeClass}`} />
          <div className="face-mouse" />
          <div className={`face-left-eye${eyeClass}`} />
        </div>
        <div className="loading">
          <div>
            <p>分析中</p>
          </div>
          <div className="loading-dart">
            <div className="loading-dart1" />
            <div className={`loading-dart2${dartClass}`} />
            <div className={`loading-dart3${dartClass2}`} />
          </div>
        </div>
      </div>
    );
}

export default LoadingSmileFace;