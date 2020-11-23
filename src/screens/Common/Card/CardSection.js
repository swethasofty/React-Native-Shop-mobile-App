import React from "react";
import { View } from "react-native";

const CardSection = props => {
  const { cardSectionStyle } = styles;
  return <View style={cardSectionStyle}>{props.children}</View>;
};
const styles = {
  cardSectionStyle: {
    borderBottomWidth: 0,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  }
};

export default CardSection;
