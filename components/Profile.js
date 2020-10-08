import React from 'react';
import {View, Text} from 'react-native';

const Profile = ({route, navigation}) => {

    const {name, user, pass} = route.params;

    return(
        <View>
            <Text>
                Profile Page of {name}
            </Text>
            <Text>
                coming from login btn {user} {pass}
            </Text>
        </View>
    );
}

export default Profile;