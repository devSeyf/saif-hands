"use client";

import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const count = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write text..."
        className="border p-2 w-full"
      ></textarea>

      <p>Words: {count}</p>
    </div>
  );
}
