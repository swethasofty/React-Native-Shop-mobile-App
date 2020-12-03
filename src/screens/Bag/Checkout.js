import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body,Grid,Col} from "native-base";
import { Platform, StyleSheet, FlatList, Alert,View,Image,TouchableOpacity,ScrollView} from "react-native";
import { withNavigation,useNavigation  } from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";
import BagItem from "./BagItem";
import BagOption from "./BagOption";
import CheckoutItems from "./CheckoutItems";


const ImagePath1 = require("../../../assets/kid.jpg");
const ImagePath2 = require("../../../assets/blue.jpg");
 class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: "",
            total:""
        };
        
      }
  render() {
    goToCheckout = () => {
        //history.push('/checkout'
      
        this.props.navigation.navigate("Bag");
      }
    return (
      
    //   <View style={[style.contentContainer]}>
    //   <View style={style.container}>
    //   <View style={[style.childContainer, style.leftContainer, style.extraStyle]}>
    //     <Text styleKey="textColor" style={style.content}>Price Details(2 items)</Text>
       
    //   </View>
    //   <BagOption label="Delivery" total="Standard - Free" />
    // <BagOption label="Total" total="$25.98" />
        
    //   </View>
    // </View>

    <View style={style.mainContainer}>
    <ScrollView>
      <View style={[style.contentContainer]}>
        <View style={[style.container, {paddingBottom: 10, paddingLeft: 10}]}>
          <View style={[style.childContainer, style.leftContainer]}>
            <TouchableOpacity  onPress={goToCheckout}>
              <Icon name="arrow-left" size={30}  style={style.backIcon} />
            </TouchableOpacity>
          </View>
         
        </View>
        
       
        <View style={[style.childContainer, style.leftContainer, style.extraStyle]}>
          <Text styleKey="textColor" style={style.content} style={{fontWeight: "bold"}}>DELIVERY ESTIMATES</Text>
          </View>
          <View style={[style.contentContainer]}>  
           <CheckoutItems size="M" color="blue" date="15 Dec 2020" image1={ImagePath1}/>
           <CheckoutItems size="M" color="blue" date="10 Dec 2020" image1={ImagePath2}/>
         </View>

        <View style={[style.childContainer, style.leftContainer, style.extraStyle]}>
          <Text styleKey="textColor" style={style.content}>Price Details(2 items)</Text>
          </View>
      </View>
        <BagOption label="Total MRP" total="$41.80" />
        <BagOption label="Discount on MRP" total="-$15.82" />
          <BagOption label="Platform Handling Fee" total="Free" />
          <BagOption label="Total" total="$25.98" />
          <View style={style.footerContainer}>
            <View style={[style.childContainer, style.centerContainer]}>
              <View style={[style.checkoutButton]}>
                <TouchableOpacity  onPress={goToCheckout}>
                  <Text styleKey="highlightTextColor" style={style.checkoutStyle}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </ScrollView>
      </View>
       
    )
  }
}
export default withNavigation(Checkout);

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
    