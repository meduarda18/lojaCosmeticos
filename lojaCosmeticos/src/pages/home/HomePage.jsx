import {View, Text, TouchableOpacity, Image} from "react-native"
import styles from './HomeStyle.js'
import Logo from '../../../assets/LogoCosmeticos.jpg'

import {useNavigation} from '@react-navigation/native'

function HomePage(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate("Estoque")}
            >
                <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomePage;