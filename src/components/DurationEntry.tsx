import React, { useState } from "react";
import styles from "../../styles";
import {
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const QUESTION_TEXT = "How many minutes are you meditating for?";

const DurationEntry = ({ navigation }: any) => {
  const [duration, setDuration] = useState("");

  const onChanged = (text: string) => {
    //No more than 12 hours of meditation
    if (+text > 12 * 60) {
      setDuration(String(12 * 60));
      Keyboard.dismiss();
      return;
    }
    //Don't let users enter . or , etc.
    setDuration(text.replace(/[^0-9]/g, ""));
    //Dismiss the keyboard after they type two digits (who meditates for more than 99 mins..?)
    if (+text.replace(/[^0-9]/g, "") > 9) {
      Keyboard.dismiss();
    }
  };

  const onBeginPressed = () => {
    if (duration !== "" && +duration > 0) {
      //TODO:Get delay from storage and check which screen we should go to here.
      navigation.navigate("Settle", { duration: parseInt(duration), delay: 3 });
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.titleText}>{QUESTION_TEXT}</Text>
      <TextInput
        placeholder="     "
        value={duration}
        underlineColorAndroid="#808080"
        style={styles.inputText}
        keyboardType={"numeric"}
        autoFocus={true}
        selectionColor="#202020"
        onChangeText={text => onChanged(text)}
      />
      <View style={{ padding: 80 }}>
        <TouchableOpacity onPress={onBeginPressed} style={styles.button}>
          <Text style={styles.bodyText}>Begin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DurationEntry;
