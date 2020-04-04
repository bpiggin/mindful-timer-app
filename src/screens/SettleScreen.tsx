import React, { useEffect } from "react";
import { Text, View, BackHandler } from "react-native";
import styles from "../../styles";

const TEN_SECONDS = 10000;

/*
 * Settle screen. Delay before timer begins.
 */
const SettleScreen = ({ navigation }: any) => {
  const handleBackPress = () => {
    return true; // Do nothing when back button is pressed
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    setTimeout(() => {
      navigation.navigate("Timer", {
        duration: parseInt(navigation.getParam("duration", 10)),
      });
    }, TEN_SECONDS);
    return BackHandler.removeEventListener(
      "hardwareBackPress",
      handleBackPress,
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Settle</Text>
    </View>
  );
};
export default SettleScreen;
