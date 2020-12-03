import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body,Grid,Col} from "native-base";
import Splashscreen from "../splashscreen"
import { Platform, StyleSheet, FlatList, Alert,View,Image,ScrollView,TouchableOpacity} from "react-native";
import { withNavigation,useNavigation  } from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";

import BagItem from "./BagItem";
import BagOption from "./BagOption";
const productData = {
    color: ['red']
  }

const cover = require("../../../assets/fashion.png");
const ImagePath1 = require("../../../assets/kid.jpg");
const ImagePath2 = require("../../../assets/blue.jpg");
 class Bag extends Component {
    
  render() {
    goToHome = () => {
        // history.push('/home')
        this.props.navigation.navigate("Header");
       }
     
       goToCheckout = () => {
         //history.push('/checkout'
         alert("ss");
         this.props.navigation.navigate("Checkout");
       }
    return (
      
        <View style={style.mainContainer}>
        <ScrollView>
          <View style={[style.contentContainer]}>
            <View style={[style.container, {paddingBottom: 10, paddingLeft: 10}]}>
              <View style={[style.childContainer, style.leftContainer]}>
                <TouchableOpacity  onPress={goToHome}>
                  <Icon name="arrow-left" size={30}  style={style.backIcon} />
                </TouchableOpacity>
              </View>
              <View style={[style.childContainer, style.centerContainer]}>
                <Text styleKey="textColor" style={style.title}>Shopping Bag</Text>
              </View>
            </View>
            <BagItem size="M" color="blue" image1={ImagePath2}/>
          </View>
          <View style={[style.contentContainer]}>
            <BagItem size="L" color="red" image1={ImagePath1}/>
            {/* <Text>{productData.color}</Text> */}
          </View>
          <BagOption label="Delivery" total="Standard - Free" />
          <BagOption label="Total" total="$25.98" />
          <View style={style.footerContainer}>
            <View style={[style.childContainer, style.centerContainer]}>
              <View style={[style.checkoutButton]}>
                <TouchableOpacity  onPress={goToCheckout}>
                  <Text styleKey="highlightTextColor" style={style.checkoutStyle}>PLACE ORDER</Text>
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
    