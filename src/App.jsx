import { useState } from "react";
import ParentComp from "./components/ParentComp";
import User from "./components/User";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <div>
      <ParentComp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
        <User />
      </ParentComp>
    </div>
  );
};

export default App;
