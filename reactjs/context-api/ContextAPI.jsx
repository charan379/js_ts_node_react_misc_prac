/**
 * Context API is a in build feature in React.JS that allows for sharing data
 * between components without passing props down manually (prop-drilling).
 *
 * It provides a way to create global-like variables that can be accessed by any component
 * which is a child of the context provider.
 *
 */
// 1. Creating a Context ->
// You create a context using the createContext() function.
// This returns a Context object with a Provider and a Consumer component.
import { createContext, useState, useContext } from "react";
const MyContext = createContext(); // Creating a context
// 2. Providing Data -> Context Provider
// The Provider component is used to wrap the part of your component
// tree where you want the context data to be available.
// It accepts a value prop, which is the data you want to share.
// This value is then passed down to all the components that are children of the Provider.
const [contextState, setContextState] = useState(0);
<MyContext.Provider value={{ contextState, setContextState }}>
  {/* Child components where the value must be provided */}
</MyContext.Provider>;
// 3. Consuming Data -> Context Consumer || useContext Hook.
// useContext Hook (Recommended for functional components):
// This hook allows functional components to access the context value directly.
const data = useContext(MyContext);
data.contextState; // Accessing the context data
data.setContextState((prev) => prev + 1); // Accessing the context data
// Context.Consumer
// (For class components or older patterns): This component takes a function as a child, where the function argument is the current context value.
<MyContext.Consumer>
  {(data) => <div>{data.contextState}</div>}
</MyContext.Consumer>;

// If context values change frequently,
// it can lead to re-renders of all consuming components,
// potentially impacting performance.
// It's often best suited for data that doesn't change very often.
