import React, { useState } from "react";
import { Text } from "react-native";
import styles from "../../styles";
import AsyncStorage from '@react-native-community/async-storage';

/*
 * Day streak. Display how many consecutive days the user has
 * meditated for.
 */
const DayStreak = ({ navigation }: any) => {
  const [streak, setStreak] = useState("");

  /*
   * Get the current count and the last day the user meditated.
   */
  const getStreakData = async () => {
    // Worry what happens here if no key is found, however testing
    // suggests this is fine.
    try {
      // Update last streak count and last day meditated
      return {
        count: Number(await AsyncStorage.getItem('@streak_Count')),
        lastDay: new Date(Number(await AsyncStorage.getItem('@last_Day_Year')),
                          Number(await AsyncStorage.getItem('@last_Day_Month')),
                          Number(await AsyncStorage.getItem('@last_Day_Date')))
      }
    } catch (e) {
      // Error getting data...
    }
    return {
      // We hit an error, just return null
      count: null,
      lastDay: null
    }
  }

  /*
   * Save the current count and today's date meditated.
   */
  const updateStreakData = async (count: any,
                                  currentDay: Date) => {
    try {
      // Update last streak count and last day meditated
      // Async Storage can only store strings in key value pairs,
      // so convert the count to a string.
      await AsyncStorage.setItem('@streak_Count', String(count));
      await AsyncStorage.setItem('@last_Day_Date', String(currentDay.getDate()));
      await AsyncStorage.setItem('@last_Day_Month', String(currentDay.getMonth()));
      await AsyncStorage.setItem('@last_Day_Year', String(currentDay.getFullYear()));
    } catch (e) {
      // Error saving data, fail quietly...
    }
  }

  /*
   * Calculate the current streak. That is, the number of consecutive
   * days the user has meditated for.
   */
  const getDayStreak = async () => {
    try {
      // Get the stored data.
      var StreakData = await getStreakData();
      var count =  StreakData.count;
      var lastDay = StreakData.lastDay;

      // Get the current date.
      var currentDay = new Date();

      // Hacky, but set the current time, hour and seconds values to 0.
      // This allows us to do easy comparisons with the stored value.
      currentDay.setHours(0);
      currentDay.setMinutes(0);
      currentDay.setSeconds(0, 0);

      // Get yesterday's date
      var yesterday = new Date(currentDay.getTime())
      yesterday.setDate(yesterday.getDate() - 1)

      // Compare the stored "last day meditated" values with the
      // current day values to determine the streak.
      if ((lastDay == null) ||
          (count == null) ||
          (lastDay.getTime() < yesterday.getTime()) )
      {
        // There is no last day stored or the last day is more
        // than one day ago.
        // In either case, reset the streak to 1 and
        // the "last day meditated" to today.
        count = 1;
        updateStreakData(count, currentDay);
      }
      else if ((count != null) &&
                (lastDay.getTime() == yesterday.getTime()))
      {
        // The last day meditated was yesterday, so the user's
        // streak continues!
        count++;
        updateStreakData(count, currentDay);
      }
      else if ((lastDay.getTime() == currentDay.getTime()))
      {
        // The user has already meditated today, so do nothing.
        // (The stored count is the correct value to return)
      }
      else if ((lastDay.getTime() > currentDay.getTime()))
      {
        // Error, the date must be in the future. Quietly fail
        // for now...
      }
      else
      {
        // Error, invalid branch. We shouldn't be in here.
        // Set count to 0 to indicate something has gone horribly wrong.
        count = 0;
      }

      // Return the (potentially updated) count.
      return count;

    } catch (e) {
      // error updating streak data
      // Return 0 to indicate something has gone very wrong.
      return 0;
    }
  }

  // Call our function to calculate the day streak.
  // This happens asynchronously. When it has completed, it will
  // update the state on navigation object.
  getDayStreak().then((count) => {
    setStreak(String(count));})

  return (
    <Text style={styles.titleText}>
      You have meditated for
      {" "}
      {streak}
      {" "}
      days in a row
    </Text>
  );
};
export default DayStreak;