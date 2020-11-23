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

class Signup extends Component {
    state = {
        email: "",
        password: "",
        repeatPassword: ""
      };
      handleEmail = text => {
        this.setState({ email: text });
      };
      handlePassword = text => {
        this.setState({ password: text });
      };
      handleRepeatPassword = text => {
        this.setState({ repeatPassword: text });
      };
      signup = (email, password) => {
        // alert("email: " + email + " password: " + password);
      };
    
  render() {
    const { forgotPasswodLinkStyle, accountStyle, linkContainer, buttonStyle ,drawerCover} = styles;
    return (
      <Container>
        <Content padder>
        <Image source={logoCover}   />
    <View>
        <Input placeholder={"Email Address"} />
        <Input placeholder={"Password"} secureTextEntry />
        <Input placeholder={"Repeat Password"} secureTextEntry />
        <Button style={buttonStyle}  onPress={() => this.props.navigation.navigate('Anatomy')}><Text>Signup</Text></Button>
        <View style={linkContainer}>
          <View>
            <Text style={accountStyle}> Dont Have an account already</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={accountStyle} onPress={() => this.props.navigation.navigate('Anatomy')}>BACK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
        </Content>
      </Container>
    );
  }
}

export default Signup;
