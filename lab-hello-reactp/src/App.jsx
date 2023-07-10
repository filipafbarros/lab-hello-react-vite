import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Button from "./components/button";
import Section from "./components/section";
import img1 from "./assets/icon1.png";
import img2 from "./assets/icon2.png";
import img3 from "./assets/icon3.png";
import img4 from "./assets/icon4.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <NavBar />
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use <br />
          the most popular frontend library
          <br />
          and become a super Ninja developer.
        </p>
        <Button />
        <Section
          imgUrl={img1}
          title="Declarative"
          text="React makes it painless to create interactive UIs"
        />
        <Section
          imgUrl={img2}
          title="Components"
          text="Build encapsulated components that manage their state"
        />
        <Section
          imgUrl={img3}
          title="Single-Way"
          text="A set of immutable values are passed to the component's"
        />
        <Section
          imgUrl={img4}
          title="JSX"
          text="Statistically-typed, designed to run on modern browsers"
        />
      </div>
    </>
  );
}

export default App;
