import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeStack, ProfileStack, SettingsStack } from './Stacks';
import { theme } from './theme';

const Tab = createBottomTabNavigator();

// Function to generate tab icons
const TabIcon = ({ routeName, focused, color, size }) => {
  let iconName;
  switch (routeName) {
    case 'HomeTab':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'SettingsTab':
      iconName = focused ? 'settings' : 'settings-outline';
      break;
    case 'ProfileTab':
      iconName = focused ? 'person' : 'person-outline';
      break;
    default:
      iconName = 'ellipse-outline'; // Default icon, in case none matches
  }
  return <Icon name={iconName} size={size} color={color} accessibilityRole="image" />;
};

// Extracted screen options function
const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => TabIcon({ routeName: route.name, focused, color, size }),
  tabBarActiveTintColor: theme.colors.primary,
  tabBarInactiveTintColor: theme.colors.text,
  tabBarStyle: {
    backgroundColor: theme.colors.card,
  },
});

export function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="SettingsTab" component={SettingsStack} />
      <Tab.Screen name="ProfileTab" component={ProfileStack} />
    </Tab.Navigator>
  );
}
