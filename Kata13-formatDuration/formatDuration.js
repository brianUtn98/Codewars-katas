function normalize(word, value) {
  return value > 1 ? word + "s" : word;
}

function phrase(word, value) {
  return `${value} ${normalize(word, value)}`;
}

function formatDuration(seconds) {
  if (!seconds) {
    return "now";
  }

  let fixedSeconds = seconds % 60;
  let minutes = Math.floor(seconds / 60);
  let fixedMinutes = minutes % 60;

  let hours = Math.floor(minutes / 60);
  let fixedHours = hours % 24;

  let days = Math.floor(hours / 24);
  let fixedDays = days % 365;

  let fixedYears = Math.floor(days / 365);

  const yearPhrase = fixedYears > 0 ? `${phrase("year", fixedYears)}` : null;
  const dayPhrase = fixedDays > 0 ? `${phrase("day", fixedDays)}` : null;
  const hourPhrase = fixedHours > 0 ? `${phrase("hour", fixedHours)}` : null;
  const minutePhrase = fixedMinutes > 0
    ? `${phrase("minute", fixedMinutes)}`
    : null;
  const secondPhrase = fixedSeconds
    ? `${phrase("second", fixedSeconds)}`
    : null;

  const dateArray = [
    yearPhrase,
    dayPhrase,
    hourPhrase,
    minutePhrase,
    secondPhrase,
  ];

  const fixedDate = dateArray.filter((elem) => elem != null);

  let result = "";
  result += fixedDate[0];

  for (let i = 1; i < fixedDate.length; i++) {
    if (i == fixedDate.length - 1) {
      result += ` and ${fixedDate[i]}`;
    } else {
      result += `, ${fixedDate[i]}`;
    }
  }

  return result;
}

module.exports = formatDuration;
