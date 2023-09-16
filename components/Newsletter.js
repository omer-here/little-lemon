import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { validateEmail } from "../utils";

export default function Newsletter() {
  const [email, onChangeEmail] = useState("");
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Image
          source={require("../assets/little-lemon-logo-grey.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onChangeEmail}
          placeholder="Email"
          keyboardType={"email-address"}
        />
        <TouchableOpacity
          style={[
            styles.button,
            validateEmail(email)
              ? { backgroundColor: "#EE9900" }
              : { backgroundColor: "#EE9972" },
          ]}
          keyboardType="email-address"
          onPress={() => {
            Alert.alert("Thanks for subscribing, stay tuned!");
          }}
          disabled={validateEmail(email) ? false : true}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerText: {
    color: "#333333",
    fontSize: 22,
    textAlign: "center",
    margin: 10,
    padding: 20,
  },
  image: {
    height: 150,
    width: 100,
    justifyContent: "center",
    marginHorizontal: 125,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 8,
    marginVertical: 5,
    marginHorizontal: 25,
  },
  button: {
    backgroundColor: "#EE9972",
    padding: 6,
    marginVertical: 15,
    marginHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
  },
});
