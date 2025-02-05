import { useRef } from "react";
import { EmailEditor } from "./components/email-editor";

function App() {
  const editorRef =
    useRef<React.ComponentProps<typeof EmailEditor>["editor"]["current"]>(null);

  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <EmailEditor editor={editorRef} />

      <button
        onClick={() => {
          console.log(editorRef.current?.getContent());
        }}
      >
        获取 HTML
      </button>
    </div>
  );
}

export default App;
