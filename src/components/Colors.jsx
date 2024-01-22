const Colors = ({ color, setColor }) => {
  return (
    <div style={{ color }}>
      <button onClick={() => setColor("violet")}>
        Change Color from Colors
      </button>
    </div>
  );
};

export default Colors;
