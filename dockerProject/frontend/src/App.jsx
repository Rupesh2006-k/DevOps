import React, { useEffect, useMemo, useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { MonacoBinding } from "y-monaco";
import * as Y from "yjs";
import { SocketIOProvider } from "y-socket.io";

const App = () => {
  const editorRef = useRef(null);
  const bindingRef = useRef(null);
  const providerRef = useRef(null);

  const [username, setUsername] = useState(() => {
    return new URLSearchParams(window.location.search).get("username") || "";
  });

  const [users, setUsers] = useState([]);
  const [isEditorReady, setIsEditorReady] = useState(false);

  const ydoc = useMemo(() => new Y.Doc(), []);
  const yText = useMemo(() => ydoc.getText("monaco"), [ydoc]);

  const handleMount = (editor) => {
    editorRef.current = editor;
    setIsEditorReady(true);
  };

  const handleJoin = (e) => {
    e.preventDefault();

    const name = e.target.username.value.trim();
    if (!name) return;

    setUsername(name);
    window.history.pushState({}, "", `?username=${encodeURIComponent(name)}`);
  };

  useEffect(() => {
    if (!username || !isEditorReady || !editorRef.current) return;

    // const provider = new SocketIOProvider(
    //   "http://localhost:3000",
    //   "monaco",
    //   ydoc,
    //   {
    //     autoConnect: true,
    //   },
    // );
    const provider = new SocketIOProvider("/", "monaco", ydoc, {
      autoConnect: true,
    });
    providerRef.current = provider;

    provider.awareness.setLocalStateField("user", { username });

    const updateUsers = () => {
      const states = Array.from(provider.awareness.getStates().values());

      setUsers(
        states
          .filter((state) => state?.user?.username)
          .map((state) => state.user),
      );
    };

    updateUsers();
    provider.awareness.on("change", updateUsers);

    const model = editorRef.current.getModel();

    if (model) {
      bindingRef.current = new MonacoBinding(
        yText,
        model,
        new Set([editorRef.current]),
        provider.awareness,
      );
    }

    const handleBeforeUnload = () => {
      provider.awareness.setLocalStateField("user", null);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      provider.awareness.off("change", updateUsers);

      if (bindingRef.current) {
        bindingRef.current.destroy();
        bindingRef.current = null;
      }

      provider.disconnect();
      providerRef.current = null;

      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [username, isEditorReady, ydoc, yText]);

  if (!username) {
    return (
      <main className="h-screen w-full bg-gray-950 flex gap-4 p-4 items-center justify-center">
        <form onSubmit={handleJoin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your username"
            className="p-2 rounded-lg bg-gray-800 text-white outline-none"
            name="username"
          />
          <button
            type="submit"
            className="p-2 rounded-lg bg-amber-50 text-gray-950 font-bold"
          >
            Join
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="h-screen w-full bg-gray-950 flex gap-4 p-4">
      <aside className="h-full w-1/4 bg-amber-50 rounded-lg">
        <h2 className="text-2xl font-bold p-4 border-b border-gray-300">
          Users
        </h2>

        <ul className="p-4">
          {users.map((user, index) => (
            <li key={index} className="p-2 bg-gray-800 text-white rounded mb-2">
              {user.username}
            </li>
          ))}
        </ul>
      </aside>

      <section className="w-3/4 bg-neutral-800 rounded-lg overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          theme="vs-dark"
          onMount={handleMount}
        />
      </section>
    </main>
  );
};

export default App;
