import { useContext } from "react";
import { MyAppContext } from "./App"

// eslint-disable-next-line react/prop-types
const Grandchild = () => {
    const myFunc = useContext(MyAppContext);
  return (
    <div
    style={{
        padding:"2rem",
        backgroundColor:"#FFD9B7"
    }}>
      <h1>Grandchild</h1>
      <button onClick={myFunc}>Call my func</button>
    </div>
  );
};

export default Grandchild;
