import Child from "./Child";

// eslint-disable-next-line react/prop-types
const MyComponent = () => {
  return (
    <div 
    style={{
        padding:"2rem",
        backgroundColor:"#9ED2BE"
    }}>
      <h1>MyComponent</h1>
      <Child/>
    </div>
  )
}

export default MyComponent;