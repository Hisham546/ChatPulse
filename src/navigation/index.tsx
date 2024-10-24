
import MainNavigation from "./mainNavigator";
import useAuthStore from "../containers/authContainer/zustandAuthStore";
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from "./authNavigator";
const AppNavigation = () => {
    const userLoggedIn = useAuthStore((state) => state.userLoggedIn);
   

    return (
        <NavigationContainer>
            {userLoggedIn ? <MainNavigation /> : <AuthNavigation />}
        </NavigationContainer>
    )
}

export default AppNavigation;
