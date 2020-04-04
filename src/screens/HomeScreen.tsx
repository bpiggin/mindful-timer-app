import React from "react";
import { View } from "react-native";
import styles from "../../styles";
import DurationEntry from "../components/DurationEntry";

/*
 * Main screen of the app. Enter a time and press begin.
 */
const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <DurationEntry navigation={navigation} />
    </View>
  );
};
export default HomeScreen;
