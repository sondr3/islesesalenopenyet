import moment from "moment";
import "moment/locale/nb";
import React, { useEffect, useState } from "react";
import useInterval from "./useInterval";
import "./App.css";

moment.locale("nb");

const CLOSING = new Date(2020, 10, 23, 0, 0, 0);
const OPENING = new Date(2020, 11, 6, 8, 0, 0);

const renderDate = (inputDate) => {
  const date = moment(inputDate);
  return date.fromNow();
};

const IsItClosed = () => {
  return (
    <>
      <h2>Ja!</h2>
      <div>
        <p>Du kan fortsatt hente tingene dine på lesesalen.</p>
        <p>
          Men den stenger <strong>{renderDate(CLOSING)}</strong>.
        </p>
      </div>
    </>
  );
};

const OpeningSoon = () => {
  return (
    <>
      <h2>Nei...</h2>
      <p>Den åpner kanskje {renderDate(OPENING)} med redusert kapasitet.</p>
    </>
  );
};

const Open = () => {
  return (
    <>
      <h2>Ja! 🎉</h2>
    </>
  );
};

function App() {
  const [state, setState] = useState("CLOSING");

  const checkState = () => {
    if (moment(new Date()).isBefore(CLOSING)) setState("CLOSING");
    if (moment(new Date()).isBetween(CLOSING, OPENING)) setState("BETWEEN");
    if (moment(new Date()).isAfter(OPENING)) setState("OPEN");
  };

  useEffect(() => {
    checkState(setState);
  }, []);

  useInterval(() => {
    checkState(setState);
  }, 1000);

  return (
    <>
      <main className="main">
        <h1>Er lesesalen åpen?</h1>
        {state === "CLOSING" && <IsItClosed />}
        {state === "BETWEEN" && <OpeningSoon />}
        {state === "OPEN" && <Open />}
      </main>
      <footer style={{ marginBottom: "12px" }}>
        Laget med{" "}
        <span role="img" aria-label="Crying emoji">
          😭{" "}
        </span>
        av <a href="https://www.eons.io">Sondre Nilsen</a>
      </footer>
    </>
  );
}

export default App;
