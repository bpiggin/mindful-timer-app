import React from 'react';
import { View } from 'react-native';
import styles from '../../styles';
import DurationEntry from '../components/DurationEntry';
import FadeIn from '../components/FadeIn';
import { NavigationInjectedProps } from 'react-navigation';

const HomeScreen = ({ navigation }: NavigationInjectedProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <FadeIn />
      <DurationEntry navigation={navigation} />
    </View>
  );
};
export default HomeScreen;
