import React, { Component } from "react";

import { Platform, StyleSheet, FlatList, Alert,View,Dimensions } from "react-native";
import Carousel from 'react-native-carousel';
var width = Dimensions.get('window').width; 


 class Carousels extends Component {
   
  constructor(props) {
    super(props);
    children: React.ReactNode;
  };
  render() {
  
    return (
        <Carousel
        width={width}
        loop={true}
        animate={false}
        indicatorAtBottom={true}
        indicatorSpace={25}
        indicatorSize={50}
        indicatorOffset={10}
        inactiveIndicatorColor="#ffffff"
        indicatorColor="#000000"
        hideIndicators={false}
        indicatorText= '•'
        inactiveIndicatorText= '•'
    >
        {children}
    </Carousel>
    );
  }
}
export default Carousels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 20,
    textAlign: "right",
    margin: 10,
    fontWeight: "bold"
  },
  GridViewContainer: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   height: 100,
   margin: 5,
   backgroundColor: 'white'
},
GridViewTextLayout: {
   fontSize: 20,
   fontWeight: 'bold',
   justifyContent: 'center',
   color: 'black',
   padding: 10,
 }
});