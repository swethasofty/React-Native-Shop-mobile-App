import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body,Grid,Col,Icon} from "native-base";
import Splashscreen from "../splashscreen"
import { Platform, StyleSheet, FlatList, Alert,View,Image,ScrollView,TouchableOpacity} from "react-native";
import { withNavigation,useNavigation  } from 'react-navigation';


const  size = "M";
const  color = "#FF0000";
const ImagePath = require("../../../assets/fashion.png");
 class BagItem extends Component {
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
          <Image source={ImagePath} style={style.imageStyle}/>
        </View>
        <View style={[style.childContainer, style.rightContainer, style.extraStyle, {justifyContent: "flex-start"}]}>
          <View style={[style.container, {paddingRight: 0}]}>
            <View style={[style.childContainer, style.leftContainer, style.extraStyle]}>
              <Text styleKey="textColor" style={style.content}>Top Heavy Bag</Text>
            </View>
            <View style={[style.childContainer, style.rightContainer ,{flex: 1}]}>
              <TouchableOpacity>
                <Icon name="ios-archive" size={20}  />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[style.container, {paddingTop: 20}]}>
            <View style={[style.childContainer, style.leftContainer ,{flex: 1, }]}>
              <Text styleKey="lightTextColor" style={[style.content]}>Size</Text>
            </View>
            <View style={[style.childContainer, style.leftContainer ,{flex: 1, }]}>
              <Text styleKey="lightTextColor" style={[style.content]}>Color</Text>
            </View>
            <View style={[style.childContainer, style.leftContainer ,{flex: 1, }]}>
              <Text styleKey="lightTextColor" style={[style.content]}>Qty</Text>
            </View>
          </View>
          <View style={style.container}>
            <View style={[style.childContainer, style.leftContainer ,{flex: 1, }]}>
              <Text styleKey="textColor" style={[style.content, { paddingLeft: 7}]}>{size}</Text>
            </View>
            <View style={[style.childContainer, style.leftContainer ,{flex: 1, }]}>
              {/* <Icon name="ios-add-circle" size={15} iconStyle={{ color: "green" }} style={{paddingLeft: 10}}/> */}
            <Text>Red</Text>
            </View>
            <View style={[style.childContainer, style.leftContainer ,{flex: 1, }]}>
              <Text styleKey="textColor" style={[style.content, { paddingLeft: 7}]}>1</Text>
            </View>
          </View>
          <View style={[style.container, {paddingTop: 20, paddingRight: 0}]}>
            <View style={[style.childContainer, style.rightContainer, style.extraStyle]}>
              <Text styleKey="lightTextColor" style={[style.strike]}>$20.90</Text>
            </View>
          </View>
          <View style={[style.container, {paddingRight: 0}]}>
            <View style={[style.childContainer, style.rightContainer, style.extraStyle]}>
              <Text styleKey="textColor" style={style.content}>$12.99</Text>
            </View>
          </View>
        </View>
      </View>
      
    );
  }
}
export default withNavigation(BagItem);

const style = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: "space-between",
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
    