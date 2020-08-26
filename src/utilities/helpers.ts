import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment";

const SECONDS_IN_AN_HOUR = 3600;

interface Streak {
  count: number;
  timestamp: string;
}

export const formatTime = (seconds: number) => {
  let hoursFormatted = "";
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
  let secondsFormatted = seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60);
  return hoursFormatted + minutesFormatted + secondsFormatted;
};

const setStreak = async (count: number) => {
  await AsyncStorage.setItem(
    "@streak",
    JSON.stringify({ count, timestamp: moment().toISOString() }),
  ).catch((e) => console.error(e));
  return count;
};

export const updateStreak = async (): Promise<number> => {
  const streakData = await AsyncStorage.getItem("@streak").catch((e) =>
    console.error(e),
  );
  if (streakData) {
    const { count, timestamp } = JSON.parse(streakData) as Streak;
    const lastMeditated = moment(timestamp);
    const today = moment();
    if (today.diff(lastMeditated, "days") === 1) {
      return setStreak(count + 1);
    } else if (today.isSame(lastMeditated, "day")) {
      return setStreak(count);
    }
  }
  return setStreak(1);
};
