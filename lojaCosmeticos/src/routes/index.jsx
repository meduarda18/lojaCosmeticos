import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from '../pages/home/HomePage'
import EstoquePage from '../pages/estoque/EstoquePage'

export default function Index() {
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Loja Cosméticos' component={HomePage}/>
                <Stack.Screen name='Produtos' component={EstoquePage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}