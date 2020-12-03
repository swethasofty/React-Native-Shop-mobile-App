import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body,Grid,Col} from "native-base";
import { Image } from "react-native";
import Splashscreen from "../splashscreen"

import { Platform, StyleSheet, FlatList, Alert,View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import {TabTwo} from "./tabTwo";
import Anatomy from "../anatomy/index";
import { withNavigation,useNavigation  } from 'react-navigation';

const cover = require("../../../assets/fashion.png");
const kid = require("../../../assets/kid.jpg");
const blue = require("../../../assets/blue.jpg");

 class TabOne extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        GridListItems: [
          { key: "Skptricks",url:cover },
          { key: "Sumit",url:kid  },
          { key: "Amit",url:blue  },
          { key: "React",url:cover  },
          { key: "React Native",url:cover  },
          { key: "Java",url:cover  }
         

        ]
      };
    }
    GetGridViewItem(item) {
      Alert.alert(item)
      this.props.navigation.navigate("ProductDeatils");
      

    }
  render() {
  
    return (
      

      <Content padder>
        <View style={styles.container}>
         <FlatList
            data={ this.state.GridListItems }
            renderItem={ ({item}) =>
              <View style={styles.GridViewContainer}>
               <Text style={styles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.key)} ><Image source={item.url} /> </Text>
               <Text>{item.key}  </Text>
              </View> }
            numColumns={2}
         />
       </View>
        
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
      </Content>
    );
  }
}
export default withNavigation(TabOne);

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