import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../pages/home/Home'
import Produtos from '../pages/produtos/Produtos'

export default function Index() {
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Produtos' component={Produtos}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}