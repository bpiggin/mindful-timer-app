import React from "react";
import {
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  StatusBar
} from "react-native";

export default class DurationEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { duration: "" };
  }

  onChanged(text) {
    //No more than 12 hours of meditation
    if (+text > 12 * 60) {
      this.setState({ duration: String(12 * 60) });
      Keyboard.dismiss();
      return;
    }
    //Don't let users enter . or , etc.
    this.setState({ duration: text.replace(/[^0-9]/g, "") });
    //Dismiss the keyboard after they type two digits (who meditates for more than 99 mins..?)
    if (+text.replace(/[^0-9]/g, "") > 9) {
      Keyboard.dismiss();
    }
  }

  onBeginPressed() {
    if (this.state.duration != "" && +this.state.duration > 0) {
      //TODO:Get delay from storage and check which screen we should go to here.
      this.props.navigation.navigate("Settle", {
        duration: parseInt(this.state.duration),
        delay: 3
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.titleText}>
          How many minutes are you meditating for?
        </Text>
        <TextInput
          placeholder="     "
          value={this.state.duration}
          underlineColorAndroid="#808080"
          style={styles.inputText}
          keyboardType={"numeric"}
          autoFocus={true}
          selectionColor="#202020"
          onChangeText={text => this.onChanged(text)}
        />
        <View style={{ padding: 80 }}>
          <TouchableOpacity
            onPress={() => this.onBeginPressed()}
            style={styles.button}
          >
            <Text style={styles.bodyText}>Begin</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
