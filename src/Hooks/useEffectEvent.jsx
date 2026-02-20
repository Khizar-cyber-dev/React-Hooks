import React, { useEffect, useEffectEvent, useState } from "react";

export default function UseEffectEventExample() {
  const [roomId, setRoomId] = useState("general");
  const [theme, setTheme] = useState("light");

  // useEffectEvent keeps this callback fresh without forcing the effect to re-run.
  const onConnected = useEffectEvent(() => {
    alert(`Connected to ${roomId} room. Current theme: ${theme}`);
  });

  useEffect(() => {
    // Simulated connection object.
    const connection = {
      connect() {
        setTimeout(() => {
          onConnected();
        }, 500);
      },
      disconnect() {
        // no-op for demo
      },
    };

    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId]); // theme is intentionally excluded

  return (
    <div style={{ padding: "12px", border: "1px solid #ccc", marginTop: "12px" }}>
      <h2>useEffectEvent Example</h2>
      <p>
        Change room to reconnect. Change theme without reconnecting, but callback still reads latest theme.
      </p>

      <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
        <button onClick={() => setRoomId("general")}>General Room</button>
        <button onClick={() => setRoomId("support")}>Support Room</button>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={() => setTheme("light")}>Light Theme</button>
        <button onClick={() => setTheme("dark")}>Dark Theme</button>
      </div>

      <p style={{ marginTop: "8px" }}>
        Room: <strong>{roomId}</strong> | Theme: <strong>{theme}</strong>
      </p>
    </div>
  );
}
