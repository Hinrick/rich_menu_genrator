import React from 'react'

import './styles.scss'


const Background = props => {
    const { backgroundStatus, backgroundType } = props;


    return (
      <div className="loading-background">
        <div>
          <div className={`${backgroundType}-left-1${backgroundStatus}`}></div>
          <div className={`${backgroundType}-left-2${backgroundStatus}`}>
            <div className={`${backgroundType}-left-2-inverse-circle`} />
            <div className={`${backgroundType}-left-2-circle`} />
          </div>
          <div className={`${backgroundType}-left-3${backgroundStatus}`}>
            <div className={`${backgroundType}-left-3-inverse-circle`} />
            <div className={`${backgroundType}-left-3-circle`} />
          </div>
          <div className={`${backgroundType}-left-4${backgroundStatus}`}>
            <div className={`${backgroundType}-left-4-inverse-circle`} />
            <div className={`${backgroundType}-left-4-circle`} />
          </div>
          <div className={`${backgroundType}-left-5${backgroundStatus}`}></div>
          <div className={`${backgroundType}-left-6${backgroundStatus}`}></div>
          <div className={`${backgroundType}-left-7${backgroundStatus}`}></div>
        </div>
        {props.children}
        <div>
          <div className={`${backgroundType}-right-1${backgroundStatus}`}>
            <div className={`${backgroundType}-right-1-inverse-circle`} />
            <div className={`${backgroundType}-right-1-circle`} />
          </div>
          <div className={`${backgroundType}-right-2${backgroundStatus}`}>
            <div className={`${backgroundType}-right-2-inverse-circle`} />
            <div className={`${backgroundType}-right-2-circle`} />
          </div>
          <div className={`${backgroundType}-right-3${backgroundStatus}`}>
            <div className={`${backgroundType}-right-3-inverse-circle`} />
            <div className={`${backgroundType}-right-3-circle`} />
          </div>
          <div className={`${backgroundType}-right-4${backgroundStatus}`}></div>
          <div className={`${backgroundType}-right-5${backgroundStatus}`}>
            <div className={`${backgroundType}-right-5-inverse-circle`} />
            <div className={`${backgroundType}-right-5-circle`} />
          </div>
          <div className={`${backgroundType}-right-6${backgroundStatus}`}>
            <div className={`${backgroundType}-right-6-inverse-circle`} />
            <div className={`${backgroundType}-right-6-circle`} />
          </div>
          <div className={`${backgroundType}-right-7${backgroundStatus}`}></div>
        </div>
      </div>
    );

}

export default Background