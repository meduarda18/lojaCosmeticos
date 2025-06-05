import {View, Text, Button} from "react-native"
import styles from './Home.js'

import {useNavigation} from '@react-navigation/native'

function Home(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>
                Home
            </Text>
            <Button title="Entrar" onPress={() => navigation.navigate("Produtos")}>

            </Button>
        </View>
    );
}

export default Home;