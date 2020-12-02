import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body,Grid,Col} from "native-base";
import Splashscreen from "../splashscreen"
import { Platform, StyleSheet, FlatList, Alert,View,Image,ScrollView,TouchableOpacity} from "react-native";
import { withNavigation,useNavigation  } from 'react-navigation';
import MaterialIcon from 'react-native-vector-icons';

var total="$25.98";
var label ="Standard - Free";


const cover = require("../../../assets/fashion.png");
 class BagOption extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          values: [
            { key: "total",vla:'$25.98' },
            { key: "Delivery",url:'Standard - Free'  }
          ]
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
      
        <View style={[style.contentContainer]}>
            <View style={style.container}>
              <View style={[style.childContainer, style.leftContainer]}>
                <Text styleKey="textColor" style={[style.content]}>Total</Text>
              </View>
              <View style={[style.childContainer, style.rightContainer]}>
                <Text styleKey="textColor" style={style.content}>$23</Text>
              </View>
            </View>
          </View>
      
    );
  }
}
export default withNavigation(BagOption);

const style = StyleSheet.create({
    contentContainer: {
        paddingBottom: 10,
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
      rightContainer: {
        alignItems: "flex-end",
        flex: 0,
      },
      content: {
        fontSize: 14,
        paddingTop: 10,
      },
    });
    