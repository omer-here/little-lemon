import {
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
} from "react-native";
import { useState } from "react";

export default function Feedback() {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [message, onChangeMessage] = useState("");
  const [phoneNumber, onChangePhoneNumber] = useState("");
  const [email, onChangeEmail] = useState("");
  const [feedback, onFeedback] = useState(false);

  const colorScheme = useColorScheme();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {feedback && (
        <Text style={[styles.regularText, colorScheme==='light'?{color: '#333333'}: {color: '#fff'}]}>Thank you for your Feedback!</Text>
      )}
      {!feedback && (
        <ScrollView keyboardDismissMode="on-drag">
          <Text style={[styles.regularText, colorScheme==='light'?{color: '#333333'}: {color: '#fff'}]} numberOfLines={3}>
            How was your visit at Little Lemon? Your feedback would be appreciated!
          </Text>
          <TextInput
            style={[styles.input, colorScheme==='light'? {color: '#333333'}:{color: '#fff'}]}
            value={firstName}
            onChangeText={onChangeFirstName}
            placeholder={"First Name"}
          />
          <TextInput
            style={[styles.input, colorScheme==='light'? {color: '#333333'}:{color: '#fff'}]}
            value={lastName}
            onChangeText={onChangeLastName}
            placeholder={"Last Name"}
          />
          <TextInput
            style={[styles.input, colorScheme==='light'? {color: '#333333'}:{color: '#fff'}]}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={"Email"}
            keyboardType={"email-address"}
          />
          <TextInput
            style={[styles.input, colorScheme==='light'? {color: '#333333'}:{color: '#fff'}]}
            value={phoneNumber}
            onChangeText={onChangePhoneNumber}
            placeholder={"Phone Number"}
            keyboardType={"phone-pad"}
          />
          <TextInput
            style={styles.message}
            value={message}
            onChangeText={onChangeMessage}
            placeholder={"Message"}
            multiline={true}
            maxLength={100}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onFeedback(!feedback);
            }}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  message: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#EDEFEE",
    borderColor: '#EDEFEE'
  },
  regularText: {
    fontSize: 20,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#EE9972",
    marginHorizontal: 100,
    marginVertical: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 30,
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
  },
});
