import React, { useEffect } from 'react';
import { Text, View, BackHandler } from 'react-native';
import styles from '../../styles';
import FadeIn from '../components/FadeIn';
import { NavigationInjectedProps } from 'react-navigation';

const TEN_SECONDS = 10000;
const SETTLE = 'Settle';

const SettleScreen = ({ navigation }: NavigationInjectedProps): JSX.Element => {
  const handleBackPress = () => {
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    setTimeout(() => {
      navigation.navigate('Timer', {
        duration: parseInt(navigation.getParam('duration', 10)),
      });
    }, TEN_SECONDS);
    return BackHandler.removeEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
  }, []);

  return (
    <View style={styles.container}>
      <FadeIn />
      <Text style={styles.titleText}>{SETTLE}</Text>
    </View>
  );
};
export default SettleScreen;
