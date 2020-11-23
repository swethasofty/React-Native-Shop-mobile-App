import React from "react";
import { View, ActivityIndicator } from "react-native";

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <View
        style={{
          width: 38,
          height: 38,
          borderRadius: 38 / 2,
          backgroundColor: "#fff",

          borderWidth: 1,
          borderColor: "#d6d7da"
        }}
      >
        <ActivityIndicator color="#377DFF" animating size={size || "large"} />
      </View>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    position: "absolute",
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  }
};

export { Spinner };
