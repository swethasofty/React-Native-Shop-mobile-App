import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body,
  ScrollableTab
} from "native-base";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";
import TabFour from "./tabFour";
import TabFive from "./tabFive";

class BasicTab extends Component {
  render() {
    return (
      <Container>
        {/* <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title> Scrollable Tabs</Title>
          </Body>
          <Right />
        </Header> */}

        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Fashions">
            <TabOne />
          </Tab>
          <Tab heading="Toys">
            <TabTwo />
          </Tab>
          <Tab heading="Go Organic">
            <TabThree />
          </Tab>
          <Tab heading="Home Essentials">
            <TabFour />
          </Tab>
          <Tab heading="Skin Care">
            <TabFive />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default BasicTab;
