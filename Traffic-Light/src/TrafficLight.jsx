import { useState, useEffect } from "react";
import "./styles.css";

const TrafficLight = () => {
  const [active, setActive] = useState("red");
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => {
        if (prev === "red") return "yellow";
        if (prev == "yellow") return "green";
        return "red";
      })
    }, active === "red" ? 3000 : active === "yellow" ? 1000 : 2000);
    return () => clearTimeout(timer);
  }, [active]);
  return (
    <div>
      <h2 data-testid="title">Traffic Lights</h2>
      <div
        className="traffic-light"
        id="traffic-light"
        data-testid="traffic-light"
      >
        <div
          id="red-light"
          data-testid="red-light"
          className={`circle ${active==="red"? "red-on":""}`}
        ></div>
        <div
          id="yellow-light"
          data-testid="yellow-light"
          className={`circle ${active==="yellow"?"yellow-on":""}`}
        ></div>
        <div
          id="green-light"
          data-testid="green-light"
          className={`circle ${active==="green"?"green-on":""}`}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
