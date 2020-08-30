import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../../styles';
import { Audio } from 'expo-av';
import { Feather } from '@expo/vector-icons';
import FadeIn from '../components/FadeIn';
import DayStreak from '../components/DayStreak/DayStreak';
import { NavigationInjectedProps } from 'react-navigation';

const COMPLETED = 'completed';

const CompletionScreen = ({
  navigation,
}: NavigationInjectedProps): JSX.Element => {
  useEffect(() => {
    const ringBell = async () => {
      const soundObject = new Audio.Sound();
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        await soundObject.loadAsync(require('../../assets/bell.mp3'));
        await soundObject.playAsync();
      } catch (error) {
        console.error(error);
      }
    };
    ringBell().catch((e) => console.error(e));
  }, []);

  const onHomePressed = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <FadeIn />
      <View style={styles.middle}>
        <Text style={styles.titleText}>
          {Math.floor(navigation.getParam('duration', 600) / 60)}{' '}
          {navigation.getParam('duration', 600) / 60 == 1
            ? 'minute'
            : 'minutes'}{' '}
          {COMPLETED}
        </Text>
      </View>
      <View style={styles.middle}>
        <DayStreak />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={onHomePressed}>
          <Feather name={'home'} color={'white'} size={45} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CompletionScreen;
