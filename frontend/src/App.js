import React, { Component, Fragment } from "react";
import CodeOptimizerFormUI from "./components/CodeOptimizer";
import CodeDebuggerFormUI from "./components/CodeDebugger";
import CodeReviewerFormUI from "./components/CodeReviewer";
import CommentGeneratorFormUI from "./components/CommentGenerator";



class App extends Component {
  render() {
    return (
      <Fragment>
        <CodeOptimizerFormUI/>
        <CodeDebuggerFormUI/>
        <CodeReviewerFormUI/>
        <CommentGeneratorFormUI/>
      </Fragment>
    );
  }
}

export default App;
