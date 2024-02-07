
import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
const Code = ({ language, code }) => {
  const codeRef = useRef(null);
  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, [codeRef]);
  return (
    <pre>
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};
export default Code;