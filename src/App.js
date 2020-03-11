import React from "react";
import moment from "moment";
import "moment/locale/nb";
import Countdown from "react-countdown";

import "./App.css";

moment.locale("nb");

const CLOSING = new Date(2020, 2, 13, 16, 0, 0);
const OPENING = new Date(2020, 3, 14, 8, 0, 0);

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
  return (
    <>
      <main className="main">
        <h1>Er lesesalen åpen?</h1>
        {moment(new Date()).isBefore(CLOSING) && (
          <Countdown date={CLOSING} renderer={IsItClosed} />
        )}
        {moment(new Date()).isBetween(CLOSING, OPENING) && (
          <Countdown date={OPENING} renderer={AreWeWaiting} />
        )}
        {moment(new Date()).isAfter(OPENING) && <h2>JA :D</h2>}
      </main>
      <footer>
        Laget med 😭 av <a href="https://www.eons.io">Sondre Nilsen</a>
      </footer>
    </>
  );
}

export default App;
