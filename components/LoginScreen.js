import { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

export default function LoginScreen({navigation}) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [loggedIn, onLogin] = useState(false);
  const [loggedOut, onLogout] = useState(false);

  const colorScheme = useColorScheme();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
      ]}
    >
      <ScrollView keyboardDismissMode={"on-drag"}>
        <Text
          style={[
            styles.headerText,
            colorScheme === "light" ? { color: "#333333" } : { color: "#fff" },
          ]}
        >
          Welcome to Little Lemon
        </Text>
        {!loggedIn && (
          <>
            <Text
              style={[
                styles.regularText,
                colorScheme === "light"
                  ? { color: "#333333" }
                  : { color: "#fff" },
              ]}
            >
              Login to Continue
            </Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={onChangeEmail}
              placeholder={"Email"}
              keyboardType={"email-address"}
              //   onFocus={() => {Alert.alert("Email is focused")}}
              //   onBlur={() => {
              //     Alert.alert("Email is now blurred");
              //   }}
            />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={onChangePassword}
              placeholder={"Password"}
              //   keyboardType={"visible-password"}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Welcome")
              }}
            >
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
          </>
        )}
        {loggedIn && (
          <>
            <Text
              style={[
                styles.regularText,
                colorScheme === "light"
                  ? { color: "#333333" }
                  : { color: "#fff" },
              ]}
            >
              You are Logged In!
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onLogout(!loggedOut);
              }}
            >
              <Text style={styles.buttonText}>Log out</Text>
            </TouchableOpacity>
            {loggedOut && (
              <Text
                style={[
                  styles.regularText,
                  colorScheme === "light"
                    ? { color: "#333333" }
                    : { color: "#fff" },
                ]}
              >
                You are Logged Out!
              </Text>
            )}
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    color: "#EDEFEE",
    textAlign: "center",
  },
  input: {
    height: 40,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    margin: 12,
    padding: 6,
    fontSize: 15,
  },
  button: {
    backgroundColor: "#EE9972",
    marginVertical: 12,
    marginHorizontal: 100,
    padding: 8,
    borderColor: "#EE9972",
    borderWidth: 2,
    borderRadius: 30,
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 25,
  },
});
