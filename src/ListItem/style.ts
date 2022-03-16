import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  remove: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#aaaabb',
  },
  delete: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fb123c',
  },
  rightActions: {
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 10,
    alignItems: 'center',
    marginBottom: 5,
  },
});
