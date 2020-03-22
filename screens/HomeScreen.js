import React from "react";
import { View } from "react-native";
import styles from "../styles";
import DurationEntry from "../components/DurationEntry";

/*
 * Main screen of the app. Enter a time and press begin.
 */
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <DurationEntry navigation={this.props.navigation} />
      </View>
    );
  }
}
