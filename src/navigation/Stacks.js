import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";

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
  backgroundColor: theme.colors.card, // Usar estilo padrão para cabeçalhos
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
  headerStyle: { backgroundColor: theme.colors.headerHomeBackground }, // Aplica cor de fundo específica somente para Home
  headerLeft: () => <MenuButton navigation={navigation} />,
  headerTitle: "",
  headerLeftContainerStyle: {
    paddingLeft: 10,
  },
  headerRight: () => (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        placeholderTextColor="#888"
      />
    </View>
  ),
  headerRightContainerStyle: {
    paddingRight: 10,
    flex: 1,
    justifyContent: "center",
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
  searchContainer: {
    flex: 1, 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 35,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
