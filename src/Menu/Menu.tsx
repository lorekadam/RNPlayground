import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Circle, Path} from 'react-native-svg';
import Calendar from '../../assets/event-calender-date-note-svgrepo-com.svg';
import Users from '../../assets/users-svgrepo-com.svg';
import AnimatedMenuItem from '../AnimatedMenuItem';
import {CIRCLE_SIZE, styles} from './style';

type MenuType = {};

type ActiveMenu = 'Calendar' | 'Expand' | 'Users';
const iconProps = {
  width: 34,
  height: 34,
  fill: '#ffffff',
};

const ICONS = 3;

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);

export const Menu = ({}: MenuType) => {
  const [menuWidth, setMenuWidth] = useState(0);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu | null>('Calendar');
  const offset = useSharedValue(9);

  const progress = useDerivedValue(() => {
    return activeMenu && activeMenu === 'Expand'
      ? withTiming(1)
      : withTiming(0);
  }, [activeMenu]);

  const highlightBg = useAnimatedProps(() => {
    const fill = interpolateColor(
      progress.value,
      [0, 1],
      ['rgba(255,255,255,0)', 'rgba(255,255,255,1)']
    );

    return {fill};
  });

  const plusFill = useAnimatedProps(() => {
    const fill = interpolateColor(
      progress.value,
      [0, 1],
      ['rgb(255,255,255)', 'rgb(0,0,0)']
    );
    return {fill};
  });

  const circleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value),
        },
      ],
    };
  });

  const plusRotate = useAnimatedProps(() => {
    const rotate = interpolate(progress.value, [0, 1], [0, -45]);
    return {
      transform: [
        {
          rotate: `${rotate}deg`,
        },
      ],
    };
  });

  const move = (i: number) => {
    if (i === 1) {
      offset.value = 9;
      setActiveMenu('Calendar');
    } else if (i === ICONS) {
      offset.value = menuWidth - CIRCLE_SIZE - 15;
      setActiveMenu('Users');
    } else {
      offset.value = menuWidth / 2 - CIRCLE_SIZE / 2 - 3;
      setActiveMenu('Expand');
    }
  };

  const expanded = activeMenu === 'Expand';

  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.header}>Active option</Text>
        <Text style={styles.subheader}>{activeMenu}</Text>
      </View>
      <View
        style={styles.wrapper}
        onLayout={e => setMenuWidth(e.nativeEvent.layout.width)}>
        <AnimatedSvg
          width={56}
          height={56}
          style={[styles.highlight, circleStyles]}>
          <AnimatedCircle
            cx="28"
            cy="28"
            r="26"
            strokeWidth={2}
            stroke="#ffffff"
            animatedProps={highlightBg}
          />
        </AnimatedSvg>
        <AnimatedMenuItem
          progress={progress}
          active={expanded}
          x={[
            menuWidth / 2 - CIRCLE_SIZE / 2 - 3,
            menuWidth * 0.33 - CIRCLE_SIZE,
          ]}
          y={[0, -80]}
        />
        <AnimatedMenuItem
          progress={progress}
          active={expanded}
          x={[
            menuWidth / 2 - CIRCLE_SIZE / 2 - 3,
            menuWidth / 2 - CIRCLE_SIZE / 2 - 3,
          ]}
          y={[0, -100]}
        />
        <AnimatedMenuItem
          progress={progress}
          active={expanded}
          x={[menuWidth / 2 - CIRCLE_SIZE / 2 - 3, menuWidth * 0.66]}
          y={[0, -80]}
        />
        <TouchableOpacity onPress={() => move(1)}>
          <Calendar {...iconProps} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => move(2)}>
          <AnimatedSvg
            {...iconProps}
            viewBox="0 0 45.402 45.402"
            style={[plusRotate]}>
            <AnimatedPath
              animatedProps={plusFill}
              d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
              c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
              c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
              c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
            />
          </AnimatedSvg>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => move(3)}>
          <Users {...iconProps} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
