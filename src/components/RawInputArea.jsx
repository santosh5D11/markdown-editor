import { useContext } from "react";
import MarkdownContext from "../context/MarkdownContext";

function RawInputArea() {
  const { rawText, handleChangeRawInputedText } = useContext(MarkdownContext);

  return (
    <div className="editor-container">
      <h2>Enter Markdown</h2>

      <textarea
        value={rawText}
        onChange={handleChangeRawInputedText}
        placeholder="Write your markdown here..."
      />
    </div>
  );
}

export default RawInputArea;
