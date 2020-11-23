import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body } from "native-base";
import { Image } from "react-native";
const toys = require("../../../assets/toys.png");

export default class TabTwo extends Component {
  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
            <Image source={toys} />
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
