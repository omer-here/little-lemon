import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
          resizeMode="contain"
        />
      <Text style={styles.headerText} numberOfLines={2}>
        Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: "#EE9972",
    flexDirection: 'row'
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    textAlign: "center",
    marginHorizontal: -20,
    marginTop: 6
  },
  logo: {
    height: 100,
    width: 50,
    justifyContent: 'center',
    margin: 20,
    marginRight: -10,
    marginLeft: 60,
  },
});
