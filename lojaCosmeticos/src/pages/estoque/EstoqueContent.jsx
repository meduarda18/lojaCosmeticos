import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './EstoquePageStyle';

export default function EstoqueContent() {
    return (
        <View style={{ padding: 16 }}>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome ou código do produto"
            />
        </View>
    );
}
