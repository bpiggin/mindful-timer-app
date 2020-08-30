import { Easing } from 'react-native';
import {
  TransitionSpec,
  StackCardInterpolationProps,
} from 'react-navigation-stack/lib/typescript/src/vendor/types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const openConfig: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 1000,
    easing: Easing.quad,
  },
};
export const closeConfig: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.out(Easing.exp),
  },
};
