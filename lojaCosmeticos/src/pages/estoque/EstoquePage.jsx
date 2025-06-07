import React, { useState } from 'react';
import { View } from 'react-native';
import EstoqueContent from './EstoqueContent';
import TabsHeader from "../../componentes/TabsHeader";
import {Input} from "react-native-elements";
import VendasPage from "../vendas/VendasPage";

export default function EstoquePage() {
    const [abaAtiva, setAbaAtiva] = useState('estoque');

    return (
        <View style={{ flex: 1, paddingTop: 20 }}>
            <TabsHeader activeTab={abaAtiva} setActiveTab={setAbaAtiva} />
            {abaAtiva === 'estoque' ? <EstoqueContent /> : <VendasPage />}
        </View>
    );
}
