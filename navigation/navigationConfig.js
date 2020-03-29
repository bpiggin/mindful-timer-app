import { Easing, Animated } from "react-native";

//Transition animation.
export const fade /*({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  }
})*/ = ({
  current,
  next,
}) => {
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
export const openConfig = {
  animation: "timing",
  config: {
    duration: 600,
    easing: Easing.exp,
  },
};
//TODO: What actually is the closing animation? Does it actually fade out? I suspect not.
export const closeConfig = {
  animation: "timing",
  config: {
    duration: 600,
    easing: Easing.cubic,
  },
};
