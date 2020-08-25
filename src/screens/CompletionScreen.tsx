import React, { useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../styles";
import { Audio } from "expo-av";
import { Feather } from "@expo/vector-icons";
import FadeIn from "../components/FadeIn";

/*
 * Completion screen. Say well done to the user.
 */
const CompletionScreen = ({ navigation }: any) => {
  const streak = navigation.getParam("streak") ?? 1;

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

  const onHomePressed = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <FadeIn />
      <View style={styles.middle}>
        <Text style={styles.titleText}>
          {Math.floor(navigation.getParam("duration", 600) / 60)}{" "}
          {navigation.getParam("duration", 600) / 60 == 1
            ? "minute"
            : "minutes"}{" "}
          completed
        </Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.titleText}>
          {`You have meditated for ${streak} day${
            streak > 1 ? "s" : ""
          } in a row`}
        </Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={onHomePressed}>
          <Feather name="home" color="white" size={45} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CompletionScreen;
