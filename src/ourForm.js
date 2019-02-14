import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { reduxForm, Field } from "redux-form";
// import { Button } from "native-base";

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const validate = values => {
  const errors = {};
  if (!values.fname) {
    errors.fname = "please fill the fname";
  } else if (values.fname.length > 50) {
    errors.fname = "max letter 25";
  }
  if (!values.lname) {
    errors.lname = "please fill the lname";
  } else if (values.lname.length > 25) {
    errors.lname = "max letter 25";
  }
  if (!values.address) {
    errors.address = "please fill the address";
  } else if (values.address.length > 25) {
    errors.address = "max letter 25";
  }

  return errors;
};
const myFields = ({
  label,
  mulline,
  textentry,
  placeh,
  meta: { error, touched },
  input: { onChange }
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <View>
        <Text style={{ fontSize: 15 }}>{label} :</Text>
      </View>
<View style={{flexDirection : 'column'}}>
      <View>
        <TextInput
          secureTextEntry={textentry}
          multiline={mulline}
          style={{
            width: 200,
            marginBottom: 10,
            borderBottomWidth: 2,
            borderBottomColor: "gray"
          }}
          placeholder = {placeh}
          onChangeText={onChange}
        />
      </View>
      
      <View>{touched && (error && <Text style={{ color: "red" }}>{error}</Text>)}</View></View>
    </View>
  );
};

const myBtn = values => {
  alert(JSON.stringify(values));
};

const myForm = props => {
  const { handleSubmit } = props;
  return (
    <View>
      <Field
        name="fname"
        textentry={false}
        component={myFields}
        label="FIRST NAME"
      />

      <Field
        name="lname"
        textentry={false}
        component={myFields}
        label="LAST NAME"
      />
      <Field
        name="address"
        textentry={false}
        component={myFields}
        label="ADDRESS"
        mulline={true}
        placeh='address'
      />

      <Button title="submit" onPress={handleSubmit(myBtn)} />
    </View>
  );
};

const ourForm = reduxForm({
  form: "Abhi",
  validate
})(myForm);

export default ourForm;

// const required = value => value ? undefined : 'Required';
// const maxLength = value => value && value.length > 15 ? 'Must be 15 character or less' : undefined;
// const isValidEmail = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
// const number = value => value && isNaN(Number(value)) ? undefined : 'UseNAme Must be string';