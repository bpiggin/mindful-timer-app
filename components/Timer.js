import React from "react";
import { Audio } from "expo-av";
import { Feather } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: this.props.duration,
      displayHours: this.props.duration >= 60 * 60,
      paused: false
    };
    this.playBackInstance = null;
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(prevState => ({ timer: prevState.timer - 1 })),
      1000
    );
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false
    });
    this._loadNewPlaybackInstance(true);
  }
  async _loadNewPlaybackInstance(playing) {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance.setOnPlaybackStatusUpdate(null);
      this.playbackInstance = null;
    }
    const source = require("../assets/bell.mp3");
    const initialStatus = {
      shouldPlay: true,
      rate: 1.0,
      shouldCorrectPitch: true,
      volume: 1.0,
      isMuted: false
    };
    const { sound, status } = await Audio.Sound.createAsync(
      source,
      initialStatus
    );
    this.playbackInstance = sound;
    this.playbackInstance.playAsync();
  }
  componentDidUpdate() {
    if (this.state.timer === 0) {
      clearInterval(this.interval);
      this.props.navigation.navigate("Completion", {
        duration: this.props.duration
      });
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    this.playbackInstance.unloadAsync();
  }

  formatTime(seconds) {
    let hoursFormatted = "";
    if (this.state.displayHours) {
      hoursFormatted =
        Math.floor(seconds / (60 * 60)) > 9
          ? Math.floor(seconds / (60 * 60)) + ":"
          : "0" + Math.floor(seconds / (60 * 60)) + ":";
      seconds -= Math.floor(seconds / (60 * 60)) * 60 * 60;
    }
    let minutesFormatted =
      Math.floor(seconds / 60) > 9
        ? Math.floor(seconds / 60) + ":"
        : "0" + Math.floor(seconds / 60) + ":";
    let secondsFormatted =
      seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60);
    return hoursFormatted + minutesFormatted + secondsFormatted;
  }

  onPlayPausePressed() {
    if (this.state.paused) {
      this.interval = setInterval(
        () => this.setState(prevState => ({ timer: prevState.timer - 1 })),
        1000
      );
    } else {
      clearInterval(this.interval);
    }
    this.setState({ paused: !this.state.paused });
  }

  discardPressed() {
    this.props.navigation.navigate("Home");
  }

  finishEarlyPressed() {
    this.props.navigation.navigate("Completion", {
      duration: this.props.duration - this.state.timer
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timerText} marginBottom={100}>
          {this.formatTime(this.state.timer)}
        </Text>
        <View style={styles.horizontalContainer}>
          <TouchableOpacity onPress={() => this.discardPressed()}>
            {this.state.paused ? (
              <Feather name="trash" color="white" size={36} />
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onPlayPausePressed()}>
            {this.state.paused ? (
              <Feather name="play" color="white" size={36} />
            ) : (
              <Feather name="pause" color="white" size={36} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.finishEarlyPressed()}>
            {this.state.paused ? (
              <Feather name="check" color="white" size={36} />
            ) : null}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
