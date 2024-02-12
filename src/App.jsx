import MyComponent from "./MyComponent";
import { createContext } from "react";

// for use context there are two steps
// Step 1: create Context and wrap the application with the context using context provider
// The passed value in the context provider could be assessed anywhere inside the child components

// Step2: Consume the context
// useContext is used

export const MyAppContext = createContext();// we create the context outside the component

const App = () => {
  function myFunc() {
    console.log("hello from myFunc");
  }
  return (
    <MyAppContext.Provider value={myFunc}>
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#C8E4B2",
          height: "100vh",
        }}
      >
        <h1>App</h1>
        <MyComponent/>
      </div>
    </MyAppContext.Provider>
  );
};

export default App;
