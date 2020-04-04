import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//Screens
import HomeScreen from "../screens/HomeScreen";
import SettleScreen from "../screens/SettleScreen";
import TimerScreen from "../screens/TimerScreen";
import CompletionScreen from "../screens/CompletionScreen";
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
        backgroundColor: "black",
        opacity: 1,
      },
    },
  },
);
export default createAppContainer(RootStack);
