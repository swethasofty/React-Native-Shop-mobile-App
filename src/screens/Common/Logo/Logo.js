import React from "react";
import { Text, View, Image, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const Logo = props => {
  const { titleStyle, subTitleStyle, logoImageStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Icon
        name={Platform.OS === "ios" ? "ios-book" : "md-book"}
        color="#5A5F69"
        size={48}
      />
      <Text style={titleStyle}>{props.titleText}</Text>
      <Text style={subTitleStyle}>{props.subTitleText}</Text>
    </View>
  );
};

const styles = {
  titleStyle: {
    fontSize: 24,
    height: 33,
    fontWeight: "bold",
    lineHeight: 35,
    color: "#1E2022",
    marginTop: 25
  },
  subTitleStyle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "500",
    color: "#5A5F69",
    width: 130
  },
  logoImageStyle: {
    width: 48,
    height: 48
  },
  viewStyle: {
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    paddingTop: 40
  }
};

//Making componetnt to use other places

export default Logo;
