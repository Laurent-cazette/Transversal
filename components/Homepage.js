import {Button, Text} from "react-native";

export const HomePage = ({navigation}) => {
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})
            }
        />
    );
};

export const ProfileScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};