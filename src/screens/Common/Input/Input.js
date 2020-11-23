import React from "react";
import { View, TextInput } from "react-native";

const Input = Props => {
  console.log(Props);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={Props.placeholder}
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholderTextColor="#343a40"
        autoCapitalize="none"
        secureTextEntry={Props.secureTextEntry}
        onChangeText={() => console.log("email")}
      />
    </View>
  );
};
const styles = {
  container: {
    paddingTop: 23
  },
  input: {
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    borderColor: "#DEDEDE",
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 14,
    paddingHorizontal: 15
  }
};
export default Input;
