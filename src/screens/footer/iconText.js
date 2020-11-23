import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Text,
  Body,
  Left,
  Right,
  Icon,
  ListItem,
  List
} from "native-base";
import styles from "./styles";
import TabOne from "../tab/tabOne";
import TabTwo from "../tab/tabTwo";
import TabThree from "../tab/tabThree";
import TabFour from "../tab/tabFour";
import TabFive from "../tab/tabFive";
import ScrollTab from "../tab/scrollableTab";
const routes = ["Anatomy", "Header", "Anatomy"];
const datas = [
  {
    route: "BasicFooter",
    text: "Basic Footer"
  },
  {
    route: "IconFooter",
    text: "Icon Footer"
  },
  {
    route: "IconText",
    text: "Icon & Text Footer"
  },
  {
    route: "BadgeFooter",
    text: "With Badge"
  }
];

class IconText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      tab5: false
    };
  }
 


  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      tab5: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      tab5: false
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
      tab5: false
    });
    
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: true
    });
    
  }
  render() {
    return (
      <Container style={styles.container}>
        {/* <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Footer</Title>
          </Body>
          <Right />
        </Header> */}
    
<Content>
{this.state.tab1===true && <TabOne />}
{this.state.tab2===true && <TabTwo />}
{this.state.tab3===true && <TabThree />}
{this.state.tab4===true && <TabOne />}
</Content>
        <Content padder />

        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Icon active={this.state.tab1} name="home" />
              <Text>Home</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} name="apps" />
              <Text>Category</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon active={this.state.tab3} name="md-videocam" />
              <Text>Studio</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Icon active={this.state.tab4} name="easel" />
              <Text>Explore</Text>
            </Button>
            <Button 
            active={this.state.tab5}
             onPress={() =>  this.props.navigation.navigate("TabOne")}>
              <Icon active={this.state.tab5} name="contact" />
              <Text>Profile</Text>
            </Button>

            <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
              </ListItem>}
          />
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default IconText;
