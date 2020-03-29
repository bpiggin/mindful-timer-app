import React from "react";
import { Animated } from "react-native";
import styles from "../styles";
import Timer from "../components/Timer";

/*
 * Timer screen. Displays a countdown timer.
 */
export default class TimerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: this.props.navigation.getParam("duration", 10) * 60,
      opacity: new Animated.Value(1),
      hidden: false
    };
  }

  screenPressed() {
    if (this.state.hidden) {
      Animated.timing(this.state.opacity, { toValue: 1 }).start();
    } else {
      Animated.timing(this.state.opacity, { toValue: 0 }).start();
    }
    this.setState({ hidden: !this.state.hidden });
    return true;
  }

  render() {
    return (
      <Animated.View
        style={styles.container}
        opacity={this.state.opacity}
        onStartShouldSetResponder={() => this.screenPressed()}
      >
        <Timer
          duration={this.state.duration}
          navigation={this.props.navigation}
        />
      </Animated.View>
    );
  }
}
