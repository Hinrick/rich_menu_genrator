import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import Loading from '../src/containers/Loading/Loading'
import Home from '../src/containers/FirstPage/FirstPage'
import Question1 from './containers/Question1/Question1'
import Question2 from "./containers/Question2/Question2";
import Question3 from "./containers/Question3/Question3";
import Question4 from "./containers/Question4/Question4";
import Question5 from "./containers/Question5/Question5";
import Question6 from "./containers/Question6/Question6";
import Question7 from "./containers/Question7/Question7";
import Question8 from "./containers/Question8/Question8";
import Question9 from "./containers/Question9/Question9";
import Question10 from "./containers/Question10/Question10";
import Complete from '../src/containers/Complete/Complete'
import Preview from '../src/containers/Preview/Preview'
import Intro from '../src/containers/Intro/Intro'
import answerReducer from '../src/store/reducers'

import './assets/styles/global.scss'


const rootReducer = combineReducers({
  answer: answerReducer
});

const store = createStore(rootReducer);

function App() {
  const pathname = window.location.pathname;

  
  return (
    <Provider store={store}>
      {pathname === "/" && <Redirect to="/home" />}
      <div className="App">
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/question1" exact component={Question1} />
          <Route path="/question2" exact component={Question2} />
          <Route path="/question3" exact component={Question3} />
          <Route path="/question4" exact component={Question4} />
          <Route path="/question5" exact component={Question5} />
          <Route path="/question6" exact component={Question6} />
          <Route path="/question7" exact component={Question7} />
          <Route path="/question8" exact component={Question8} />
          <Route path="/question9" exact component={Question9} />
          <Route path="/question10" exact component={Question10} />
          <Route path="/preview" exact component={Preview} />
          <Route path="/complete" exact component={Complete} />
          <Route path="/intro" exact component={Intro} />
          <Route path="/loading" exact component={Loading} />
        </Switch>
        {/* <First /> */}
        {/* <Loading /> */}
        {/* <Complete /> */}
        {/* <Preview /> */}
        {/* <Intro /> */}
      </div>
    </Provider>
  );
}

export default App;
