import RawInputArea from "./components/RawInputArea";
import MarkdownSanitized from "./components/MarkdownSanitized";
import MarkdownContext from "./context/MarkdownContext";
import useMarkdownEditor from "./hooks/useMarkdown";

function App() {
  const markdownEditor = useMarkdownEditor(
    "# Hi! Welcome To MarkDown Editor Tool\n\n" +
      "Hello!, **Everyone** from **Team Crio.D**\n\n" +
      "### Very Helpful Project",
  );

  return (
    <MarkdownContext.Provider value={markdownEditor}>
      <div className="app">
        <RawInputArea />
        <MarkdownSanitized />
      </div>
    </MarkdownContext.Provider>
  );
}

export default App;
