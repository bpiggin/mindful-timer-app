const SECONDS_IN_AN_HOUR = 3600;

export const formatTime = (seconds: number) => {
  let hoursFormatted = '';
  if (seconds > SECONDS_IN_AN_HOUR) {
    hoursFormatted =
      Math.floor(seconds / SECONDS_IN_AN_HOUR) > 9
        ? `${Math.floor(seconds / SECONDS_IN_AN_HOUR)}:`
        : `0${Math.floor(seconds / SECONDS_IN_AN_HOUR)}:`;
    seconds -= Math.floor(seconds / SECONDS_IN_AN_HOUR) * SECONDS_IN_AN_HOUR;
  }
  let minutesFormatted =
    Math.floor(seconds / 60) > 9
      ? `${Math.floor(seconds / 60)}:`
      : `0${Math.floor(seconds / 60)}:`;
  let secondsFormatted = seconds % 60 > 9 ? seconds % 60 : '0' + (seconds % 60);
  return hoursFormatted + minutesFormatted + secondsFormatted;
};
