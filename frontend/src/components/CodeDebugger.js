import React, { useState } from 'react';
import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "xcsrftoken";

const CodeDebuggerFormUI = () => {
  const [inputCode, setInputCode] = useState('');
  const [codeCompletion, setCodeCompletion] = useState('');

  const handleSubmit = async (e) => {
    console.log("check");
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/codeDebugger/', {
        input_code: inputCode,
      });
      const { code_completion } = response.data;
      setCodeCompletion(code_completion);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={inputCode} onChange={(e) => setInputCode(e.target.value)} />
      <button onClick={handleSubmit}>Debug Code</button>
      <div>{codeCompletion}</div>
    </div>
  );
};

export default CodeDebuggerFormUI;