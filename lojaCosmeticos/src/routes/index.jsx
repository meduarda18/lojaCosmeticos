import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from '../pages/home/HomePage'
import EstoquePage from '../pages/estoque/EstoquePage'
import DetalhesProduto from "../pages/produto/DetalhesProduto";
import EditarProduto from "../pages/produto/EditarProduto";
import CadastrarProduto from "../pages/produto/CadastrarProduto";
import CadastrarVenda from "../pages/vendas/venda/CadastrarVenda";

export default function Index() {
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Loja Cosméticos' component={HomePage}/>
                <Stack.Screen name='Estoque' component={EstoquePage}/>
                <Stack.Screen name='Detalhes do Produto' component={DetalhesProduto} />
                <Stack.Screen name='Editar Produto' component={EditarProduto} />
                <Stack.Screen name='Cadastrar Produto' component={CadastrarProduto} />
                <Stack.Screen name='Cadastrar Venda' component={CadastrarVenda} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}