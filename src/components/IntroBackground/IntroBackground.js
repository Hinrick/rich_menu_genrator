import React from 'react'

import './styles.scss'

const IntroBackground = props => {

    return (
      <div className="intro-background">
        <div>{props.children}</div>
        <div className="background-content">
          <div className="background-content-1">
            <div className="background-content-1-1" />
          </div>
          <div className="background-content-2">
            <div className="background-content-2-1" />
          </div>
          <div className="background-content-3">
            <div className="background-content-3-1" />
            <div className="background-content-3-2" />
            <div className="background-content-3-3" />
            <div className="background-content-3-4" />
          </div>
          <div className="background-content-4">
            <div className="background-content-4-1" />
            <div className="background-content-4-2" />
            <div className="background-content-4-3" />
            <div className="background-content-4-4" />
          </div>
          <div className="background-content-5">
            <div className="background-content-5-1" />
            <div className="background-content-5-2" />
            <div className="background-content-5-3" />
          </div>
          <div className="background-content-6">
            <div className="background-content-6-1" />
            <div className="background-content-6-2" />
            <div className="background-content-6-3" />
            <div className="background-content-6-4" />
          </div>
          <div className="background-content-7">
            <div className="background-content-7-1" />
            <div className="background-content-7-2" />
            <div className="background-content-7-3" />
          </div>
        </div>
      </div>
    );

}


export default IntroBackground