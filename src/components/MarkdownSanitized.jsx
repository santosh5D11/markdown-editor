import { useContext } from "react";
import MarkdownContext from "../context/MarkdownContext";

function MarkdownSanitized() {
  const { getMarkDownAsHTMLOutput } = useContext(MarkdownContext);

  return (
    <div className="preview-container">
      <h2>Markdown Output</h2>

      <div
        dangerouslySetInnerHTML={{
          __html: getMarkDownAsHTMLOutput(),
        }}
      />
    </div>
  );
}

export default MarkdownSanitized;
