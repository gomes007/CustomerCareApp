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
      size={25}
      color={theme.colors.card}
      style={{ marginLeft: 10 }}
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
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        placeholderTextColor="#888"
      />
      <Icon name="notifications-outline" size={24} color="#000" style={styles.notificationIcon} />
    </View>
  ),
  headerTitleAlign: 'center', // Garante que o título seja centralizado no cabeçalho
  headerLeftContainerStyle: {
    paddingLeft: 0, // Sem padding para mover mais à esquerda
    marginLeft: 0,  // Remove margem adicional
  },
  headerRightContainerStyle: {
    paddingRight: 0,
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 5,
  },
  searchInput: {
    flex: 1, 
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 35,
    marginHorizontal: 10, 
    borderColor: '#ccc',
    borderWidth: 1,
  },
  notificationIcon: {
    paddingLeft: 0,

  },
});

