import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body,Grid,Col} from "native-base";
import { Image } from "react-native";


import { Platform, StyleSheet, FlatList, Alert,View,SafeAreaView,TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import {TabTwo} from "./tabTwo";
import Anatomy from "../anatomy/index";
import { withNavigation,useNavigation  } from 'react-navigation';
import { constant } from "lodash";

const cover = require("../../../assets/fashion.png");
const kid = require("../../../assets/kid.jpg");
const blue = require("../../../assets/blue.jpg");

 class TabOne extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        GridListItems: [
          { key: "Skptricks",url:kid,price:"$10" },
          { key: "Sumit",url:blue, price:"$20" },
          { key: "Amit",url:blue,price:"$20"  },
          { key: "React",url:kid,price:"$10"  },
          { key: "React Native",url:kid,price:"$30"  },
          { key: "Java",url:blue,price:"$10" },
          { key: "React",url:kid ,price:"$10" },
          { key: "React Native",url:kid  }
         

        ]
      };
    }
    GetGridViewItem(item) {
      Alert.alert(item)
      this.props.navigation.navigate("ProductDeatils",
      {params:{ price: item,
        id:"1000",
        url: this.state.GridListItems.url} 
      });
    }
  render() {
  
    return (
      <View style={styles.container}>
      <FlatList
         data={ this.state.GridListItems }
         renderItem={ ({item}) =>
           <View style={styles.item}>
            {/* <Text style={styles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.key)} ><Image source={item.url} /> </Text> */}
            <TouchableOpacity  style={styles.image}   onPress={this.GetGridViewItem.bind(this, item.price)}  >
            <Image  source={item.url} />
            </TouchableOpacity  >
          
            <View style={styles.bottomView}>
            <Text style={styles.paragraph}>{item.key} {item.price} </Text>
            </View>
            </View> }
         numColumns={2}
         
      />
      
    </View>
        
     
    
    );
  }
}
export default withNavigation(TabOne);

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   backgroundColor: "#e5e5e5"
  // },
  container: {
    marginTop:constant.statusBarHeight,
    // backgroundColor: "#e5e5e5"
  },
//   headerText: {
//     fontSize: 20,
//     textAlign: "right",
//     margin: 10,
//     fontWeight: "bold"
//   },
//   GridViewContainer: {
//    flex:1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    height: 100,
//    margin: 5,
//    backgroundColor: 'white'
// },
// GridViewTextLayout: {
//    fontSize: 20,
//    fontWeight: 'bold',
//    justifyContent: 'center',
//    color: 'black',
//    padding: 10,
//  },
 item:{
   flex:1/2,
   aspectRatio:1,
   margin:2
 },
 paragraph:{
   fontSize:15,
   fontWeight:'bold',
   textAlign:'left',
   color:'black',
   
 },
 image:{
   position:"absolute",
   resizeMode:"contain",
   top:0,
   left:0,
   bottom:0,
   right:0,
   borderBottomLeftRadius: 10,
  
   borderColor: "grey",
   borderWidth: 2,
  //  tintColor: "#000000",
//    height: 100,
//  width: 200
 },
 bottomView: {
  width: '100%',
  height: 50,
  justifyContent: 'center',
  position: 'absolute', //Here is the trick
  bottom: 0, //Here is the trick
}
});

 {/* <Grid>
      <Col>
      <Image source={cover} />
      <Text  onPress={() => {this.props.navigation.navigate("ProductDeatils");}}>test nesteds</Text>
      </Col>
       <Col>
      <Image source={cover} />
      <Text  onPress={() => {this.props.navigation.navigate("Anatomy");}}>test nesteds</Text>
      </Col>
      </Grid> */}
      {/* <Grid>  
        <Card>
          <CardItem>
            <Body>
              <Image source={bigsale} />
            </Body>
          </CardItem>
        </Card>
        </Grid>   */}