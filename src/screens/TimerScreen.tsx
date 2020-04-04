import React, { useState } from "react";
import { Animated, Easing } from "react-native";
import styles from "../../styles";
import Timer from "../components/Timer";
import FadeIn from "../components/FadeIn";
import { useKeepAwake } from "expo-keep-awake";

/*
 * Timer screen. Displays a countdown timer.
 */
const TimerScreen = ({ navigation }: any) => {
  const duration = navigation.getParam("duration", 10) * 60;
  const [opacity] = useState(new Animated.Value(1));
  const [hidden, setHidden] = useState(false);

  useKeepAwake();

  const screenPressed = () => {
    if (hidden) {
      Animated.timing(opacity, {
        toValue: 1,
        easing: Easing.cubic,
        duration: 800,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        easing: Easing.out(Easing.cubic),
        duration: 800,
      }).start();
    }
    setHidden(!hidden);
    return true;
  };
  return (
    <Animated.View
      style={styles.container}
      opacity={opacity}
      onStartShouldSetResponder={screenPressed}>
      <FadeIn />
      <Timer duration={duration} navigation={navigation} />
    </Animated.View>
  );
};
export default TimerScreen;
