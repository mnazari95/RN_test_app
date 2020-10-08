import React, {useState} from 'react';
import {Button, Text, View, TextInput} from 'react-native';

const Home = ({navigation}) => {

    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    const onBtnClicked = () => {
        navigation.navigate('Profile', {
            user,
            pass,
        });
    };

    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{marginRight: 150}}>Username:</Text>
        <TextInput
            style={{
            width: 210,
            borderColor: 'gray',
            borderWidth: 1,
            color: 'black',
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
            onPress={onBtnClicked}
            title="login"
            accessibilityLabel="login to your account"
        />
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Profile', { name: 'Jane' })
            }
        />
    </View>
    );
}

export default Home;