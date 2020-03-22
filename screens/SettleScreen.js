import React from "react";
import { Text, View, BackHandler } from "react-native";
import styles from "../styles";

/*
 * Settle screen. Delay before timer begins.
 */
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    setTimeout(() => {
      this.props.navigation.navigate("Timer", {
        duration: parseInt(this.props.navigation.getParam("duration", 10))
      });
    }, this.props.navigation.getParam("delay", 3) * 1000);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    return true; // Do nothing when back button is pressed
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Settle</Text>
      </View>
    );
  }
}
