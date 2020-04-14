import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/nb";

import "./App.css";
import useInterval from "./useInterval";

moment.locale("nb");

const CLOSING = new Date(2020, 2, 13, 16, 0, 0);
const OPENING = new Date(2020, 5, 6, 8, 0, 0);

const renderDate = inputDate => {
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

const AreWeWaiting = () => {
  return (
    <>
      <h2>Nei :(</h2>
      <p>Den åpner {renderDate(OPENING)}.</p>
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
    console.log("SPAM :D");
  }, 1000);

  return (
    <>
      <main className="main">
        <h1>Er lesesalen åpen?</h1>
        {state === "CLOSING" && <IsItClosed />}
        {state === "BETWEEN" && <AreWeWaiting />}
        {state === "OPEN" && <h2>JA :D</h2>}
      </main>
      <footer>
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
