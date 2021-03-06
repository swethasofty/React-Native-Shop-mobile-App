import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body } from "native-base";
import { Image } from "react-native";
const organic = require("../../../assets/organic.jpg");

export default class TabFour extends Component {
  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
            <Image source={organic} />
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
            <Image source={organic} />
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
