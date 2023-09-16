import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import WelcomeScreen from "./components/WelcomeScreen";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeader from "./components/LittleLemonHeader";
import MenuItems from "./components/MenuItems";
import LoginScreen from "./components/LoginScreen";
import Feedback from "./components/Feedback";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Newsletter from "./components/Newsletter";
// import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Stack.Navigator
          initialRouteName="Login"
          // screenOptions={{ headerStyle: { backgroundColor: "#FBDABB" } }}
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            // options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            // options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Menu"
            component={MenuItems}
            // options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Feedback"
            component={Feedback}
            // options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Newsletter"
            component={Newsletter}
            // options={{ title: "Home" }}
          />
        </Stack.Navigator>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>

    // <NavigationContainer>
    //   <View style={styles.container}>
    //     <LittleLemonHeader />
    //     <Tab.Navigator
    //       initialRouteName="Login"
    //       screenOptions={({ route }) => ({
    //         tabBarIcon: ({ focused, size, color }) => {
    //           let iconName;

    //           if (route.name === "Welcome") {
    //             iconName = focused ? "home" : "home-outline";
    //           } else if (route.name === "Login") {
    //             iconName = focused ? "enter" : "enter-outline";
    //           } else if (route.name === "Feedback") {
    //             iconName = focused ? "chatbubble" : "chatbubble-outline";
    //           }
    //           return <Ionicons name={iconName} size={size} color={color} />;
    //         },
    //         tabBarActiveTintColor: "#EE9972",
    //       })}
    //     >
    //       <Tab.Screen name="Login" component={LoginScreen} />
    //       <Tab.Screen name="Welcome" component={WelcomeScreen} />
    //       <Tab.Screen name="Feedback" component={Feedback} />
    //     </Tab.Navigator>
    //     <LittleLemonFooter />
    //   </View>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <View style={styles.container}>
    //     <LittleLemonHeader />
    //     <Drawer.Navigator useLegacyImplementation initialRouteName="Login">
    //       <Drawer.Screen name="Login" component={LoginScreen} />
    //       <Drawer.Screen name="Welcome" component={WelcomeScreen} />
    //       <Drawer.Screen name="Feedback" component={Feedback} />
    //     </Drawer.Navigator>
    //     <LittleLemonFooter />
    //   </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#333333",
  },
  footerContainer: {
    backgroundColor: "#333333",
  },
});
