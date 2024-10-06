
import AuthNavigation from "./authNavigator"
import MainNavigation from "./mainNavigator";
import useAuthStore from "../containers/authContainer/zustandAuthStore";
import { NavigationContainer } from '@react-navigation/native';
const AppNavigation = () => {
    const userLoggedIn = useAuthStore((state) => state.userLoggedIn);
    return (
        <NavigationContainer>
            {userLoggedIn ? <MainNavigation /> : <AuthNavigation />}
        </NavigationContainer>
    )
}

export default AppNavigation;
