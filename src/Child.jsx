import Grandchild from "./Grandchild";

// eslint-disable-next-line react/prop-types
const Child = () => {
  return (
    <div
    style={{
        padding:"2rem",
        backgroundColor:"#7EAA92"
    }}>
      <h1>Child</h1>
      <Grandchild />
    </div>
  );
};

export default Child;
