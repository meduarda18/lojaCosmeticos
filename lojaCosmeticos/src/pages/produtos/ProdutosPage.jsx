import {View, TextInput} from "react-native"
import styles from './ProdutosStyle.js'

function ProdutosPage(){
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Digite o nome ou código do produto'>
            </TextInput>
        </View>
    );
}

export default ProdutosPage;