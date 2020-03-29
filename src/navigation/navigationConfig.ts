import { Easing, Animated } from "react-native";
import { TransitionSpec } from "react-navigation-stack/lib/typescript/src/vendor/types";

//Transition animation.
//TRY ME!
/*const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});*/
export const fade = ({ current, next }: any) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0,
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });
  return {
    cardStyle: {
      opacity: opacity,
      backgroundColor: "black",
    },
  };
};
export const openConfig: TransitionSpec = {
  animation: "timing",
  config: {
    duration: 600,
    easing: Easing.exp,
  },
};
//TODO: What actually is the closing animation? Does it actually fade out? I suspect not.
export const closeConfig: TransitionSpec = {
  animation: "timing",
  config: {
    duration: 600,
    easing: Easing.cubic,
  },
};
