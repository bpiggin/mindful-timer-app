import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//Screens
import HomeScreen from "../screens/HomeScreen.js";
import SettleScreen from "../screens/SettleScreen.js";
import TimerScreen from "../screens/TimerScreen.js";
import CompletionScreen from "../screens/CompletionScreen.js";
import { fade, openConfig, closeConfig } from "./navigationConfig";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Settle: SettleScreen,
    Timer: TimerScreen,
    Completion: CompletionScreen,
  },
  {
    headerMode: "none",
    defaultNavigationOptions: {
      cardStyleInterpolator: fade,
      transitionSpec: {
        open: openConfig,
        close: closeConfig,
      },
      cardStyle: {
        backgroundColor: "#000000",
        opacity: 1,
      },
    },
  },
);
export default AppContainer = createAppContainer(RootStack);
