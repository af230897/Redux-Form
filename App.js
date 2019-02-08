import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import store from "./src/store";
import Myform from "./src/ourForm";
import { Provider } from "react-redux";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Myform />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
