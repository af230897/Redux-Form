import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { reduxForm, Field } from "redux-form";

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = "please fill the valid email and password ";
  } else if (values.password.length > 25) {
    errors.password = "max letter 25";
  }

  return errors;
};
const myFields = ({
  label,
  textentry,
  meta: { error, touched },
  input: { onChange }
}) => {
    return (
        <View
          style={{
            flexDirection: "row",
            alignItems: 'center',
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
              style={{
                width: 200,
                marginBottom: 10,
                borderBottomWidth: 2,
                borderBottomColor: "gray"
              }}
              
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

const myyForm = props => {
  const { handleSubmit } = props;
  return (
    <View>
      <Field
        name="email"
        type="email"
        component={myFields}
        label="Email"
        validate={email}
      />
      <Field
        name="password"
        component={myFields}
        label="PASSWORD"
        textentry={true}
      />

      <Button title="submit" onPress={handleSubmit(myBtn)} />
    </View>
  );
};

const secForm = reduxForm({
  form: "sec",
  validate
})(myyForm);

export default secForm;

// const required = value => value ? undefined : 'Required';
// const maxLength = value => value && value.length > 15 ? 'Must be 15 character or less' : undefined;
// const isValidEmail = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
// const number = value => value && isNaN(Number(value)) ? undefined : 'UseNAme Must be string';
