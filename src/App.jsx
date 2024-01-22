import { useState } from "react";
import Colors from "./components/Colors";

const App = () => {
  const [color, setColor] = useState("pink");
  return (
    <div>
      <button onClick={() => setColor("pink")}>Change color from app</button>
      <Colors color={color} setColor={setColor} />
    </div>
  );
};

export default App;
// multi-stage mutation
