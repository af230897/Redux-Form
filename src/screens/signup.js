import React, { Component } from "react";
import DatePicker from "react-native-datepicker";
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

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "2016-05-15" };
  }

  render() {
    return (
      // back
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
              style={[
                styles.welcome,
                {
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  paddingHorizontal: 40,
                  paddingVertical: 2
                }
              ]}
            >
              <Text style={styles.texts}>SIGN-IN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.welcome,
                {
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  paddingHorizontal: 40,
                  paddingVertical: 1
                }
              ]}
            >
              <Text style={styles.texts}>SIGN-UP</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingTop: 10,
              borderBottomWidth: 2,
              borderColor: "grey"
            }}
          >
            <View style={{ borderBottomWidth: 2, borderColor: "grey" }}>
              <TextInput style={styles.TextInput} placeholder="E-MAIL" />
            </View>
            <View style={{ borderBottomWidth: 2, borderColor: "grey" }}>
              <TextInput style={styles.TextInput} placeholder="Password" />
            </View>
            <View>
              <TextInput
                style={styles.TextInput}
                multiline={true}
                placeholder="Address"
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderBottomWidth: 3,
              borderColor: "grey",
              padding: 15
            }}
          >
            <Text
              style={[
                styles.texts,
                {
                  paddingTop: 20,
                  paddingRight: 15
                }
              ]}
            >
              Gender :
            </Text>

            <View style={styles.touch}>
              <TouchableOpacity
                style={[
                  styles.welcome,
                  {
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    paddingVertical: 1
                  }
                ]}
              >
                <Text style={styles.texts}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.welcome,
                  {
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingVertical: 1
                  }
                ]}
              >
                <Text style={styles.texts}>Female</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              paddingTop: 10,
              borderBottomWidth: 2,
              borderColor: "grey"
            }}
          >
            <View style={{ borderBottomWidth: 2, borderColor: "grey" }}>
              <TextInput style={styles.TextInput} placeholder="E-MAIL" />
            </View>
            <View>
              <TextInput style={styles.TextInput} placeholder="Password" />
            </View>
          </View>

          <View style={{ width: "90%", marginTop: 10, flexDirection: "row" }}>
            <Text style={styles.texts}>Date of birth :</Text>

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
    backgroundColor: "#fff"
  },
  welcome: {
    backgroundColor: "#fff",
    borderColor: "blue",
    borderWidth: 2,
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  touch: {
    flexDirection: "row",
    marginTop: 25,

    justifyContent: "center",
    alignItems: "center"
  },
  TextInput: {
    margin: 10,
    height: 50,
    width: 300,
    backgroundColor: "#fff",
    fontSize: 20,
    paddingLeft: 10
  },

  texts: {
    fontSize: 30,
    marginTop: 5,
    color: "#777"
  }
});
