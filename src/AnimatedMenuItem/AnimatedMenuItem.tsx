import React from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withDelay,
  withSpring,
  interpolate,
} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';
import {styles} from './styles';

type AnimatedMenuItemType = {
  progress: Readonly<SharedValue<number>>;
  active: boolean;
  x: [number, number];
  y: [number, number];
};

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const AnimatedMenuItem = ({
  progress,
  active,
  x,
  y,
}: AnimatedMenuItemType) => {
  const expandMenu1 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withDelay(
            100,
            withSpring(interpolate(progress.value, [0, 1], x))
          ),
        },
        {
          translateY: withDelay(
            100,
            withSpring(interpolate(progress.value, [0, 1], y))
          ),
        },
        {
          scale: active
            ? withSpring(interpolate(progress.value, [0, 1], [0, 1]))
            : withSpring(interpolate(progress.value, [1, 0], [1, 0])),
        },
      ],
    };
  });
  return (
    <AnimatedSvg width={56} height={56} style={[styles.dot, expandMenu1]}>
      <AnimatedCircle cx="28" cy="28" r="26" strokeWidth={2} fill="#651cb2" />
    </AnimatedSvg>
  );
};
