import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body,Grid,Col} from "native-base";
import Splashscreen from "../splashscreen"
import { Platform, StyleSheet, FlatList, Alert,View,Image,ScrollView,TouchableOpacity} from "react-native";
import { withNavigation,useNavigation  } from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";


// const  size = "M";
const  color = "#FF0000";
const ImagePath = require("../../../assets/kid.jpg");

 class CheckoutItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: "",
            color:"",
            date:"",
            image1:""
        };
        
      }
     goToHome = () => {
       // history.push('/home')
       alert("ss");
      }
    
      goToCheckout = () => {
        //history.push('/checkout')
        alert("ss");
      }

    
  render() {
    
    return (
      
        <View style={[style.container, {paddingTop: 20}]}>
        <View style={[style.childContainer, style.leftContainer]}>
          <Image source={this.props.image1} style={style.imageStyle}/>
        </View>
        <View style={[style.childContainer, style.rightContainer, style.extraStyle, {justifyContent: "flex-start"}]}>
          <View style={[style.container, {paddingRight: 0}]}>
          </View>

          <View style={style.container}>
            <View style={[style.childContainer, style.leftContainer ,{flex: 1, }]}>
              <Text styleKey="blue" style={[style.content, { paddingLeft: 7}]}>
                Estimated Delivery by<Text style={{fontWeight: "bold",color:"blue"}}>  {this.props.date}</Text></Text>
            </View>
          </View>
        </View>

        
      </View>
      
      
    );
  }
}
export default withNavigation(CheckoutItems);

const style = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: "space-between",
      },
      productColor: {
        height: 20,
        width: 20,
        borderRadius: 50,
        marginRight: 15,
        marginBottom: 20,
      
      },productColorRow: {
        flexDirection: 'row',
      },
      childContainer: {
        flex: 1,
        justifyContent: "center",
      },
      leftContainer: {
        alignItems: "flex-start",
        flex: 0,
      },
      rightContainer: {
        alignItems: "flex-end",
        flex: 0,
      },
      title: {
        fontSize: 25,
        paddingTop: 15,
      },
      content: {
        fontSize: 14,
      },
      strike: {
        fontSize: 12,
        textDecorationLine: 'line-through',
      },
      imageStyle :{
        width: 140,
        height: 140,
      },
      extraStyle: {
        flex: 3
      },
    });
    