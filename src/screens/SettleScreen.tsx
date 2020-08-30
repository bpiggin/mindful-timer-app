import React, { useEffect } from 'react';
import { Text, View, BackHandler } from 'react-native';
import styles from '../../styles';
import FadeIn from '../components/FadeIn';

const TEN_SECONDS = 10000;

const SettleScreen = ({ navigation }: any) => {
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
      <Text style={styles.titleText}>Settle</Text>
    </View>
  );
};
export default SettleScreen;
