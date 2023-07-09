import {
    Text,
    View,Button
  } from 'react-native';

const ComponentData = () => {
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Hello component</Text>
            <Button title='Press Here to access data'></Button>
        </View>
    )
}

export default ComponentData;