import React,{useState} from "react";
import Editor from "./MarkdownEditor/Editor";

function MarkdownEditor() {

  const [isLoggedin, setIsLoggedin] = useState(false);

  const logout = () => {
    localStorage.removeItem("token-info");
    setIsLoggedin(false);
    window.location.href = "/";
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
      <Editor />
    </div>
  );
}

export default MarkdownEditor;
