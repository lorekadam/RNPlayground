import {StyleSheet} from 'react-native';

export const MENU_HEIGHT = 80;
export const MENU_HORIZONTAL_PADDING = 20;
export const CIRCLE_SIZE = 50;

export const styles = StyleSheet.create({
  page: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#824EB8',
    borderRadius: 50,
    position: 'relative',
    height: MENU_HEIGHT,
    paddingHorizontal: MENU_HORIZONTAL_PADDING,
  },
  highlight: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    position: 'absolute',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
});
