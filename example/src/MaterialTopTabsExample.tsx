import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();
import PagerView from 'react-native-pager-view';

function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <PagerView
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'red',
        }}
        initialPage={0}
      >
        <View key="1" collapsable={false}>
          <Text>First page</Text>
        </View>
        <View key="2" collapsable={false}>
          <Text>Second page</Text>
        </View>
      </PagerView>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function MaterialTopTabsExample() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
