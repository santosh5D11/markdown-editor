import { createContext } from "react";

const initialState = {
  rawText: "",
  handleChangeRawInputedText: () => {},
  getMarkDownAsHTMLOutput: () => "",
};

const MarkdownContext = createContext(initialState);

export default MarkdownContext;
