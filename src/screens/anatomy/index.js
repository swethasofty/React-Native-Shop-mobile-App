import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";
import {View ,TouchableOpacity,Image} from "react-native";
import stylesLogo from "./styles";

import Logo from "../Common/Logo/Logo";
import Input from "../Common/Input/Input"
//import { Actions } from "react-native-router-flux";

//import styles from "./styles";

const logoCover = require("../../../assets/logo1.png");
const styles = {
  forgotPasswodLinkStyle: {
    color: "#DE4437",
    fontSize: 14,
    textAlign: "right",
    padding: 10
  },
  buttonStyle: {
    fontSize: 14,
    textAlign: "center",
  },
  accountStyle: {
    color: "#77838F",
    fontSize: 12,
    marginRight: 5
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center"
  }
};

class Anatomy extends Component {
  render() {
    const { forgotPasswodLinkStyle, accountStyle, linkContainer, buttonStyle ,drawerCover} = styles;
    return (
      <Container>
        {/* <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header> */}

        <Content padder>
          {/* <Text>Content goes here (internal)</Text> */}
          <View>
        {/* <Logo titleText={"NiceReads"} subTitleText={"Meet your next favor"} /> */}
        <Image source={logoCover} style={stylesLogo.drawerCover}   />
        <Input placeholder={"Email Address"} />
        <Input placeholder={"Password"} secureTextEntry />
        <Button style={buttonStyle}  onPress={() => this.props.navigation.navigate('Header')}><Text>SignIn</Text></Button>
        <TouchableOpacity onPress={() => Actions.forgotPassword()}>
          <Text  style={forgotPasswodLinkStyle} onPress={() => this.props.navigation.navigate('Header')}> Forgot password?</Text>
        </TouchableOpacity>
        
        <View style={linkContainer}>
          <View >
            <Text style={accountStyle}> Dont Have an account yet</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => Actions.signUp()}>
              <Text style={accountStyle} onPress={() => this.props.navigation.navigate('Signup')}>SIGNUP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
        </Content>
      </Container>
    );
  }
}

export default Anatomy;
