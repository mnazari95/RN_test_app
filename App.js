/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Text, View, TextInput , Button} from 'react-native';

const App = () => {

  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  const onBtnClicked = () => {
    console.log(`user: ${user}, pass: ${pass}`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{marginRight: 150}}>Username:</Text>
      <TextInput
        style={{
          height: 25,
          width: 210,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        name="user"
        placeholder="username"
        textContentType="emailAddress"
        value={user}
        onChangeText={val => setUser(val)}
      />
      <Text style={{marginRight: 150}}>Password:</Text>
      <TextInput
        style={{
          height: 25,
          width: 210,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        name="pass"
        placeholder="password"
        value={pass}
        secureTextEntry={true}
        onChangeText={val => setPass(val)}
      />
      <Button
        style={{
          height: 30,
          width: 80,
          borderColor: 'green',
          borderWidth: 1,
        }}
        onPress={onBtnClicked}
        title="login"
        accessibilityLabel="login to your account"
      />
    </View>
  );
};

export default App;
