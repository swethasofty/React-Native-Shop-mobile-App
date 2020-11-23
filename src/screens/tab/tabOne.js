import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body } from "native-base";
import { Image } from "react-native";
import Splashscreen from "../splashscreen"
const cover = require("../../../assets/fashion.png");
const bigsale = require("../../../assets/bigsale.png");

 class TabOne extends Component {
     constructor(props) {
      super(props);
      this.state = {};
      const nav = this.props.nav; 
    }
  render() {
  
    return (
      <Content padder>
      
        <Card>
          <CardItem>
            <Body>
            <Text>{this.props.navigation}</Text>
              <Image source={cover} />
              <Text  onPress={() => {this.props.navigation.navigate("Anatomy");}}>test</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Image source={bigsale} />
            </Body>
          </CardItem>
        </Card>
        
      </Content>
    );
  }
}
export default TabOne;