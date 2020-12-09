import React, { Component,useState} from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Alert
} from "native-base";
import {View ,TouchableOpacity,Image,StyleSheet,Dimensions,ImageBackground,ScrollView} from "react-native";
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import CarouselComponent from '../Common/Carousel/index';
import Carousel from 'react-native-carousel';
import { withNavigation,useNavigation  } from 'react-navigation';
//import stylesLogo from "./styles";

import Logo from "../Common/Logo/Logo";
import Input from "../Common/Input/Input"
var screenWidth = Dimensions.get('window').width;

const logoCover = require("../../../assets/logo1.png");
const ImagePath = require("../../../assets/shopping.jpg")
const ImageShopping = require("../../../assets/shoppingGirl.jpg")
const cover = require("../../../assets/fashion.png");
const productData = {
  name: "Colorfull Styles Top",
  price: "$20",
  images: [ImagePath],
  idealFor: 'woman',
  color: ['red', 'blue', 'black', 'green'],
  size: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
}


class ProductDetails extends Component {
  constructor(props){
    super(props);
    const { state } = this.props.navigation;
    var title = state.params.price;
  
  
    this.state = {
       visible: false,
    }
 }


  render() {

    // const { navigation } = this.props;
    // const id = navigation.getParam('price')
    // const id = this.props.navigation.getParam('price');
    
    const price=JSON.stringify(this.props.navigation.state.params.price);
    const Details=JSON.stringify(this.props.navigation.state.params.Details);
    const url=JSON.stringify(this.props.navigation.state.params.url);
    console.log("---"+parseFloat(price))
    console.log("---++"+price)
    console.log("++"+url)

    const backButton = () => {
    alert('back');
  }

  const checkout = () => {
     alert('checkout');
  }
 
    const openModal = () => {
      alert('open');
    }

    const closeModal = () => {
      alert('close');
    }
    const hideModal = () => {
      //alert('close');
      this.props.navigation.navigate("Bag");
      this.setState({ visible: false });
    }
    const review=() => {
      alert("hhh")
    }

    const renderImageList = (images) => {
      return (images.map((img, index) => {
          return (<View key={index} style={styles.carouselRow}>
                  <ImageBackground source={url} style={{ width: '100%', height: '100%', opacity: 0.7}} />
              </View>
          )
      }))
    }

    
    const selectColors = (color) => {
      return (<View style={styles.productColorRow}>
          {color.map((color, index) => {
              return <TouchableOpacity key={index} style={[styles.productColor, { backgroundColor: color }]}></TouchableOpacity>
          })}
      </View>)
  }

  const selectSizes = (size) => {
      return (<View style={styles.productSizesRow}>
          {size.map((size, index) => {
              return <TouchableOpacity key={index}><Text style={[styles.productSize]}>{size}</Text></TouchableOpacity>
          })}
      </View>)
  }
 
    return (
      <View style={styles.container}>
  
         <View style={styles.row1}>
        <View style={styles.CarouselContainer}>
        {renderImageList(productData.images)}
        </View>
        
        <View style={styles.row2}>
                <View style={styles.row2_Child}>
                    <Text style={styles.productName}>{Details}</Text>
                     <TouchableOpacity onPress={review}>
                     <MaterialIcon name="rate-review" size={25}  ><Text>Review</Text></MaterialIcon>
                     </TouchableOpacity>
                     
                   
                    <Text style={styles.productPrice}>${price}</Text>
                    {selectColors(productData.color)}
                    {selectSizes(productData.size)}
                </View>
                <View>
                  <Text>Easy 7 days returns and excahnge</Text>
                </View>
         </View>

         <View style={styles.row3}>
                {/* <Button buttonStyle={[styles.productButton]} onPress={openModal}><Text>Add To cart</Text></Button> */}
                <Button buttonStyle={[styles.productButton]}  onPress={() => {this.setState({ visible: true });
    }}><Text>Add To cart</Text></Button>
    <Button buttonStyle={[styles.productButton]}  onPress={() => {this.props.navigation.navigate("Product");}}><Text>try</Text></Button>


                <Button  buttonStyle={[styles.productButton]} onPress={checkout}><Text>Buy Now</Text></Button>
            </View>
            <View style={styles.container}>
  {/* <Button
    title="Show Dialog"
    onPress={() => {
      this.setState({ visible: true });
    }}
  /> */}
  <Dialog
    visible={this.state.visible}
    onTouchOutside={() => {
      this.setState({ visible: false });
    }}
  >
    <DialogContent>
    <View style={[styles.containerModal]}>
                <TouchableOpacity onPress={() => {this.setState({ visible: false }); }} style={styles.backIcon}>
                    <Icon name="close"  size={30}  />
                </TouchableOpacity>
                <View style={[styles.successBox]}>
                    {/* <Icon name="shopping" size={50} style={[styles.successIcon]} /> */}
                    <Icon size={50} style={[styles.successIcon]} name="md-cart"/>
                </View>
                <Text style={styles.msg}>One item added in your cart</Text>
                <Text style={styles.successText}>Success!</Text>
                <Button buttonStyle={[styles.checkOutButton]} onPress={hideModal}><Text>Submit</Text></Button>
            </View>
    </DialogContent>
  </Dialog>
</View>
      </View>
    
      </View>
    );
  }
}
Button
export default withNavigation(ProductDetails);

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    flex: 1,
    zIndex: -1,
  },
  carouselRow: {
    width: screenWidth,
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    marginTop:10
},
row1: {
  flex: 4,
  zIndex: -1,
},
row2: {
  flex: 3,
},
row2_Child: {
  marginLeft: 12,
  marginRight: 12,
  overflow: 'hidden',
},
productName: {
  fontSize: 18,
  paddingTop: 10,
  paddingBottom: 2,
},
productPrice: {
  fontSize: 18,
  paddingTop: 2,
  paddingBottom: 12,
},
productColorRow: {
  flexDirection: 'row',
},
productColor: {
  height: 20,
  width: 20,
  borderRadius: 50,
  marginRight: 15,
  marginBottom: 20,

},
productSizesRow: {
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
},
productSize: {
  padding: 8,
  marginTop: 10,
  borderWidth: 1,
  marginRight: 15,
  minWidth: 80,
  textAlign: 'center',
},
row3: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft: 25,
  paddingRight: 25,
  position: 'absolute',
  bottom: 15,
  flex: 1,
  width: '100%',
  alignItems: 'center',
},
productButton: {
  paddingLeft: 10,
  paddingRight: 10,
  minWidth: 140,
},
CarouselContainer: {
  width: 375,
  height:300,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  marginTop:10
},
Buttoncontainer: {
  flexDirection: 'row',
  padding: 10,
  justifyContent: "center",
  borderRadius: 45,
  borderWidth: 1,
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.2,
  elevation: 6,
  minWidth: 30,
  height: 50,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 10,
  marginBottom: 10,
  textAlign: 'center',
},
userNameStyle: {
  fontWeight: "bold",
  paddingTop: 2,
  paddingBottom: 2,
  fontSize: 16,
},
mainContainer: {
  flex: 1,
  backgroundColor: 'transparent',
  height: 400,
},
containerModal: {
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  borderRadius: 15,
  marginLeft: 25,
  marginRight: 25,
  height: 300,
},
backIcon: {
  fontSize: 25,
  position: 'absolute',
  top: 10,
  right: 10,
  zIndex: 9,
},
checkOutButton: {
  paddingLeft: 20,
  paddingRight: 20,
  minWidth: 200
},
msg: {
  fontSize: 16,
  paddingTop: 20,
  paddingBottom: 12,
},
successBox: {
  backgroundColor: "red",
  height: 150,
  width: 150,
  marginTop: 20,
  marginBottom: 15,
  borderRadius: 100,
  borderWidth: 8,
  borderColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  shadowOffset: { width: 0, height: 10 },
  shadowColor: 'black',
  shadowOpacity: 0.2,
},
successIcon: {
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
},
successText: {
  fontSize: 30,
  fontWeight: "bold",
  paddingTop: 10,
  paddingBottom: 8,
}
 });
