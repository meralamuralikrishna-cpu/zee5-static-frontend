const Basic = () => {
  return (
    <div
      style={{
        backgroundColor: "#1e293b",
        color: "white",
        padding: "30px",
        margin: "30px",
        borderRadius: "15px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#38bdf8" }}>Hello React! ⚛️</h1>

      <p style={{ color: "#cbd5e1" }}>
        This is my Basic React component.
      </p>

      <button
        style={{
          backgroundColor: "#3b82f6",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Basic;