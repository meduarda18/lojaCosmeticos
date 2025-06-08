// components/TabsHeader.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './TabsHeaderStyle';

const TabsHeader = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { chave: 'estoque', label: 'Estoque' },
        { chave: 'vendas', label: 'Vendas' }
    ];

    return (
        <View style={styles.tabs}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.chave}
                    style={activeTab === tab.chave ? styles.tabActive : styles.tabInactive}
                    onPress={() => setActiveTab(tab.chave)}
                >
                    <Text style={activeTab === tab.chave ? styles.tabTextActive : styles.tabTextInactive}>
                        {tab.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default TabsHeader;
