import React, { useState, useRef, useImperativeHandle, forwardRef } from "react";

// With this hook.

const CustomInputWithHook = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => (inputRef.current.value = ""),
  }));

  return <input ref={inputRef} />;
});

export function ParentWithHook() {
  const inputApiRef = useRef();

  return (
    <div>
        <h1>
            Using useImperativeHandle to expose custom methods from a child component
        </h1>
      <CustomInputWithHook ref={inputApiRef} />
      <button onClick={() => inputApiRef.current.focus()}>Focus</button>
      <button onClick={() => inputApiRef.current.value = ""}>Clear</button>
    </div>
  );
}


// Using useState to manage input text

const CustomInput = forwardRef(({ value, onChange }, ref) => {
  return <input ref={ref} value={value} onChange={onChange} />;
});

export default function Parent() {
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const handleFocus = () => inputRef.current?.focus();
  const handleClear = () => setText("");

  return (
    <div>
        <h1>
            Using useRef to manage focus and clear an input element
        </h1>
      <CustomInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}


// why use ImperativeHandle? - It allows us to expose specific methods from a child component to the parent, while keeping the internal implementation details hidden. This can be useful for encapsulating complex logic or providing a cleaner API for the parent component to interact with the child.
// To expose a controlled set of imperative methods from a child component while hiding its internal DOM structure.