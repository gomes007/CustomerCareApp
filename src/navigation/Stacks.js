import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Platform, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { AboutScreen } from "../pages/About";
import { ContactScreen } from "../pages/Contact";
import { CustomerScreen } from "../pages/Customer";
import { HomeScreen } from "../pages/Home";
import { NotificationsScreen } from "../pages/Notifications";
import { ProfileScreen } from "../pages/Profile";
import { SettingsScreen } from "../pages/Settings";
import { TicketScreen as Ticket } from "../pages/Ticket";
import { theme } from "./theme";

const Stack = createStackNavigator();

const BackButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.goBack()}
    accessibilityRole="button"
    accessibilityLabel="Go back"
  >
    <Icon
      name="chevron-back-outline"
      size={20}
      color={theme.colors.darkText}
      style={{ marginLeft: 10 }}
    />
  </TouchableOpacity>
);

const MenuButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.openDrawer()}
    accessibilityRole="button"
    accessibilityLabel="Open menu"
  >
    <Icon
      name="menu"
      size={35}
      color={theme.colors.card}
      style={{ marginLeft: 0 }}
    />
  </TouchableOpacity>
);

const headerStyles = {
  backgroundColor: theme.colors.card,
  ...(Platform.OS === "ios"
    ? {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
      }
    : {
        elevation: 3,
      }),
};

const commonScreenOptions = {
  headerStyle: headerStyles,
  headerTintColor: theme.colors.text,
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontSize: 16,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
  },
};

const defaultScreenOptions = ({ navigation }) => ({
  ...commonScreenOptions,
  headerLeft: () => <BackButton navigation={navigation} />,
  headerLeftContainerStyle: {
    paddingLeft: 10,
  },
});

const homeMainOptions = ({ navigation }) => ({
  ...commonScreenOptions,
  headerStyle: { backgroundColor: theme.colors.headerHomeBackground },
  headerTitle: () => (
    <View style={styles.headerContainer}>
      <View style={styles.menuButtonContainer}>
        <MenuButton navigation={navigation} />
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search" size={18} color="#fff" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#fff"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Icon name="notifications-outline" size={24} color="#fff" style={styles.notificationIcon} />
      </TouchableOpacity>
    </View>
  ),
  headerTitleAlign: 'center',
  headerLeftContainerStyle: {
    paddingLeft: 0,
    marginLeft: 0,
  },
  headerRightContainerStyle: {
    paddingRight: 10,
  },
});

const createStack = (name, component, options) => (
  <Stack.Navigator screenOptions={defaultScreenOptions}>
    <Stack.Screen name={name} component={component} options={options} />
  </Stack.Navigator>
);

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={homeMainOptions} // Usa opções personalizadas para HomeScreen
      />
    </Stack.Navigator>
  );
}

export function SettingsStack() {
  return createStack("SettingsMain", SettingsScreen, {
    headerTitle: "Settings",
  });
}

export function ProfileStack() {
  return createStack("ProfileMain", ProfileScreen, { headerTitle: "Profile" });
}

export function NotificationsStack() {
  return createStack("NotificationsMain", NotificationsScreen, {
    headerTitle: "Notifications",
  });
}

export function AboutStack() {
  return createStack("AboutMain", AboutScreen, { headerTitle: "About" });
}

export function ContactStack() {
  return createStack("ContactMain", ContactScreen, { headerTitle: "Contact" });
}

export function TicketStack() {
  return createStack("TicketMain", Ticket, { headerTitle: "Ticket" });
}

export function CustomerStack() {
  return createStack("CustomerMain", CustomerScreen, {
    headerTitle: "Customer",
  });
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 0,
  },
  menuButtonContainer: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 0,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d60b52', // Cor de fundo vermelha
    borderRadius: 5,
    borderColor: '#fff', // Bordas brancas
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    height: 35,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    color: '#fff', // Texto branco para contrastar com o fundo
    height: '100%',
  },
  notificationIcon: {
    paddingLeft: 0,
    flex: 0,
  },
});


