import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import styles from '../../../styles';
import { getDayStreak } from './helpers';

const DayStreak = () => {
  const [streak, setStreak] = useState('');

  useEffect(() => {
    getDayStreak().then((count) => {
      setStreak(String(count));
    });
  }, []);

  return (
    <Text style={styles.titleText}>
      You have meditated for {streak} days in a row
    </Text>
  );
};
export default DayStreak;
