import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { BottomTabs } from "./BottomTabs";
import {
  AboutStack,
  ContactStack,
  NotificationsStack,
  TicketStack,
  CustomerStack,
} from "./Stacks";
import { theme } from "./theme";

const Drawer = createDrawerNavigator();

// Function to generate drawer icons with a fixed size
const DrawerIcon = ({ name, color, size }) => (
  <Icon name={name} color={color} size={size} accessibilityRole="image" />
);

export function DrawerScreens() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerContentStyle: {
          backgroundColor: theme.colors.card,
        },
        drawerActiveTintColor: theme.colors.primary,
        drawerInactiveTintColor: theme.colors.text,
        drawerActiveBackgroundColor: theme.colors.background,
        sceneContainerStyle: { backgroundColor: theme.colors.background },
        drawerLabelStyle: {
          marginLeft: -15,
          color: theme.colors.text,
          fontFamily: theme.fonts.regular,
        },
        drawerItemStyle: {},
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabs}
        options={{
          drawerIcon: ({ color }) =>
            DrawerIcon({ name: "home-outline", color, size: 18 }),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsStack}
        options={{
          drawerIcon: ({ color }) =>
            DrawerIcon({ name: "notifications-outline", color, size: 20 }),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutStack}
        options={{
          drawerIcon: ({ color }) =>
            DrawerIcon({ name: "information-circle-outline", color, size: 20 }),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactStack}
        options={{
          drawerIcon: ({ color }) =>
            DrawerIcon({ name: "call-outline", color, size: 20 }),
        }}
      />
      <Drawer.Screen
        name="Ticket"
        component={TicketStack}
        options={{
          drawerIcon: ({ color }) =>
            DrawerIcon({ name: "ticket-outline", color, size: 20 }),
        }}
      />

      <Drawer.Screen
        name="Customer"
        component={CustomerStack}
        options={{
          drawerIcon: ({ color }) =>
            DrawerIcon({ name: "person-add-outline", color, size: 20 }),
        }}
      />
    </Drawer.Navigator>
  );
}
