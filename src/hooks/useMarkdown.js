import { useEffect, useState } from "react";
import { Remarkable } from "remarkable";

const md = new Remarkable({
  html: true,
  linkify: true,
});

function useMarkdownEditor(initialText) {
  const [rawText, setRawText] = useState(() => {
    return localStorage.getItem("markdownText") || initialText;
  });

  const handleChangeRawInputedText = (event) => {
    setRawText(event.target.value);
  };

  const getMarkDownAsHTMLOutput = () => {
    return md.render(rawText);
  };

  useEffect(() => {
    localStorage.setItem("markdownText", rawText);
  }, [rawText]);

  return {
    rawText,
    handleChangeRawInputedText,
    getMarkDownAsHTMLOutput,
  };
}

export default useMarkdownEditor;
