"use client";

import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import { TableKit } from "@tiptap/extension-table";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function Editor() {
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: "padding-left: 0.5in; padding-right: 0.5in;",
        class:
          "focus:outline-none border border-gray-300 bg-white print:border-0 min-h-[297mm] w-[210mm] py-[0.5in] mx-auto tiptap",
      },
    },
    extensions: [
      StarterKit,
      Image,
      ImageResize,
      TaskList,
      TaskItem.configure({ nested: true }),
      TableKit.configure({
        table: {
          resizable: true,
        },
      }),
    ],
    content: `
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
      `,
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  return (
    <div className="p-4 print:overflow-visible print:bg-white print:p-0">
      <EditorContent editor={editor} />
    </div>
  );
}
