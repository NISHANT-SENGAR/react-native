import { useState } from 'react';
import {
    Text,
    View, Button, TextInput
} from 'react-native';

const Login = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, color: 'black' }}>Login Screen</Text>
            <TextInput style={{ color: 'black', borderColor: '#000', borderWidth: 4, borderRadius:10,width:100,margin:5  }}
                onChangeText={(text) => setName(text)} placeholder='Enter name' />
            <TextInput style={{ color: 'black', borderColor: '#000', borderWidth: 4, borderRadius:10,width:100,margin:5 }}
                onChangeText={(age) => setAge(age)} placeholder='Enter age' />
            <Button title='Go to Home Page' onPress={() => props.navigation.navigate('Home', { name, age })} />
        </View>
    )
}

export default Login;