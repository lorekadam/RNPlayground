import React, {useState} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';
import Calendar from '../../assets/event-calender-date-note-svgrepo-com.svg';
import Plus from '../../assets/plus-svgrepo-com.svg';
import Users from '../../assets/users-svgrepo-com.svg';
import {CIRCLE_SIZE, styles} from './style';

type MenuType = {};

const iconProps = {
  width: 34,
  height: 34,
  fill: '#ffffff',
};

const ICONS = 3;

export const Menu = ({}: MenuType) => {
  const [menuWidth, setMenuWidth] = useState(0);
  const [activePlus, setActivePlus] = useState(false);

  const progress = useDerivedValue(() => {
    return activePlus ? withTiming(1) : withTiming(0);
  }, [activePlus]);

  const highlightBg = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['rgba(255,255,255,0)', 'rgba(255,255,255,1)']
    );

    return {backgroundColor};
  });

  const plusFill = useAnimatedProps(() => {
    const fill = interpolateColor(
      progress.value,
      [0, 1],
      ['rgb(255,255,255)', 'rgb(0,0,0)']
    );
    return {fill};
  });

  const offset = useSharedValue(0);
  const circleStyles = useAnimatedStyle(() => {
    return {
      opacity: offset.value === 0 ? 0 : 1,
      backgroundColor: `rgba(255,255,255,${activePlus ? '1' : '0'})`,
      transform: [
        {
          translateX: withSpring(offset.value),
        },
      ],
    };
  });

  const move = (i: number) => {
    if (i === 1) {
      offset.value = 12;
    } else if (i === ICONS) {
      offset.value = menuWidth - CIRCLE_SIZE - 12;
    } else {
      offset.value = menuWidth / 2 - CIRCLE_SIZE / 2;
    }

    if (i === 2) {
      setActivePlus(true);
    } else {
      setActivePlus(false);
    }
  };

  return (
    <View style={styles.page}>
      <View
        style={styles.wrapper}
        onLayout={e => setMenuWidth(e.nativeEvent.layout.width)}>
        <Animated.View style={[styles.highlight, circleStyles, highlightBg]} />
        <Svg>
          <Circle cx={50} cy={50} fill="red" />
        </Svg>
        <TouchableOpacity onPress={() => move(1)}>
          <Calendar {...iconProps} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => move(2)}>
          {console.log(plusFill)}
          <Plus {...iconProps} fill={activePlus ? 'black' : 'white'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => move(3)}>
          <Users {...iconProps} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
