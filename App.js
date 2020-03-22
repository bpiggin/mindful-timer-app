import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Easing, Animated } from "react-native";
import * as Font from "expo-font";
import { Transition } from "react-native-reanimated";

//Screens
import HomeScreen from "./screens/HomeScreen.js";
import SettleScreen from "./screens/SettleScreen.js";
import TimerScreen from "./screens/TimerScreen.js";
import CompletionScreen from "./screens/CompletionScreen.js";

/*
 * Navigation.
 */
//Transition animation.
const fade /*({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  }
})*/ = ({
  current,
  next
}) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0]
  });
  return {
    cardStyle: {
      opacity: opacity,
      backgroundColor: "black"
    }
  };
};
const openConfig = {
  animation: "timing",
  config: {
    duration: 600,
    easing: Easing.exp
  }
};
//TODO: What actually is the closing animation? Does it actually fade out? I suspect not.
const closeConfig = {
  animation: "timing",
  config: {
    duration: 600,
    easing: Easing.cubic
  }
};
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Settle: SettleScreen,
    Timer: TimerScreen,
    Completion: CompletionScreen
  },
  {
    headerMode: "none",
    defaultNavigationOptions: {
      cardStyleInterpolator: fade,
      transitionSpec: {
        open: openConfig,
        close: closeConfig
      },
      cardStyle: {
        backgroundColor: "#000000",
        opacity: 1
      }
    }
  }
);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  //Load fonts.
  componentDidMount() {
    Font.loadAsync({
      "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf")
    });
  }
  render() {
    return <AppContainer />;
  }
}
