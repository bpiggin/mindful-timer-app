import AsyncStorage from '@react-native-community/async-storage';

const getStreakData = async () => {
  const lastDay = await AsyncStorage.getItem('@last_Day');
  return {
    count: Number(await AsyncStorage.getItem('@streak_Count')),
    lastDay: lastDay ? new Date(String(lastDay)) : null,
  };
};

const updateStreakData = async (count: number, currentDay: Date) => {
  try {
    await AsyncStorage.setItem('@streak_Count', String(count));
    await AsyncStorage.setItem('@last_Day', currentDay.toISOString());
  } catch (e) {
    console.log(e);
  }
};

export const getDayStreak = async () => {
  let { count, lastDay } = await getStreakData();
  const currentDay = new Date();

  currentDay.setHours(0);
  currentDay.setMinutes(0);
  currentDay.setSeconds(0, 0);

  const yesterday = new Date(currentDay.getTime());
  yesterday.setDate(yesterday.getDate() - 1);

  // Compare the stored "last day meditated" values with the
  // current day values to determine the streak.
  if (
    lastDay == null ||
    count == null ||
    lastDay.getTime() < yesterday.getTime()
  ) {
    // There is no last day stored or the last day is more
    // than one day ago.
    // In either case, reset the streak to 1 and
    // the "last day meditated" to today.
    count = 1;
    updateStreakData(count, currentDay);
  } else if (count != null && lastDay.getTime() == yesterday.getTime()) {
    // The last day meditated was yesterday, so the user's
    // streak continues!
    count++;
    updateStreakData(count, currentDay);
  } else if (lastDay.getTime() == currentDay.getTime()) {
    // The user has already meditated today, so do nothing.
    // (The stored count is the correct value to return)
  } else if (lastDay.getTime() > currentDay.getTime()) {
    // Error, the date must be in the future. Quietly fail
    // for now...
    count = 0;
    updateStreakData(count, currentDay);
  } else {
    // Error, invalid branch. We shouldn't be in here.
    // Set count to 0 to indicate something has gone horribly wrong.
    count = 0;
    updateStreakData(count, currentDay);
  }
  return count;
};
