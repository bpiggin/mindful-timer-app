import React, { useState } from 'react';
import { Animated, Easing } from 'react-native';
import styles from '../../styles';
import Timer from '../components/Timer';
import FadeIn from '../components/FadeIn';
import { useKeepAwake } from 'expo-keep-awake';
import { NavigationInjectedProps } from 'react-navigation';

const TimerScreen = ({ navigation }: NavigationInjectedProps): JSX.Element => {
  const duration = navigation.getParam('duration', 10) * 60;
  const [opacity] = useState(new Animated.Value(1));
  const [screenHidden, setScreenHidden] = useState(false);

  useKeepAwake();

  const screenPressed = () => {
    if (screenHidden) {
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
    setScreenHidden(!screenHidden);
    return true;
  };
  return (
    <Animated.View
      style={styles.container}
      opacity={opacity}
      onStartShouldSetResponder={screenPressed}
    >
      <FadeIn />
      <Timer
        duration={duration}
        navigation={navigation}
        screenHidden={screenHidden}
      />
    </Animated.View>
  );
};
export default TimerScreen;
