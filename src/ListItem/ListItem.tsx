import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from 'react-native-reanimated';
import {styles} from './style';

type ListItemType = {
  name: string;
  index: number;
  remove(): void;
};

export const ListItem = ({name, index, remove}: ListItemType) => {
  const renderRightActions = () => {
    return (
      <View style={styles.rightActions}>
        <TouchableOpacity style={styles.delete} onPress={remove}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Animated.View
        entering={LightSpeedInLeft}
        exiting={LightSpeedOutRight}
        layout={Layout.springify()}
        style={styles.row}>
        <Text>
          {index + 1}. {name}
        </Text>
        <TouchableOpacity style={styles.remove} onPress={remove}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </Animated.View>
    </Swipeable>
  );
};
