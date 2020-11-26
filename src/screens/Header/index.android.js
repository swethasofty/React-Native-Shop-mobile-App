import React, { Component } from "react";
//import Footer from "../footer/iconText";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  ListItem,
  List,
  ScrollableTab,
  Tabs,
  Tab,
  Footer,
  FooterTab,
  TabHeading,
  View
} from "native-base";
import ScrollTab from "../tab/scrollableTab";
import TabOne from "../tab/tabOne";
import TabTwo from "../tab/tabTwo";
import TabThree from "../tab/tabThree";
import TabFour from "../tab/tabFour";
import TabFive from "../tab/tabFive";
import TabScreen from "../tab";
import { Alert, ScrollView } from "react-native";
const PlayerScreen = ({ navigation }) => (<TabOne navigation={navigation}/>);



import styles from "./styles";

const datas = [
  {
    route: "Header6",
    text: "Multiple Icon Buttons"
  },
  {
    route: "Header7",
    text: "Title and Subtitle"
  },
  {
    route: "Header8",
    text: "Custom Background Color"
  }
];


class HeaderNB extends React.Component {
  // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: false,
      tab6: false,
      tab7: false,
      tab8: false,
      tab9: false,
      tab10: true,
      tab11: false,
      tab12: false,
      tab13: false,
      tab14: false
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: false,
      tab6: false,
      tab7: false,
      tab8: false,
      tab9: false,
      tab10: false,
      tab11: false,
      tab12: false,
      tab13: false,
      tab14: false
    });
    
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      tab5: false,
      tab6: false,
      tab7: false,
      tab8: false,
      tab9: false,
      tab10: false,
      tab11: false,
      tab12: false,
      tab13: false,
      tab14: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      tab5: false,
      tab6: false,
      tab7: false,
      tab8: false,
      tab9: false,
      tab10: false,
      tab11: false,
      tab12: false,
      tab13: false,
      tab14: false
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
      tab5: false,
      tab6: false,
      tab7: false,
      tab8: false,
      tab9: false,
      tab10: false,
      tab11: false,
      tab12: false,
      tab13: false,
      tab14: false
    });
    
  }
  toggleTab5() {
    alert("hiii")
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: true,
      tab6: false,
      tab7: false,
      tab8: false,
      tab9: false,
      tab10: false,
      tab11: false,
      tab12: false,
      tab13: false,
      tab14: false
    }); }
    toggleTab6() {
      
      this.setState({
        tab1: false,
        tab2: false,
        tab3: false,
        tab4: false,
        tab5: false,
        tab6: true,
        tab7: false,
        tab8: false,
        tab9: false,
        tab10: false,
        tab11: false,
        tab12: false,
        tab13: false,
        tab14: false
      });   }

      toggleTab6() {
        this.setState({tab1: false,tab2: false,tab3: false,tab4: false,tab5: false,tab6: true,tab7: false,tab8: false,
                      tab9: false,tab10: false,tab11: false,tab12: false,tab13: false,tab14: false
        });   }
      toggleTab7() {
        this.setState({tab1: false,tab2: false,tab3: false,tab4: false,tab5: false,tab6: false,tab7: true,tab8: false,
                      tab9: false,tab10: false,tab11: false,tab12: false,tab13: false,tab14: false
        });   }
      toggleTab8() {
        this.setState({tab1: false,tab2: false,tab3: false,tab4: false,tab5: false,tab6: false,tab7: false,tab8: true,
                      tab9: false,tab10: false,tab11: false,tab12: false,tab13: false,tab14: false
        });   }
      toggleTab9() {
        this.setState({tab1: false,tab2: false,tab3: false,tab4: false,tab5: false,tab6: false,tab7: false,tab8: false,
                    tab9: true,tab10: false,tab11: false,tab12: false,tab13: false,tab14: false
      });   }
      toggleTab10() {
        this.setState({tab1: false,tab2: false,tab3: false,tab4: false,tab5: false,tab6: false,tab7: false,tab8: false,
                      tab9: false,tab10: true,tab11: false,tab12: false,tab13: false,tab14: false
        });   }
      toggleTab11() {
        this.setState({tab1: false,tab2: false,tab3: false,tab4: false,tab5: false,tab6: false,tab7: false,tab8: false,
                      tab9: false,tab10: false,tab11: true,tab12: false,tab13: false,tab14: false
        });   }
      toggleTab12() {
        this.setState({tab1: false,tab2: false,tab3: false,tab4: false,tab5: false,tab6: false,tab7: false,tab8: false,
                      tab9: false,tab10: false,tab11: false,tab12: true,tab13: false,tab14: false
        });   }
      toggleTab13() {
        this.setState({tab1: false,tab2: false,tab3: false,tab4: false,tab5: false,tab6: false,tab7: false,tab8: false,
                      tab9: false,tab10: false,tab11: false,tab12: false,tab13: true,tab14: false
        });   }
      toggleTab14() {
        this.setState({tab1: false,tab2: false,tab3: false,tab4: false,tab5: false,tab6: false,tab7: false,tab8: false,
                      tab9: false,tab10: false,tab11: false,tab12: false,tab13: false,tab14: true
        });   }
  render() {
    const {navigate} = this.props.navigation; 
    return (
      <Container style={styles.container}>
        {/* <TabOne navigation={navigate}/> */}
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
        <Right>
          <Button active={this.state.tab1} onPress={() => this.toggleTab1()} transparent>
            <Icon active={this.state.tab1} name="search" />
          </Button>
          <Button active={this.state.tab2} onPress={() => this.toggleTab2()} transparent>
            <Icon active={this.state.tab2} name="ios-notifications" />
          </Button>
          <Button active={this.state.tab3} onPress={() => this.toggleTab3()} transparent>
            <Icon active={this.state.tab3} name="heart" />
          </Button>
          <Button active={this.state.tab4} onPress={() => this.toggleTab4()} transparent>
              {/* <Icon name="more" /> */}
            <Icon active={this.state.tab4} name="md-cart"/>
          </Button>
        </Right>
        </Header>
        <View>
        <ScrollView horizontal >
            <Button active={this.state.tab5} onPress={() => this.toggleTab5() }>
              <Text>Fashion's{this.state.tab5}</Text> 
            </Button>
            <Button active={this.state.tab6} onPress={() => this.toggleTab6()}>
              <Text>Toys{this.state.tab6}</Text>
            </Button>
            <Button active={this.state.tab7} onPress={() => this.toggleTab7()}>
              <Text>Go Organic{this.state.tab7}</Text>
            </Button>
            <Button active={this.state.tab8} onPress={() => this.toggleTab8()}>
              <Text>Home Essentials{this.state.tab8}</Text>
            </Button>
      </ScrollView>
      </View>
         <Content>
        
        <View>
         
         {this.state.tab5===true && <TabOne />}
        {this.state.tab6===true && <TabTwo />}
        {this.state.tab7===true && <TabThree />}
        {this.state.tab8===true && <TabOne />}
        {this.state.tab10===true && <TabOne />}
        {this.state.tab11===true && <TabTwo />}
        {this.state.tab12===true && <TabThree />}
        {this.state.tab13===true && <TabOne />}
        </View>
 
        </Content>
        <Footer>
        <ScrollView horizontal>
          <FooterTab renderTabBar={() => <ScrollableTab />}>
          
            <Button active={this.state.tab10} onPress={() => this.toggleTab10()}>
              <Icon active={this.state.tab10} name="home" />
              <Text>Home{this.state.tab5}</Text>
            </Button>
            <Button active={this.state.tab11} onPress={() => this.toggleTab11()}>
              <Icon active={this.state.tab11} name="apps" />
              <Text>Category</Text>
            </Button>
            <Button active={this.state.tab12} onPress={() => this.toggleTab12()}>
              <Icon active={this.state.tab12} name="md-videocam" />
              <Text>Studio</Text>
            </Button>
            <Button active={this.state.tab13} onPress={() => this.toggleTab13()}>
              <Icon active={this.state.tab13} name="easel" />
              <Text>Explore</Text>
            </Button>
            <Button 
            onPress={() => this.props.navigation.openDrawer()}>
              <Icon active={this.state.tab14} name="contact" />
              <Text>Profile</Text>
            </Button>
            <Button 
            onPress={() => this.props.navigation.navigate("Product")}>
              <Icon active={this.state.tab14} name="contact" />
              <Text>Product detail</Text>
            </Button>
          </FooterTab>
          </ScrollView>
        </Footer>
      </Container>
    );
  }
}

export default HeaderNB;
