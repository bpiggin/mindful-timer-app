import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import styles from "../../../styles";
import  { getDayStreak }  from "./DayStreakUtil";

/*
 * Day streak. Display how many consecutive days the user has
 * meditated for.
 */
const DayStreak = () => {
  const [streak, setStreak] = useState("");

  // Call our function to calculate the day streak.
  // This happens asynchronously. When it has completed, it will
  // update the state on navigation object.
  useEffect(() => {
    getDayStreak().then((count) => {
      setStreak(String(count));})
  }, [])

  return (
    <Text style={styles.titleText}>
      You have meditated for {streak} days in a row
    </Text>
  );
};
export default DayStreak;