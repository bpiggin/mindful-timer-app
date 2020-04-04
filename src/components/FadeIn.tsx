import React, { useState, useEffect } from "react";
import { StyleSheet, Animated, Easing } from "react-native";

const style = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    zIndex: 1,
    elevation: 1,
  },
});

const FadeIn = () => {
  const [opacity] = useState(new Animated.Value(1));
  useEffect(
    () =>
      Animated.timing(opacity, {
        toValue: 0,
        easing: Easing.exp,
        duration: 1300,
      }).start(),
    [],
  );

  return (
    <Animated.View
      pointerEvents="none"
      style={[style.background, { opacity: opacity }]}></Animated.View>
  );
};
export default FadeIn;
