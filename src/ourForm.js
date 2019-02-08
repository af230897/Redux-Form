import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { reduxForm, Field } from "redux-form";
// import { Button } from "native-base";

const validate = values => {
  const errors = {};
  if (!values.fname) {
    errors.fname = "please fill the fname";
  }
  else if(values.fname.length >5){
      errors.fname = "max letter 5"
  }
  if (!values.pnumber ){
      errors.pnumber ="please fill number"
  }
  else if(Number(values.pnumber) !=10){
      errors.pnumber= "must be 10 digit"
  }

  return errors;
};
const myFields = ({ label, meta: { error, touched }, input:{onChange} }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput style={{ width: 200, borderWidth: 1 , marginBottom : 10}} 
      onChangeText={onChange}
      />
      {touched && (error && <Text style={{ color: "red" }}>{error}</Text>)}
    </View>
  );
};

const myBtn = values => {
  alert(values);
};

const myForm = props => {
  const { handleSubmit } = props;
  return (
    <View>
      <Field name="fname" component={myFields} label="First Name" />
      <Field name="lname" component={myFields} label="Last Name" />
      <Field name="pnumber" component={myFields} label="Phone Number" />
      <Button title="submit" onPress={handleSubmit(myBtn)} />
    </View>
  );
};
const ourForm = reduxForm({
  form: "Abhi",
  validate
})(myForm);

export default ourForm;
