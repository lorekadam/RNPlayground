import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {
  LightSpeedInLeft,
  LightSpeedOutRight,
} from 'react-native-reanimated';
import List from './src/List';
import Menu from './src/Menu';

type VIEWS = 'LIST' | 'MENU';

const App = () => {
  const [view, setView] = useState<null | VIEWS>(null);
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <ScrollView
          style={styles.wrapper}
          contentContainerStyle={{flexGrow: 1}}>
          {view === null ? (
            <View>
              <Text style={styles.header}>Choose view</Text>
              <TouchableOpacity onPress={() => setView('LIST')}>
                <Text style={styles.view}>List</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setView('MENU')}>
                <Text style={styles.view}>Menu</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={() => setView(null)}>
              <Text>Back</Text>
            </TouchableOpacity>
          )}
          <View style={styles.inside}>
            {view !== null && (
              <Animated.View
                entering={LightSpeedInLeft}
                exiting={LightSpeedOutRight}>
                {view === 'LIST' && <List />}
                {view === 'MENU' && <Menu />}
              </Animated.View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    height: '100%',
  },
  inside: {
    flex: 1,
    height: '100%',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
  },
  view: {
    fontSize: 16,
  },
});
