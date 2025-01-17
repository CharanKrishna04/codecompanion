import React, { Component, Fragment } from "react";
import CodeOptimizerFormUI from "./components/CodeOptimizer";
import CodeDebuggerFormUI from "./components/CodeDebugger";
import CodeReviewerFormUI from "./components/CodeReviewer";
import CommentGeneratorFormUI from "./components/CommentGenerator";
import HomePage from "./components/Home";



class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <CodeOptimizerFormUI/>
        <CodeDebuggerFormUI/>
        <CodeReviewerFormUI/>
        <CommentGeneratorFormUI/> */}
        <HomePage/>
      </Fragment>
    );
  }
}

export default App;
