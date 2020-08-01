import moment from 'moment';
import 'moment/locale/nb';
import React from 'react';
import './App.css';

moment.locale('nb');

// const CLOSING = new Date(2020, 2, 13, 16, 0, 0);
// const OPENING = new Date(2020, 5, 15, 8, 0, 0);

// const renderDate = (inputDate) => {
//   const date = moment(inputDate);
//   return date.fromNow();
// };

// const IsItClosed = () => {
//   return (
//     <>
//       <h2>Ja!</h2>
//       <div>
//         <p>Du kan fortsatt hente tingene dine på lesesalen.</p>
//         <p>
//           Men den stenger <strong>{renderDate(CLOSING)}</strong>.
//         </p>
//       </div>
//     </>
//   );
// };

// const AreWeWaiting = () => {
//   return (
//     <>
//       <h2>Nei :(</h2>
//       <p>Den åpner {renderDate(OPENING)}.</p>
//     </>
//   );
// };

const WhoKnows = () => {
  return (
    <>
      <h2>Ingen vet :(</h2>
      <p>Du får smøre deg med tålmodighet...</p>
    </>
  );
};

const Soon = () => {
  return (
    <>
      <h2>Den er stengt for sommeren</h2>
      <p>Men alt tilsier at den skal åpne til semesterstart...</p>
    </>
  );
};

function App() {
  // const [state, setState] = useState("CLOSING");

  // const checkState = () => {
  //   if (moment(new Date()).isBefore(CLOSING)) setState("CLOSING");
  //   if (moment(new Date()).isBetween(CLOSING, OPENING)) setState("BETWEEN");
  //   if (moment(new Date()).isAfter(OPENING)) setState("OPEN");
  // };

  // useEffect(() => {
  //   checkState(setState);
  // }, []);

  // useInterval(() => {
  //   checkState(setState);
  // }, 1000);

  return (
    <>
      <main className="main">
        <h1>Er lesesalen åpen?</h1>
        {/* {state === "CLOSING" && <IsItClosed />} */}
        {/* {state === "BETWEEN" && <AreWeWaiting />} */}
        {/* {state === "OPEN" && <h2>JA :D</h2>} */}
        <Soon />
      </main>
      <footer style={{ marginBottom: '12px' }}>
        Laget med{' '}
        <span role="img" aria-label="Crying emoji">
          😭{' '}
        </span>
        av <a href="https://www.eons.io">Sondre Nilsen</a>
      </footer>
    </>
  );
}

export default App;
