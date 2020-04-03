import React, { useState } from "react";
import { Animated } from "react-native";
import styles from "../../styles";
import Timer from "../components/Timer";

/*
 * Timer screen. Displays a countdown timer.
 */
const TimerScreen = ({ navigation }: any) => {
  const duration = navigation.getParam("duration", 10) * 60;
  const opacity = new Animated.Value(1);
  const [hidden, setHidden] = useState(false);

  const screenPressed = () => {
    if (hidden) {
      Animated.timing(opacity, { toValue: 1 }).start();
    } else {
      Animated.timing(opacity, { toValue: 0 }).start();
    }
    setHidden(!hidden);
    return true;
  };
  return (
    <Animated.View
      style={styles.container}
      opacity={opacity}
      onStartShouldSetResponder={screenPressed}>
      <Timer duration={duration} navigation={navigation} />
    </Animated.View>
  );
};
export default TimerScreen;
