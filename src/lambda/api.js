import moment from "moment";
import "moment/locale/nb";

moment.locale("nb");

const CLOSING = new Date(2020, 2, 13, 16, 0, 0);
const OPENING = new Date(2020, 3, 14, 8, 0, 0);

const renderDate = inputDate => {
  const date = moment(inputDate);
  return date.fromNow();
};

const checkDate = () => {
  if (moment(new Date()).isBefore(CLOSING))
    return `Lesesalen stenger ${renderDate(CLOSING)}`;
  if (moment(new Date()).isBetween(CLOSING, OPENING))
    return `Lesesalen åpner ${renderDate(OPENING)}`;
  if (moment(new Date()).isAfter(OPENING)) return "Lesesalen er ÅPEN :D";
};

exports.handler = function(event, context, callback) {
  callback(null, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Access-Control-Allow-Origin": "*"
    },
    statusCode: 200,
    body: checkDate()
  });
};
