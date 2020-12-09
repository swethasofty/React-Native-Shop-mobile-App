import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body,Grid,Col} from "native-base";
import Splashscreen from "../splashscreen"
import { Platform, StyleSheet, FlatList, Alert,View,Image,ScrollView,TouchableOpacity} from "react-native";
import {Picker} from "react-native";
import { withNavigation,useNavigation  } from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";




// const  size = "M";
const  color = "#FF0000";
const ImagePath = require("../../../assets/fashion.png");

 class BagItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // size: "",
            color:"",
            image1:"",
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
  //   state = {
  //     size: this.props.size, 
  // };
    return (
      
        <View style={[style.container, {paddingTop: 20}]}>
        <View style={[style.childContainer, style.leftContainer]}>
          <Image source={this.props.image1} style={style.imageStyle}/>
        </View>
        <View style={[style.childContainer, style.rightContainer, style.extraStyle, {justifyContent: "flex-start"}]}>
          <View style={[style.container, {paddingRight: 0}]}>
            <View style={[style.childContainer, style.leftContainer, style.extraStyle]}>
              <Text styleKey="textColor" style={style.content}>Top Heavy Bag</Text>
             
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
              {/* <Text styleKey="textColor" style={[style.content, { paddingLeft: 7}]}>{this.props.size}</Text> */}
              <Picker
               selectedValue={this.props.size}
               onValueChange={hand => this.setState({ size:hand })}
              style={{ width: 80 }}
              mode="dropdown">
              <Picker.Item label="S" value="S" />
              <Picker.Item label="M" value="M" />
              <Picker.Item label="L" value="L" />
            </Picker>
            </View>
            <View style={[style.childContainer, style.leftContainer ,{flex: 1, }]}>
              <Icon name="circle" size={15} color={this.props.color} style={{paddingLeft: 10}}/>
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
          <View style={[style.deleteAndWish, style.centerContainer]}>
              <TouchableOpacity>
                <Icon name="archive" size={20}  />
              </TouchableOpacity>
              <TouchableOpacity>
               <Text>WishList</Text>
              </TouchableOpacity>
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
      centerContainer: {
        alignItems: "flex-start",
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
      deleteAndWish: {
        flex: 1,
        justifyContent: "center",
      },
    });
    