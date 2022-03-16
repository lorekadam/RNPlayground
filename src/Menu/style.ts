import {StyleSheet} from 'react-native';

export const MENU_HEIGHT = 80;
export const MENU_HORIZONTAL_PADDING = 20;
export const CIRCLE_SIZE = 50;

export const styles = StyleSheet.create({
  page: {
    height: '100%',
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 100,
    fontSize: 30,
  },
  subheader: {
    fontSize: 20,
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
    position: 'absolute',
  },
});
