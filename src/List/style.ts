import {StyleSheet} from 'react-native';

const SIZE = 50;

export const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    paddingBottom: SIZE,
  },
  add: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
});
