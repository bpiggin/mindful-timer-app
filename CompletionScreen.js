import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'
import { Audio } from 'expo-av'
import { Feather } from '@expo/vector-icons'

/*
 * Completion screen. Say well done to the user.
 */
export default class CompletionScreen extends React.Component {
  constructor(props) {
    super(props)
    this.playBackInstance = null
  }

  componentDidMount(){
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
    })
    this._loadNewPlaybackInstance(true)
  }
  async _loadNewPlaybackInstance(playing) {
    if (this.playbackInstance != null) {
        await this.playbackInstance.unloadAsync()
        this.playbackInstance.setOnPlaybackStatusUpdate(null)
        this.playbackInstance = null
     }
     const source = require('./assets/bell.mp3')
     const initialStatus = {
          shouldPlay: true,
          rate: 1.0,
          shouldCorrectPitch: true,
          volume: 1.0,
          isMuted: false
     }
     const { sound, status } = await Audio.Sound.createAsync(
         source,
         initialStatus
    )
    this.playbackInstance = sound
    this.playbackInstance.playAsync()
  }
  componentWillUnmount() {
    this.playbackInstance.unloadAsync()
  }

  onHomePressed = () => {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.middle}>
          <Text style={styles.titleText}>{Math.floor(this.props.navigation.getParam('duration', 600) / 60)} {this.props.navigation.getParam('duration', 600) / 60 == 1 ? "minute" : "minutes"} completed</Text>
        </View>
        <View style={styles.bottom}>
        <TouchableOpacity
            onPress={() => this.onHomePressed()}
          >
          <Feather name="home" color="white" size={36} />
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}