import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body,Grid,Col,Icon} from "native-base";
import Splashscreen from "../splashscreen"
import { Platform, StyleSheet, FlatList, Alert,View,Image,ScrollView,TouchableOpacity} from "react-native";
import { withNavigation,useNavigation  } from 'react-navigation';

import BagItem from "./BagItem";
import BagOption from "./BagOption";


const cover = require("../../../assets/fashion.png");
 class Bag extends Component {
     goToHome = () => {
       // history.push('/home')
       alert("ss");
      }
    
      goToCheckout = () => {
        //history.push('/checkout'
        alert("ss");
      }
  render() {
  
    return (
      
        <View style={style.mainContainer}>
        <ScrollView>
          <View style={[style.contentContainer]}>
            <View style={[style.container, {paddingBottom: 10, paddingLeft: 10}]}>
              <View style={[style.childContainer, style.leftContainer]}>
                <TouchableOpacity >
                  <Icon name="ios-arrow-back" size={30}  style={style.backIcon} />
                </TouchableOpacity>
              </View>
              <View style={[style.childContainer, style.centerContainer]}>
                <Text styleKey="textColor" style={style.title}>Bag</Text>
              </View>
            </View>
            <BagItem size="M" />
          </View>
          <View style={[style.contentContainer]}>
            <BagItem size="L"/>
          </View>
          <BagOption label="Delivery" total="Standard - Free" />
          <BagOption label="Total" total="$25.98" />
          <View style={style.footerContainer}>
            <View style={[style.childContainer, style.centerContainer]}>
              <View style={[style.checkoutButton]}>
                <TouchableOpacity >
                  <Text styleKey="highlightTextColor" style={style.checkoutStyle}>PROCEED TO SHIPPING</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      
    );
  }
}
export default withNavigation(Bag);

const style = StyleSheet.create({
    mainContainer: {
        padding: 0,
        margin: 0,
        flex: 1,
      },
      contentContainer: {
        paddingBottom: 20,
        borderBottomWidth: 1,
      },
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
      centerContainer: {
        alignItems: "center",
        flex: 8,
      },
      footerContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: 300
      },
      backIcon: {
        fontSize: 25,
        paddingTop: 20,
      },
      title: {
        fontSize: 25,
        paddingTop: 15,
      },
      checkoutButton: {
        borderRadius: 50,
        paddingLeft: 50,
        paddingRight: 50
      },
      checkoutStyle: {
        fontSize: 16,
        padding: 10,
      },
    });
    