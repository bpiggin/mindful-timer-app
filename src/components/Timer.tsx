import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";
import { Feather } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../styles";
import useInterval from "../utilities/hooks/UseInterval";
import { formatTime } from "../utilities/helpers";

interface ITimerProps {
  duration: number;
  navigation: any;
}

const Timer = ({ duration, navigation }: ITimerProps) => {
  const [count, setCount] = useState(duration);
  const [paused, setPaused] = useState(false);
  let playbackInstance: null | Audio.Sound = null;

  //Incrementer
  const incrementTimer = () => {
    if (count === 0) {
      navigation.navigate("Completion", {
        duration: duration,
      });
      playbackInstance?.unloadAsync();
      return;
    }
    setCount(count - 1);
  };

  //Start timer
  useInterval(incrementTimer, paused ? null : 1000);

  //Ring the bell
  useEffect(() => {
    const ringBell = async () => {
      const soundObject = new Audio.Sound();
      try {
        await soundObject.loadAsync(require("../../assets/bell.mp3"));
        await soundObject.playAsync();
      } catch (error) {
        console.error(error);
      }
    };
    ringBell();
  }, []);

  const onPlayPausePressed = () => {
    setPaused(!paused);
  };

  const discardPressed = () => {
    navigation.navigate("Home");
  };

  const finishEarlyPressed = () => {
    navigation.navigate("Completion", {
      duration: duration - count,
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(count)}</Text>
      <View style={styles.horizontalContainer}>
        <TouchableOpacity onPress={discardPressed}>
          {paused ? <Feather name="trash" color="white" size={36} /> : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlayPausePressed}>
          {paused ? (
            <Feather name="play" color="white" size={36} />
          ) : (
            <Feather name="pause" color="white" size={36} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={finishEarlyPressed}>
          {paused ? <Feather name="check" color="white" size={36} /> : null}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Timer;
