"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function Editor() {
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px;",
        class:
          "focus:outline-none border border-gray-300 bg-white print:border-0 min-h-[1054px] w-[816px] py-10 mx-auto",
      },
    },
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  return (
    <div className="bg-[#f9fbfd] p-4 print:overflow-visible print:bg-white print:p-0">
      <EditorContent editor={editor} />
    </div>
  );
}
