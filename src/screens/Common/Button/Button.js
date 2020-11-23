import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = props => {
  return (
    <TouchableOpacity
      style={styles.submitButton}
      onPress={() => console.log("Clicked")}
    >
      <Text style={styles.submitButtonText}> {props.buttonText} </Text>
    </TouchableOpacity>
  );
};

const styles = {
  submitButton: {
    backgroundColor: "#377DFF",
    padding: 10,
    margin: 15,
    height: 50
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
};
export default Button;
