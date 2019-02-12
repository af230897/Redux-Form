import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  ScrollView,
  Image
} from "react-native";
import store from "./src/store";
import Myform from "./src/ourForm";
import Myyform from "./src/secForm";
// import Secform from "./src/ourForm"
import { Provider } from "react-redux";
import DatePicker from "react-native-datepicker";

export default class App extends Component {
  constructor() {
    super();
    this.state = { date: "2016-05-15", bgColor: true, genColor : true };
  }
  onepress = () => {
    this.setState({ bgColor: true });
    console.warn(this.state.bgColor);
  };

  twopress = () => {
    this.setState({ bgColor: false });
    console.warn(this.state.bgColor);
  };
  onep = () => {
    this.setState({ genColor: true });
    console.warn(this.state.genColor);
  };

  twop = () => {
    this.setState({ genColor: false });
    console.warn(this.state.genColor);
  };


  render() {
    const { bgColor } = this.state;
    const {genColor} = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ width: 420 }}>
            <TouchableOpacity style={{ flexDirection: "row", paddingTop: 5 }}>
              <Image
                source={require("./src/assets/image/la.png")}
                style={{ height: 40, width: 40, paddingLeft: 10 }}
              />
              <Text style={{ fontSize: 30, color: "blue" }}>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.touch}>
            <TouchableOpacity
              style={[styles.touch1, bgColor ? styles.tou : styles.untou]}
              onPress={this.onepress}
            >
              <Text style={styles.texts}>SIGN-IN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.touch2, !bgColor ? styles.tou : styles.untou]}
              onPress={this.twopress}
            >
              <Text style={styles.texts}>SIGN-UP</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 10 }}>
            <Provider store={store}>
              <Myform />
            </Provider>
          </View>
          <View style={styles.touch}>
          <TouchableOpacity
              style={[styles.touch1, genColor ? styles.tou : styles.untou]}
              onPress={this.onep}
            >
              <Text style={styles.texts}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.touch2, !genColor ? styles.tou : styles.untou]}
              onPress={this.twop}
            >
              <Text style={styles.texts}>Female</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20 }}>
            <Provider store={store}>
              <Myyform />
            </Provider>
          </View>

          <View style={{ width: "90%", marginTop: 10, flexDirection: "row" }}>
            <Text style={[styles.texts, { fontSize: 25, marginTop: 10 }]}>
              Date of birth :
            </Text>

            <DatePicker
              style={{ width: 200, paddingTop: 8, paddingHorizontal: 8 }}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-2000"
              maxDate="01-01-2030"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={date => {
                this.setState({ date: date });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "60%",
              margin: 32
            }}
          >
            <View>
              <TouchableOpacity style={[styles.welcome, { borderRadius: 10 }]}>
                <Text style={{ fontSize: 25 }}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={[styles.welcome, { borderRadius: 10 }]}>
                <Text style={{ fontSize: 25 }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: "center",
  //   margin: 10
  // },
  welcome: {
    backgroundColor: "#ddd",
    borderColor: "blue",
    borderWidth: 2,
    padding: 15
  },
  touch: {
    flexDirection: "row",
    marginTop: 30,
    borderColor: "red"
  },
  TextInput: {
    margin: 10,
    height: 50,
    width: 300,
    backgroundColor: "#eee",
    fontSize: 20,
    paddingLeft: 10
  },

  texts: {
    fontSize: 30,
    marginTop: 5,
    color: "#777"
  },
  touch1: {
    borderColor: "blue",
    borderWidth: 2,
    padding: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingVertical: 1
  },

  touch2: {
    borderColor: "blue",
    borderWidth: 2,
    padding: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 1
  },
  tou: {
    backgroundColor: "blue"
  },
  untou: {
    backgroundColor: "white"
  }
});
